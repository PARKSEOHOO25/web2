"use client";

import { FormEvent, useMemo, useState } from "react";
import { Post } from "@/lib/posts";
import SearchBar from "./SearchBar";

type FormState = {
  title: string;
  content: string;
  author: string;
};

type Props = {
  initialPosts: Post[];
};

export default function PostsClient({ initialPosts }: Props) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [searchText, setSearchText] = useState("");
  const [form, setForm] = useState<FormState>({ title: "", content: "", author: "" });
  const [error, setError] = useState("");

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase().trim())
      ),
    [posts, searchText]
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("제목을 입력해주세요.");
      return;
    }

    setPosts((prevPosts) => {
      const nextId = prevPosts.length > 0 ? Math.max(...prevPosts.map((post) => post.id)) + 1 : 1;
      const newPost: Post = {
        id: nextId,
        title: form.title.trim(),
        content: form.content.trim(),
        author: form.author.trim() || "익명",
        date: new Date().toISOString().slice(0, 10),
      };

      return [newPost, ...prevPosts];
    });

    setForm({ title: "", content: "", author: "" });
  }

  function handleDelete(id: number) {
    if (confirm("정말 삭제하시겠습니까?")) {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    }
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-[1fr_320px]">
        <div>
          <h1 className="text-3xl font-bold mb-2">블로그 게시글</h1>
          <p className="text-slate-600">검색, 작성, 삭제가 가능한 클라이언트 UI입니다.</p>
        </div>
        <SearchBar value={searchText} onChange={setSearchText} />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="p-6 border rounded-lg bg-slate-50 text-slate-500">
              검색 결과가 없습니다.
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article key={post.id} className="p-4 border rounded-lg shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{post.title}</h2>
                    <p className="text-sm text-slate-500">
                      {post.author} · {post.date}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-red-600 hover:underline"
                    onClick={() => handleDelete(post.id)}
                  >
                    삭제
                  </button>
                </div>
                <p className="mt-3 text-slate-700">{post.content}</p>
              </article>
            ))
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-lg bg-white shadow-sm">
          <h2 className="text-2xl font-bold">새 게시글 작성</h2>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <label className="block">
            <span className="text-sm font-medium text-slate-700">제목</span>
            <input
              type="text"
              value={form.title}
              onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-slate-900 focus:border-slate-900 focus:outline-none"
              placeholder="게시글 제목을 입력하세요"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">본문</span>
            <textarea
              value={form.content}
              onChange={(event) => setForm((prev) => ({ ...prev, content: event.target.value }))}
              className="mt-1 h-28 w-full rounded-lg border px-3 py-2 text-slate-900 focus:border-slate-900 focus:outline-none"
              placeholder="게시글 내용을 입력하세요"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">작성자</span>
            <input
              type="text"
              value={form.author}
              onChange={(event) => setForm((prev) => ({ ...prev, author: event.target.value }))}
              className="mt-1 w-full rounded-lg border px-3 py-2 text-slate-900 focus:border-slate-900 focus:outline-none"
              placeholder="작성자 이름"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
          >
            게시글 추가
          </button>
        </form>
      </section>
    </div>
  );
}
