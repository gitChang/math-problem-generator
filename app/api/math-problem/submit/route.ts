import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const { sessionId, answer } = await req.json();

  const { data: session, error: sessionError } = await supabase
    .from("math_problem_sessions")
    .select("*")
    .eq("id", sessionId)
    .single();

  if (sessionError || !session) {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }

  const correct = Number(answer) === Number(session.final_answer);

  const feedbackPrompt = `
    A student answered a math problem:
    Problem: ${session.problem_text}
    Correct Answer: ${session.final_answer}
    Student Answer: ${answer}
    Was it correct? ${correct ? "Yes" : "No"}

    Give personalized feedback for a Primary 5 student.
  `;

  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  const result = await model.generateContent(feedbackPrompt);
  const feedback = result.response.text();

  await supabase.from("math_problem_submissions").insert([
    {
      session_id: sessionId,
      student_answer: answer,
      is_correct: correct,
      feedback
    },
  ]);

  if (!sessionId || typeof answer !== "number") {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  return NextResponse.json({ feedback, correct });
}