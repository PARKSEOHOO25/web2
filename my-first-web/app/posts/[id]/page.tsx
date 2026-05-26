import Link from "next/link";
import { posts } from "@/lib/posts";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600 mb-6">게시글을 찾을 수 없습니다</p>
        <Link href="/posts" className="text-blue-600 hover:underline">
          목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto">
      <Link href="/posts" className="text-blue-600 hover:underline mb-6 inline-block">
        ← 목록으로 돌아가기
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex justify-between items-start gap-4 mb-8 border-b pb-4">
        <div className="flex gap-4 text-gray-500">
          <span>작성자: {post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/posts/${post.id}/edit`}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition text-sm"
          >
            수정
          </Link>
          <button
            onClick={() => {
              if (confirm("정말 삭제하시겠습니까?")) {
                alert("삭제 완료");
              }
            }}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
          >
            삭제
          </button>
        </div>
      </div>
      <div className="prose prose-sm max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
