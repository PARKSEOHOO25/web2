export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">내 블로그</h1>
      <p className="text-lg text-gray-600">
        여기는 제 블로그입니다. 다양한 주제에 대한 글을 공유합니다.
      </p>
    </>
  );
}
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
