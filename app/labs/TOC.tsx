import Link from "next/link";

export default function TOC() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/labs">Labs</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <a
            href="https://kambaz.dev/book/ch1#sec-1-3"
            id="wd-toc-book-link"
          >
            Chapter 1
          </a>
        </li>
      </ul>
    </nav>
  );
}
