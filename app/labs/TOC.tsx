import Link from "next/link";

export default function TOC() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">
            Labs
          </Link>
        </li>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">
            Lab 1
          </Link>
        </li>
        <li>
          <a
            href="https://kambaz.dev/book/ch1#sec-1-3"
            id="wd-toc-book-link"
          >
            Chapter 1
          </a>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
      <p>Ansh Sarin doing lab 1 </p>
    </nav>
  );
}
