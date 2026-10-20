"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegCalendar, FaInbox, FaFlask, FaBook } from "react-icons/fa6";

// "Courses" points at /dashboard because a course is only reached from a
// dashboard card; it highlights once the URL is inside /courses/...
const LINKS = [
  { href: "/dashboard", id: "wd-dashboard-link", label: "Dashboard", icon: AiOutlineDashboard, match: "/dashboard" },
  { href: "/dashboard", id: "wd-courses-link", label: "Courses", icon: FaBook, match: "/courses" },
  { href: "/calendar", id: "wd-calendar-link", label: "Calendar", icon: FaRegCalendar, match: "/calendar" },
  { href: "/inbox", id: "wd-inbox-link", label: "Inbox", icon: FaInbox, match: "/inbox" },
  { href: "/labs", id: "wd-labs-link", label: "Labs", icon: FaFlask, match: "/labs" },
  { href: "/history", id: "wd-history-link", label: "History", icon: FaRegCalendar, match: "/history" },
];

export default function KambazNavigation() {
  const pathname = usePathname();
  const accountActive = pathname.startsWith("/account");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <Link
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/NEU.png" alt="Northeastern" className="mx-auto h-10 w-10" />
      </Link>
      <Link
        href="/account"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline ${
          accountActive ? "bg-white text-red-600" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${accountActive ? "text-red-600" : "text-white"}`}
        />
        <br />
        Account
      </Link>
      {LINKS.map(({ href, id, label, icon: Icon, match }) => {
        const active = pathname.startsWith(match);
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
