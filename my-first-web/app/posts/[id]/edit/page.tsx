"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // params를 await하기 위해 useEffect 사용
  const [isLoading, setIsLoading] = useState(true);

  useState(() => {
    (async () => {
      const { id } = await params;
      // TODO: 실제 데이터 로드
      setTitle("게시글 제목");
      setContent("게시글 내용");
      setIsLoading(false);
    })();
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("수정되었습니다");
    router.push("/posts");
  };

  if (isLoading) {
    return <div className="text-center py-12">로딩 중...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link href="/posts" className="text-blue-600 hover:underline mb-6 inline-block">
        ← 목록으로 돌아가기
      </Link>
      <h1 className="text-3xl font-bold mb-8">게시글 수정</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            제목
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="게시글 제목을 입력하세요"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={10}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="게시글 내용을 입력하세요"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            수정 완료
          </button>
          <Link
            href="/posts"
            className="flex-1 bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-400 transition text-center"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
