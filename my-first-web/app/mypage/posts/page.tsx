import Link from "next/link";
import { posts } from "@/lib/posts";

export default function MyPostsPage() {
  const myPosts = posts; // TODO: 실제로는 로그인한 사용자의 글만 필터링

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/mypage" className="text-blue-600 hover:underline mb-6 inline-block">
        ← 마이페이지로 돌아가기
      </Link>

      <h1 className="text-3xl font-bold mb-8">내 글 관리</h1>

      {myPosts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-4 text-left">제목</th>
                <th className="border border-gray-300 p-4 text-left">작성자</th>
                <th className="border border-gray-300 p-4 text-left">작성일</th>
                <th className="border border-gray-300 p-4 text-center">관리</th>
              </tr>
            </thead>
            <tbody>
              {myPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 p-4">
                    <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                      {post.title}
                    </Link>
                  </td>
                  <td className="border border-gray-300 p-4">{post.author}</td>
                  <td className="border border-gray-300 p-4">{post.date}</td>
                  <td className="border border-gray-300 p-4">
                    <div className="flex gap-2 justify-center">
                      <Link
                        href={`/posts/${post.id}/edit`}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                      >
                        수정
                      </Link>
                      <button
                        onClick={() => {
                          if (confirm("정말 삭제하시겠습니까?")) {
                            alert("삭제 완료");
                          }
                        }}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 py-12">작성한 글이 없습니다.</p>
      )}

      <div className="mt-8">
        <Link href="/posts/new" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition inline-block">
          새 글 작성
        </Link>
      </div>
    </div>
  );
}
