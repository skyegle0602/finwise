"use server"

import { generateText } from "ai"
import { createClient } from "@/lib/supabase/server"

export async function generateFinancialAdvice() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  // Get budgets
  const { data: budgets } = await supabase.from("budgets").select("*").eq("user_id", user.id)

  // Get recent transactions
  const { data: transactions } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user.id)
    .order("transaction_date", { ascending: false })
    .limit(20)

  // Get savings goals
  const { data: goals } = await supabase.from("savings_goals").select("*").eq("user_id", user.id)

  const prompt = `You are a financial advisor AI. Analyze the following financial data and provide 5-7 personalized recommendations:

Profile:
- Business Type: ${profile?.business_type || "Not specified"}
- Monthly Income: $${profile?.monthly_income || 0}
- Financial Goals: ${profile?.financial_goals?.join(", ") || "None"}

Budgets:
${budgets?.map((b) => `- ${b.category}: $${b.amount} (spent: $${b.spent})`).join("\n") || "No budgets set"}

Recent Transactions (last 20):
${transactions?.map((t) => `- ${t.type}: $${t.amount} in ${t.category}`).join("\n") || "No transactions"}

Savings Goals:
${goals?.map((g) => `- ${g.name}: $${g.current_amount}/$${g.target_amount}`).join("\n") || "No goals set"}

Provide advice in the following JSON format:
{
  "recommendations": [
    {
      "category": "budgeting|savings|spending|income|investment",
      "title": "Brief title",
      "description": "Detailed recommendation",
      "priority": "high|medium|low",
      "impact": "Brief impact statement"
    }
  ],
  "financialHealthScore": 0-100
}`

  try {
    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
    })

    // Parse the JSON response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const advice = JSON.parse(jsonMatch[0])
      return { data: advice }
    }

    return { error: "Failed to parse AI response" }
  } catch (error) {
    console.error("[v0] AI advice generation error:", error)
    return { error: "Failed to generate advice" }
  }
}

export async function askAIQuestion(question: string) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  // Get user context
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  const prompt = `You are a financial advisor AI helping a ${profile?.business_type || "business owner"} with monthly income of $${profile?.monthly_income || 0}.

User question: ${question}

Provide a helpful, personalized answer based on their financial situation. Keep it concise and actionable.`

  try {
    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
    })

    return { data: text }
  } catch (error) {
    console.error("[v0] AI question error:", error)
    return { error: "Failed to get answer" }
  }
}
