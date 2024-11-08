import CredentialProvider from "./credential-login";
import SocialProviders from "./social-providers";

const LoginForm = () => {
  return (
    <div className="flex w-full h-full">
      <SocialProviders />
      <div className=" flex w-full justify-center items-center">
        <CredentialProvider />
      </div>
    </div>
  );
};

export default LoginForm;
