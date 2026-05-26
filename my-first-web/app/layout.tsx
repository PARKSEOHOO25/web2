import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "내 블로그",
  description: "개인 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-4xl mx-auto">
            <span>내 블로그</span>
          </div>
        </nav>
        <main className="flex-1 max-w-4xl mx-auto p-6">{children}</main>
        <footer className="text-center text-gray-500 py-6">
          <p>© 2026 내 블로그</p>
        </footer>
      </body>
    </html>
  );
}
