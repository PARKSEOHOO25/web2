export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">홍길동 블로그</h1>
        <nav>
          <ul className="flex gap-4 mt-2">
            <li><a href="/" className="text-blue-600 hover:underline">홈</a></li>
            <li><a href="/about" className="text-blue-600 hover:underline">소개</a></li>
            <li><a href="/contact" className="text-blue-600 hover:underline">연락</a></li>
          </ul>
        </nav>
      </header>
      <main className="space-y-4">
        <article className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-bold">첫 번째 게시글 제목</h2>
          <p className="text-gray-600 mt-2">게시글 내용 미리보기입니다. 이 부분은 게시글의 일부 내용을 보여줍니다.</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>작성자: 홍길동</span>
            <span className="text-gray-400">날짜: 2023-10-01</span>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-bold">두 번째 게시글 제목</h2>
          <p className="text-gray-600 mt-2">또 다른 게시글 내용 미리보기입니다. 흥미로운 내용을 담고 있습니다.</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>작성자: 홍길동</span>
            <span className="text-gray-400">날짜: 2023-10-02</span>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-bold">세 번째 게시글 제목</h2>
          <p className="text-gray-600 mt-2">마지막 게시글 내용 미리보기입니다. 더 많은 내용을 확인해보세요.</p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>작성자: 홍길동</span>
            <span className="text-gray-400">날짜: 2023-10-03</span>
          </div>
        </article>
      </main>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>&copy; 2023 홍길동 블로그. All rights reserved.</p>
      </footer>
    </div>
  );
}
