import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="mx-auto max-w-xs">
      <h3 className="mb-3 text-xl font-semibold">Sign up</h3>
      <input
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        defaultValue="123"
      />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-3 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <Link
        href="/account/profile"
        className="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-sm font-medium text-white"
      >
        Sign up
      </Link>
      <Link
        href="/account/signin"
        className="block text-center text-sm text-red-600"
      >
        Sign in
      </Link>
    </div>
  );
}
