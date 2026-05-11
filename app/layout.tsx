import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "박서후 블로그",
  description: "내 블로그 메인 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={cn("font-sans", geist.variable)}>
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <nav className="bg-gray-800 text-white px-6 py-4">
          박서후 블로그
        </nav>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="text-center text-gray-500 py-6">
          © 2026 박서후 블로그
        </footer>
      </body>
    </html>
  );
}
