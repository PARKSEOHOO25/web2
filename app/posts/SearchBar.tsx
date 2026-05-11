"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <label className="block text-sm font-medium text-slate-700">게시글 검색</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="제목으로 검색하세요"
        className="mt-2 w-full rounded-lg border px-3 py-2 text-slate-900 focus:border-slate-900 focus:outline-none"
      />
    </div>
  );
}
