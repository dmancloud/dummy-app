"use client";

import { FormEvent, useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  role: string;
};

const defaultUsers: User[] = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { name: "Carol White", email: "carol@example.com", role: "Viewer" },
  { name: "Dan Brown", email: "dan@example.com", role: "Editor" },
];

const storageKey = "users-page-users";

export default function Users() {
  const [users, setUsers] = useState<User[]>(defaultUsers);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const savedUsers = sessionStorage.getItem(storageKey);

    if (!savedUsers) {
      setHasLoaded(true);
      return;
    }

    try {
      const parsedUsers = JSON.parse(savedUsers) as User[];

      if (Array.isArray(parsedUsers)) {
        setUsers(
          parsedUsers.filter(
            (user): user is User =>
              typeof user?.name === "string" &&
              typeof user?.email === "string" &&
              typeof user?.role === "string"
          )
        );
      }
    } catch {
      setUsers(defaultUsers);
    } finally {
      setHasLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!hasLoaded) {
      return;
    }

    sessionStorage.setItem(storageKey, JSON.stringify(users));
  }, [hasLoaded, users]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedRole = role.trim();

    if (!trimmedName || !trimmedEmail || !trimmedRole) {
      setError("Name, email, and role are required.");
      return;
    }

    const duplicateUser = users.some(
      (user) => user.email.toLowerCase() === trimmedEmail.toLowerCase()
    );

    if (duplicateUser) {
      setError("A user with that email already exists.");
      return;
    }

    setUsers((currentUsers) => [
      ...currentUsers,
      {
        name: trimmedName,
        email: trimmedEmail,
        role: trimmedRole,
      },
    ]);
    setName("");
    setEmail("");
    setRole("");
    setError("");
  };

  const handleRemove = (emailToRemove: string) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.email !== emailToRemove)
    );
    setError("");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <p className="text-gray-600 mb-6">Manage your team members.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <input
                id="role"
                type="text"
                value={role}
                onChange={(event) => setRole(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Add user"
            >
              Add User
            </button>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
          </div>
        </form>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 font-medium text-gray-500">Role</th>
              <th className="px-6 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td className="px-6 py-8 text-center text-gray-500" colSpan={4}>
                  No users found. Add a user to get started.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.email} className="border-b border-gray-100">
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4 text-gray-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      onClick={() => handleRemove(user.email)}
                      className="inline-flex items-center rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      aria-label={`Remove ${user.name}`}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
