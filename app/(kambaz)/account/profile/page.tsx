"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();
  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProfile(currentUser);
  }, [currentUser, router]);
  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };
  if (!profile) return null;
  return (
    <div id="wd-profile-screen" className="mx-auto max-w-xs">
      <h3 className="mb-3 text-xl font-semibold">Profile</h3>
      <input
        id="wd-username"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={profile.password}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        id="wd-firstname"
        placeholder="First Name"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={profile.firstName}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        id="wd-lastname"
        placeholder="Last Name"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={profile.lastName}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        id="wd-email"
        type="email"
        placeholder="Email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        id="wd-role"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
        value={profile.role}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="block w-full cursor-pointer text-center text-sm text-red-600"
      >
        Sign out
      </button>
    </div>
  );
}
