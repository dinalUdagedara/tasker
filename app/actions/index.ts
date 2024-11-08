"use server";

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action") as string | null;
  if (action) {
    await signIn(action, { redirectTo: "/chat" });
  }
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}
