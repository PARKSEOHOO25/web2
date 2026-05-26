export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "첫 번째 게시글 제목",
    content: "이곳은 첫 번째 게시글의 내용 미리보기입니다. 게시글의 핵심 내용을 간단히 확인할 수 있습니다.",
    author: "박서후",
    date: "2026-05-26",
  },
  {
    id: 2,
    title: "두 번째 게시글 제목",
    content: "이곳은 두 번째 게시글의 내용 미리보기입니다. 주요 아이디어와 요약을 포함합니다.",
    author: "이영희",
    date: "2026-05-24",
  },
  {
    id: 3,
    title: "세 번째 게시글 제목",
    content: "이곳은 세 번째 게시글의 내용 미리보기입니다. 독자가 다음 내용을 궁금하게 만드는 글입니다.",
    author: "박철수",
    date: "2026-05-22",
  },
];
