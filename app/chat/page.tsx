import Chat from "@/ui-components/messages/user-list";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const MobileAppContent = async () => {
  const session = await auth();

  if (!session?.user) redirect("/sign-in");
  return (
    <div className="container mx-auto p-4">
      <Chat />
    </div>
  );
};

export default MobileAppContent;
