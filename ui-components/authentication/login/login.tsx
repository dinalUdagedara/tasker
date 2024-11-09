"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "@/app/actions";
import Link from "next/link";
import SocialProviders from "./social-providers";
const Login = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      console.log("Response:", response);
      if (response.error) {
        setError("Invalid credentials. Please try again.");
      } else {
        router.push("/chat");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
    }
  }

  return (
    <div>
      <div className="text-xl text-red-500">{error}</div>
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        onSubmit={handleFormSubmit}
      >
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
        >
          Login
        </button>

        <div>
          Dont have an Account? {""}
          <Link className="underline" href={"/register"}>
            Create One
          </Link>
        </div>
      </form>
      <div>
        <SocialProviders />
      </div>
    </div>
  );
};

export default Login;

