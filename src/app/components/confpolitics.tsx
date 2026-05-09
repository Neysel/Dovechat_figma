import type { ReactNode } from "react";
import { Link } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import policyBody from "../data/confpolitics-body.txt?raw";

function lineWithLinks(text: string): ReactNode {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a
        key={i}
        href={part}
        className="text-[#4A7FFF] underline break-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function renderPolicy(text: string): ReactNode[] {
  const raw = text.replace(/\r\n/g, "\n").trim();
  const lines = raw.split("\n").map((l) => l.trimEnd()).filter((l) => l.length > 0);
  const blocks: ReactNode[] = [];
  let listBuf: string[] = [];
  let k = 0;

  const flushList = () => {
    if (listBuf.length === 0) return;
    blocks.push(
      <ul
        key={`ul-${k++}`}
        className="list-disc pl-5 sm:pl-7 space-y-2 text-gray-700 my-4 text-[15px] leading-relaxed"
      >
        {listBuf.map((item, i) => (
          <li key={i}>{lineWithLinks(item)}</li>
        ))}
      </ul>
    );
    listBuf = [];
  };

  const firstLine = lines[0]?.trim() ?? "";
  const secondLine = lines[1]?.trim() ?? "";

  for (const line of lines) {
    const t = line.trim();
    if (t === firstLine) {
      flushList();
      blocks.push(
        <h1
          key={k++}
          className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight"
        >
          {t}
        </h1>
      );
      continue;
    }
    if (t === secondLine) {
      flushList();
      blocks.push(
        <p key={k++} className="text-gray-600 text-base mt-2">
          {lineWithLinks(t)}
        </p>
      );
      continue;
    }

    const isMainHeading = /^(?:10|11|[1-9])\.\s+[А-ЯЁA-Z«"']/.test(t);
    const isTriple = /^\d+\.\d+\.\d+\.\s/.test(t);
    const isDouble = /^\d+\.\d+\.\s/.test(t) && !isTriple;

    if (isTriple) {
      listBuf.push(t);
      continue;
    }
    flushList();

    if (isMainHeading) {
      blocks.push(
        <h2
          key={k++}
          className="text-xl sm:text-2xl font-semibold text-gray-900 mt-10 mb-3 scroll-mt-28"
        >
          {lineWithLinks(t)}
        </h2>
      );
      continue;
    }

    if (isDouble) {
      blocks.push(
        <h3
          key={k++}
          className="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-2"
        >
          {lineWithLinks(t)}
        </h3>
      );
      continue;
    }

    blocks.push(
      <p key={k++} className="text-[15px] leading-relaxed text-gray-700 my-2">
        {lineWithLinks(t)}
      </p>
    );
  }

  flushList();
  return blocks;
}

export default function ConfPolitics() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            to="/"
            className="inline-flex text-sm font-medium text-[#4A7FFF] hover:underline mb-8"
          >
            ← На главную
          </Link>
          <article className="pb-8">{renderPolicy(policyBody)}</article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
