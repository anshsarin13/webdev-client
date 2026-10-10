import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="mx-auto max-w-xs">
      <h3 className="mb-3 text-xl font-semibold">Profile</h3>
      <input
        defaultValue="anshsarin"
        placeholder="username"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <input
        defaultValue="Ansh"
        placeholder="First Name"
        id="wd-firstname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <input
        defaultValue="Sarin"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <input
        defaultValue="2004-01-01"
        type="date"
        id="wd-dob"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <input
        defaultValue="ansh@watersidegroup.com"
        type="email"
        id="wd-email"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      />
      <select
        defaultValue="STUDENT"
        id="wd-role"
        className="mb-3 w-full rounded border border-neutral-300 px-3 py-2 text-sm"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        href="/account/signin"
        className="block text-center text-sm text-red-600"
      >
        Sign out
      </Link>
    </div>
  );
}
