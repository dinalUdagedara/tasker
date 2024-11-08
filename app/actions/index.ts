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
export async function doCredentialLogin(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (!response || response.error) {
      return { error: "Invalid credentials. Please try again." };
    }

    return response;
  } catch (error) {
     return { error: "Invalid credentials. Please try again." };
  }
}
