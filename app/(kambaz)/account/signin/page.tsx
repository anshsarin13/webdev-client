"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const [error, setError] = useState("");
  const router = useRouter();
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      setCurrentUser(user);
      setError("");
      router.push("/dashboard");
    } catch (e) {
      setError(
        client.errorMessage(e, "Could not sign in. Is the server running?"),
      );
    }
  };
  return (
    <div id="wd-signin-screen" className="mx-auto max-w-xs">
      <h3 className="mb-3 text-xl font-semibold">Sign in</h3>
      <input
        placeholder="username"
        id="wd-username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className="wd-password mb-3 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      {error && (
        <div id="wd-signin-error" className="mb-2 rounded bg-red-100 p-2 text-sm text-red-800">
          {error}
        </div>
      )}
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-2 block w-full cursor-pointer rounded bg-red-600 px-3 py-2 text-center text-sm font-medium text-white"
      >
        Sign in
      </button>
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
