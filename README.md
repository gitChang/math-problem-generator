# 🧠 Math Problem Generator

An AI-powered web app that generates Primary 5-level math word problems, evaluates student answers, and provides personalized feedback. Built with Next.js, Supabase, and Gemini 2.5 Flash.

---

## 🔗 Live Demo

Try it here: [math-problem-generator-tan.vercel.app](https://math-problem-generator-tan.vercel.app)

---

## 📁 GitHub Repository

Source code: [github.com/gitChang/math-problem-generator](https://github.com/gitChang/math-problem-generator)

---

## ⚙️ Supabase Environment Variables

These are required to run the app locally or test the API:

```env
NEXT_PUBLIC_SUPABASE_URL=https://isolicdfkecvoyrjicah.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzb2xpY2Rma2Vjdm95cmppY2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzAxNzYsImV4cCI6MjA3NTE0NjE3Nn0.lma8gF8O8IxvfvMEYDrmNxq1hXfO3yvOxgl2lBCqDu4
```

> ⚠️ These are public keys meant for client-side access. Do not include service role keys or private credentials.

## ⚙️ Get Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/api-keys)
2. Create a new API key for Gemini

## 🚀 Getting Started

1. Clone the repo
2. Install dependencies
3. Add your `.env.local` file with the Supabase keys
4. Run locally with `npm run dev`

## 🧰 Tech Stack

- Next.js 14 (App Router)
- Supabase
- Gemini API (Gemini 2.5 Pro)
- TailwindCSS
- Vercel (Deployment)
