import Link from "next/link";
import { posts } from "@/lib/posts";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">게시글 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <article className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer h-full">
              <h2 className="text-xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500 mb-2">작성자: {post.author}</p>
              <p className="text-sm text-gray-400">{post.date}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
