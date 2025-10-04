// app/api/math-problem/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST() {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
    Generate a Primary 5 level math word problem.
    Return JSON like:
    {
      "problem_text": "A bakery sold 45 cupcakes...",
      "final_answer": 15
    }
  `;

  const result = await model.generateContent(prompt);
  const raw = result.response.text();

  // Extract JSON block safely
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) {
    return NextResponse.json({ error: "Invalid AI response" }, { status: 500 });
  }

  let parsed;
  try {
    parsed = JSON.parse(match[0]);
  } catch (err) {
    return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("math_problem_sessions")
    .insert([{ problem_text: parsed.problem_text, final_answer: parsed.final_answer }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    problem: {
      problem_text: parsed.problem_text,
      final_answer: parsed.final_answer,
    },
    sessionId: data.id,
  });
}