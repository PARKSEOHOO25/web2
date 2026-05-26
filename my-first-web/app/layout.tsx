import type { Metadata } from "next";
import Link from "next/link";
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
          <div className="max-w-4xl mx-auto flex gap-8">
            <Link href="/" className="hover:text-gray-300 transition">
              홈
            </Link>
            <Link href="/posts" className="hover:text-gray-300 transition">
              블로그
            </Link>
            <Link href="/posts/new" className="hover:text-gray-300 transition">
              새 글 쓰기
            </Link>
          </div>
        </nav>
        <main className="flex-1 max-w-4xl mx-auto p-6 w-full">{children}</main>
        <footer className="text-center text-gray-500 py-6">
          <p>© 2026 내 블로그</p>
        </footer>
      </body>
    </html>
  );
}
