import MobileApp from "@/ui-components/mobile-app/mobile-app";
import { auth } from "@/auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) redirect("/sign-in");
  return (
    <div className="flex justify-center h-full min-h-screen  ">
      <MobileApp />
    </div>
  );
}
