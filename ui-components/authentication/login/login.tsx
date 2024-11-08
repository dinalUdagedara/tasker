import { doSocialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <div className="flex w-full justify-center items-center h-full min-h-[600px]">
      <div></div>
      <form action={doSocialLogin}>
        {/* <form> */}
        <button
          className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
          type="submit"
          name="action"
          value="google"
        >
          Sign In With Google
        </button>

        <button
          className="bg-black text-white p-1 rounded-md m-1 text-lg"
          type="submit"
          name="action"
          value="github"
        >
          Sign In With GitHub
        </button>
      </form>
    </div>
  );
};

//Added Env to vercel
export default LoginForm;
