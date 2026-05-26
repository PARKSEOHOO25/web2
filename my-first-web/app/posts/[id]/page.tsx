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
      <div className="flex gap-4 text-gray-500 mb-8 border-b pb-4">
        <span>작성자: {post.author}</span>
        <span>{post.date}</span>
      </div>
      <div className="prose prose-sm max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
      </div>
    </article>
  );
}
