import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="mx-auto max-w-xs">
      <h3 className="mb-3 text-xl font-semibold">Sign in</h3>
      <input
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-3 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        defaultValue="123"
      />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-sm font-medium text-white"
      >
        Sign in
      </Link>
      <Link
        href="/account/signup"
        id="wd-signup-link"
        className="block text-center text-sm text-red-600"
      >
        Sign up
      </Link>
    </div>
  );
}
