"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  name: string;
  owner: string;
  status: string;
};

const STORAGE_KEY = "dummy-app-projects";

const defaultProjects: Project[] = [
  {
    id: "project-1",
    name: "Website Redesign",
    owner: "Ava Martinez",
    status: "In Progress",
  },
  {
    id: "project-2",
    name: "Mobile App Launch",
    owner: "Noah Johnson",
    status: "Planned",
  },
  {
    id: "project-3",
    name: "Analytics Migration",
    owner: "Sophia Lee",
    status: "Completed",
  },
];

function isValidProject(value: unknown): value is Project {
  if (!value || typeof value !== "object") {
    return false;
  }

  const project = value as Record<string, unknown>;

  return (
    typeof project.id === "string" &&
    typeof project.name === "string" &&
    typeof project.owner === "string" &&
    typeof project.status === "string"
  );
}

function getStoredProjects(): Project[] {
  if (typeof window === "undefined") {
    return defaultProjects;
  }

  try {
    const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

    if (!rawValue) {
      return defaultProjects;
    }

    const parsedValue = JSON.parse(rawValue);

    if (!Array.isArray(parsedValue) || !parsedValue.every(isValidProject)) {
      return defaultProjects;
    }

    return parsedValue;
  } catch {
    return defaultProjects;
  }
}

export default function ProjectsPage() {
  const initialProjects = useMemo(() => defaultProjects, []);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("Planned");
  const [error, setError] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setProjects(getStoredProjects());
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (!hasLoaded || typeof window === "undefined") {
      return;
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [hasLoaded, projects]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedOwner = owner.trim();
    const trimmedStatus = status.trim();

    if (!trimmedName || !trimmedOwner || !trimmedStatus) {
      setError("Please fill in all required fields before adding a project.");
      return;
    }

    const newProject: Project = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: trimmedName,
      owner: trimmedOwner,
      status: trimmedStatus,
    };

    setProjects((currentProjects) => [newProject, ...currentProjects]);
    setName("");
    setOwner("");
    setStatus("Planned");
    setError("");
  }

  function handleRemoveProject(projectId: string) {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== projectId)
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-600">
          Track mocked projects, add new ones, and remove items as needed.
          Changes are saved for this browser session.
        </p>
      </div>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">Add a project</h2>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label
                htmlFor="project-name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Project name
              </label>
              <input
                id="project-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="project-owner"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Owner
              </label>
              <input
                id="project-owner"
                type="text"
                value={owner}
                onChange={(event) => setOwner(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="project-status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                id="project-status"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="Planned">Planned</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
              </select>
            </div>
          </div>

          {error ? (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          ) : null}

          <div>
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add project
            </button>
          </div>
        </form>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Project list</h2>
          <p className="text-sm text-gray-500">{projects.length} total</p>
        </div>

        {projects.length === 0 ? (
          <div className="mt-6 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-4 py-8 text-center text-sm text-gray-600">
            There are no projects yet.
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Project
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Owner
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{project.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{project.owner}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{project.status}</td>
                    <td className="px-4 py-3 text-right">
                      <button
                        type="button"
                        onClick={() => handleRemoveProject(project.id)}
                        aria-label={`Remove project ${project.name}`}
                        className="inline-flex items-center rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-200"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
