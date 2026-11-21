"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "", verify: "" });
  const [error, setError] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = async () => {
    if (!user.username || !user.password) {
      setError("Username and password are required");
      return;
    }
    if (user.password !== user.verify) {
      setError("Passwords do not match");
      return;
    }
    try {
      const currentUser = await client.signup({
        username: user.username,
        password: user.password,
      });
      setCurrentUser(currentUser);
      setError("");
      router.push("/account/profile");
    } catch (e) {
      setError(
        client.errorMessage(e, "Could not sign up. Is the server running?"),
      );
    }
  };
  return (
    <div id="wd-signup-screen" className="mx-auto max-w-xs">
      <h3 className="mb-3 text-xl font-semibold">Sign up</h3>
      <input
        placeholder="username"
        id="wd-signup-username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        placeholder="password"
        type="password"
        id="wd-signup-password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <input
        placeholder="verify password"
        type="password"
        id="wd-signup-verify"
        className="wd-password-verify mb-3 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={user.verify}
        onChange={(e) => setUser({ ...user, verify: e.target.value })}
      />
      {error && (
        <div id="wd-signup-error" className="mb-2 rounded bg-red-100 p-2 text-sm text-red-800">
          {error}
        </div>
      )}
      <button
        type="button"
        id="wd-signup-btn"
        onClick={signup}
        className="mb-2 block w-full cursor-pointer rounded bg-red-600 px-3 py-2 text-center text-sm font-medium text-white"
      >
        Sign up
      </button>
      <Link
        href="/account/signin"
        id="wd-signin-link"
        className="block text-center text-sm text-red-600"
      >
        Sign in
      </Link>
    </div>
  );
}
