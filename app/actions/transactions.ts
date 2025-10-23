"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getTransactions(limit?: number) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  let query = supabase
    .from("transactions")
    .select("*")
    .eq("user_id", user.id)
    .order("transaction_date", { ascending: false })

  if (limit) {
    query = query.limit(limit)
  }

  const { data, error } = await query

  if (error) {
    return { error: error.message }
  }

  return { data }
}

export async function createTransaction(transaction: {
  category: string
  amount: number
  description?: string
  type: "income" | "expense"
  transaction_date?: string
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const { data, error } = await supabase
    .from("transactions")
    .insert({
      user_id: user.id,
      ...transaction,
    })
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  // Update budget spent amount if it's an expense
  if (transaction.type === "expense") {
    const { data: budget } = await supabase
      .from("budgets")
      .select("*")
      .eq("user_id", user.id)
      .eq("category", transaction.category)
      .single()

    if (budget) {
      await supabase
        .from("budgets")
        .update({ spent: (budget.spent || 0) + transaction.amount })
        .eq("id", budget.id)
    }
  }

  revalidatePath("/dashboard")
  revalidatePath("/dashboard/budget")
  return { data }
}

export async function getSpendingByCategory() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const { data, error } = await supabase
    .from("transactions")
    .select("category, amount")
    .eq("user_id", user.id)
    .eq("type", "expense")

  if (error) {
    return { error: error.message }
  }

  // Aggregate by category
  const categoryTotals = data.reduce((acc: Record<string, number>, transaction) => {
    acc[transaction.category] = (acc[transaction.category] || 0) + Number(transaction.amount)
    return acc
  }, {})

  return { data: categoryTotals }
}
