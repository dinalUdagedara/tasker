import MobileApp from "@/ui-components/mobile-app/mobile-app";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const MobileAppPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");
  return (
    <>
      <SessionProvider>
        <MobileApp />
      </SessionProvider>
    </>
  );
};

export default MobileAppPage;
