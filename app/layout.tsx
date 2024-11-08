import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "../ui-components/sidebar/sidebar";
import { ThemeProvider } from "@/ui-components/providers/theme-provider";
import Header from "../ui-components/header/header";
import { ConvexClientProvider } from "./ConvexClientProvider";

const geistSans = localFont({
  src: "../public/assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased justify-between`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header>
            <Header />
          </header>
          <div className="flex min-h-screen h-full">
            <SideBar />
            <main className="w-full h-full">
              {" "}
              <ConvexClientProvider>{children}</ConvexClientProvider>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
