import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swarnadeep Maity | Full Stack Developer Portfolio",
  description: "Portfolio website of Swarnadeep Maity, a Full Stack Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://swarnadeepmaity.com" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
