import Header from "@/ui-components/header/header";
import SideBar from "@/ui-components/sidebar/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <Header />
      </header>
      <div className="flex min-h-screen h-full">
        <SideBar />
        <main className="w-full h-full">{children}</main>
      </div>
    </section>
  );
}
