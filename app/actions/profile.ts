"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function getProfile() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const { data, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (error) {
    return { error: error.message }
  }

  return { data }
}

export async function updateProfile(profile: {
  display_name?: string
  business_type?: string
  monthly_income?: number
  financial_goals?: string[]
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Not authenticated" }
  }

  const { data, error } = await supabase.from("profiles").update(profile).eq("id", user.id).select().single()

  if (error) {
    return { error: error.message }
  }

  revalidatePath("/dashboard")
  return { data }
}
