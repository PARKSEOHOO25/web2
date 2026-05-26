export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">블로그 소개 페이지</h1>
          <nav className="mt-3 flex gap-4 text-sm text-gray-700">
            <a href="#home" className="hover:underline">
              홈
            </a>
            <a href="#posts" className="hover:underline">
              게시글
            </a>
            <a href="#about" className="hover:underline">
              소개
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="posts" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg">
            <h2 className="text-lg font-bold">첫 번째 게시글 제목</h2>
            <p className="mt-3 text-gray-600">
              이곳은 첫 번째 게시글의 내용 미리보기입니다. 게시글의 핵심 내용을 간단히 확인할 수 있습니다.
            </p>
            <p className="mt-4 text-gray-600">작성자: 박서후</p>
            <p className="text-sm text-gray-400">날짜: 2026-05-26</p>
          </article>

          <article className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg">
            <h2 className="text-lg font-bold">두 번째 게시글 제목</h2>
            <p className="mt-3 text-gray-600">
              이곳은 두 번째 게시글의 내용 미리보기입니다. 주요 아이디어와 요약을 포함합니다.
            </p>
            <p className="mt-4 text-gray-600">작성자: 이영희</p>
            <p className="text-sm text-gray-400">날짜: 2026-05-24</p>
          </article>

          <article className="rounded-lg bg-white p-6 shadow transition hover:shadow-lg">
            <h2 className="text-lg font-bold">세 번째 게시글 제목</h2>
            <p className="mt-3 text-gray-600">
              이곳은 세 번째 게시글의 내용 미리보기입니다. 독자가 다음 내용을 궁금하게 만드는 글입니다.
            </p>
            <p className="mt-4 text-gray-600">작성자: 박철수</p>
            <p className="text-sm text-gray-400">날짜: 2026-05-22</p>
          </article>
        </section>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-400">
        <p>© 2026 블로그 소개 페이지</p>
      </footer>
    </div>
  );
}
