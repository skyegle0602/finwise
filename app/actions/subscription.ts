"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getSubscription() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const { data, error } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).single()

  if (error) {
    return { error: error.message }
  }

  return { data }
}

export async function updateSubscription(subscription: {
  plan: "free" | "pro" | "business"
  billing_cycle: "monthly" | "annual"
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const currentPeriodEnd = new Date()
  if (subscription.billing_cycle === "monthly") {
    currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1)
  } else {
    currentPeriodEnd.setFullYear(currentPeriodEnd.getFullYear() + 1)
  }

  const { data, error } = await supabase
    .from("subscriptions")
    .update({
      plan: subscription.plan,
      billing_cycle: subscription.billing_cycle,
      status: "active",
      current_period_start: new Date().toISOString(),
      current_period_end: currentPeriodEnd.toISOString(),
    })
    .eq("user_id", user.id)
    .select()
    .single()

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/dashboard/subscription")
  return { data }
}
