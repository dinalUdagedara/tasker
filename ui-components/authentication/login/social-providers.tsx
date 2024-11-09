import { doSocialLogin } from "@/app/actions";

const SocialProviders = () => {
  return (
    <div className="flex w-full justify-center items-center h-full ">
      <form action={doSocialLogin}>
        <button
          className="bg-green-700 text-white px-3 py-1 rounded-md m-1 text-lg"
          type="submit"
          name="action"
          value="google"
        >
          Sign In With Google
        </button>

        {/* <button
          className="bg-black text-white p-1 rounded-md m-1 text-lg"
          type="submit"
          name="action"
          value="github"
        >
          Sign In With GitHub
        </button> */}
      </form>
    </div>
  );
};

export default SocialProviders;
