import Chat from "@/ui-components/messages/user-list";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const MobileAppContent = async () => {
  const session = await auth();

  if (!session?.user) redirect("/sign-in");
  return (
    <div className="container mx-auto p-4">
      <SessionProvider>
        <Chat />
      </SessionProvider>
    </div>
  );
};

export default MobileAppContent;
