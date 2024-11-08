import MobileApp from "@/ui-components/mobile-app/mobile-app";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const MobileAppPage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");
  return (
    <>
      <MobileApp />
    </>
  );
};

export default MobileAppPage;
