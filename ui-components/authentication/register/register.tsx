"use client";
import Link from "next/link";
import SocialProviders from "../login/social-providers";
const Register = () => {
  return (
    <div>
      <form
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
        // onSubmit={handleFormSubmit}
      >
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="name"
            name="name"
            id="name"
          />
        </div>

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
          Register
        </button>
        <div>
        Already have an Account? {" "}
          <Link className="underline" href={"/sign-in"}>
           Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
