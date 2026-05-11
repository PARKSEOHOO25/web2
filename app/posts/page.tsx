import PostsClient from "./PostsClient";
import { Post } from "@/lib/posts";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("게시글을 불러오지 못했습니다.");
  }

  const data = await res.json();

  return data.map((item: { id: number; title: string; body: string; userId: number }): Post => ({
    id: item.id,
    title: item.title,
    content: item.body,
    author: `User ${item.userId}`,
    date: new Date().toISOString().slice(0, 10),
  }));
}

export default async function PostsPage() {
  const initialPosts = await fetchPosts();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <PostsClient initialPosts={initialPosts} />
    </div>
  );
}
