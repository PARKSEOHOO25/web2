import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-gray-200">
          박서후 블로그
        </Link>
        <div className="flex gap-6">
          <Link
            href="/"
            className="hover:text-gray-200 transition-colors"
          >
            홈
          </Link>
          <Link
            href="/posts"
            className="hover:text-gray-200 transition-colors"
          >
            포스트
          </Link>
        </div>
      </div>
    </nav>
  );
}
