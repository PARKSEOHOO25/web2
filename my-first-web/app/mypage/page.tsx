import Link from "next/link";
import { posts } from "@/lib/posts";

export default function MyPage() {
  const myPosts = posts; // TODO: 실제로는 로그인한 사용자의 글만 필터링

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">마이페이지</h1>

      {/* 프로필 섹션 */}
      <div className="bg-white rounded-lg shadow p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">프로필</h2>

        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">이름</p>
            <p className="text-lg font-medium">박서후</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">이메일</p>
            <p className="text-lg font-medium">user@example.com</p>
          </div>

          <div>
            <p className="text-sm text-gray-600">가입일</p>
            <p className="text-lg font-medium">2026-05-27</p>
          </div>

          <div className="pt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              프로필 수정
            </button>
          </div>
        </div>
      </div>

      {/* 통계 섹션 */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-blue-600">{myPosts.length}</p>
          <p className="text-gray-600 mt-2">작성한 글</p>
        </div>
        <div className="bg-green-50 rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-gray-600 mt-2">받은 댓글</p>
        </div>
      </div>

      {/* 글 관리 섹션 */}
      <div className="bg-white rounded-lg shadow p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">내 글</h2>
          <Link href="/posts/new" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            새 글 작성
          </Link>
        </div>

        {myPosts.length > 0 ? (
          <div className="space-y-4">
            {myPosts.map((post) => (
              <div key={post.id} className="border border-gray-200 rounded p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{post.title}</h3>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/posts/${post.id}/edit`}
                    className="px-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition text-sm"
                  >
                    수정
                  </Link>
                  <Link
                    href={`/mypage/posts/${post.id}`}
                    className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                  >
                    보기
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 py-8">작성한 글이 없습니다.</p>
        )}

        <div className="mt-6">
          <Link href="/mypage/posts" className="text-blue-600 hover:underline font-medium">
            내 글 전체 관리 →
          </Link>
        </div>
      </div>
    </div>
  );
}
