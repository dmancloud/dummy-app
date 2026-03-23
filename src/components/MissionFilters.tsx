'use client';

import { Search } from 'lucide-react';

type MissionFiltersProps = {
  searchValue: string;
  selectedStatus: string;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
};

export default function MissionFilters({
  searchValue,
  selectedStatus,
  onSearchChange,
  onStatusChange,
}: MissionFiltersProps) {
  return (
    <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="relative w-full sm:max-w-xs">
        <label htmlFor="mission-search" className="sr-only">
          Search missions by name
        </label>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          id="mission-search"
          type="text"
          placeholder="Search missions…"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg pl-9 pr-3 py-1.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="w-full sm:w-auto">
        <label htmlFor="mission-status" className="sr-only">
          Filter missions by status
        </label>
        <select
          id="mission-status"
          value={selectedStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="w-full sm:w-auto bg-gray-100 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-900 focus:outline-none focus:border-blue-500"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Warning">Warning</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
    </div>
  );
}
