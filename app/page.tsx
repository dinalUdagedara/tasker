import MobileApp from "@/ui-components/mobile-app/mobile-app";
import { auth } from "@/auth";

import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";

export default async function Home() {
  const session = await auth();

  if (!session?.user) redirect("/sign-in");
  return (
    <div className="flex justify-center h-full min-h-screen  ">
      <SessionProvider>
        <MobileApp />
      </SessionProvider>
    </div>
  );
}
