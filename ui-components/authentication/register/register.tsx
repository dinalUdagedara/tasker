"use client";
import { useState } from "react";
import Link from "next/link";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { redirect, useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  // State to store the form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Convex mutation to register the user
  const registerUser = useMutation(api.users.registerUser);

  // Handle form submission
  const handleRegisterUser = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    // Basic validation (you can add more)
    if (!name || !email || !password) {
      alert("Please fill out all fields");
      return;
    }

    try {
      // Call the mutation to register the user
      const response = await registerUser({ email, name, password });

      // Check for an error in the response
      if (response.error) {
        alert(response.error);
      } else {
        alert(response.success);
        router.push("/sign-in");
      }
      // alert("Registration successful");
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed, please try again.");
    }
  };

  return (
    <div>
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        onSubmit={handleRegisterUser}
      >
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on input change
          />
        </div>

        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
          />
        </div>

        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
        </div>

        <button
          type="submit"
          className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
        >
          Register
        </button>
        <div>
          Already have an Account?{" "}
          <Link className="underline" href={"/sign-in"}>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
