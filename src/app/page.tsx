'use client';

import { useState } from 'react';
import {
  Satellite,
  Radio,
  AlertTriangle,
  CheckCircle,
  Activity,
  MapPin,
  Calendar,
  Clock,
  Info,
  Zap,
  TrendingUp,
} from 'lucide-react';
import MissionFilters from '@/components/MissionFilters';

const stats = [
  { label: 'Active Missions', value: '14', icon: Satellite, change: '+2 this month', up: true },
  { label: 'Ground Stations', value: '4', icon: Radio, change: 'All online', up: true },
  { label: 'Active Alerts', value: '3', icon: AlertTriangle, change: '-1 from yesterday', up: false },
  { label: 'Mission Success Rate', value: '98.9%', icon: TrendingUp, change: '+0.8% this quarter', up: true },
];

const missions = [
  { id: 'ART-VII', name: 'Artemis VII', type: 'Lunar Orbit', status: 'Active', health: 98, crew: 4, launchDate: '2024-03-12' },
  { id: 'PEG-9', name: 'PEGASUS-9', type: 'Earth Observation', status: 'Warning', health: 72, crew: 0, launchDate: '2023-11-05' },
  { id: 'HRZ-2', name: 'Horizon-2', type: 'Deep Space', status: 'Active', health: 95, crew: 0, launchDate: '2022-07-19' },
  { id: 'SOL-4', name: 'Solaris-4', type: 'Solar Research', status: 'Active', health: 91, crew: 0, launchDate: '2023-04-30' },
  { id: 'AQU-1', name: 'Aquila-1', type: 'Communications', status: 'Critical', health: 45, crew: 0, launchDate: '2021-09-14' },
  { id: 'CER-3', name: 'Ceres-3', type: 'Asteroid Survey', status: 'Active', health: 99, crew: 3, launchDate: '2024-01-22' },
];

const telemetry = [
  { mission: 'Artemis VII', metric: 'Velocity', value: '7.84 km/s', trend: 'stable' },
  { mission: 'Artemis VII', metric: 'Altitude', value: '408 km', trend: 'up' },
  { mission: 'PEGASUS-9', metric: 'Temp (thermal)', value: '87°C', trend: 'up' },
  { mission: 'Horizon-2', metric: 'Signal Strength', value: '-112 dBm', trend: 'down' },
  { mission: 'Solaris-4', metric: 'Power Output', value: '2.4 kW', trend: 'stable' },
  { mission: 'Aquila-1', metric: 'Battery Level', value: '23%', trend: 'down' },
];

const recentEvents = [
  {
    id: 1,
    timestamp: '2024-06-15 14:32:07 UTC',
    mission: 'Artemis VII',
    description: 'Course correction burn completed successfully. Trajectory nominal.',
    severity: 'info',
  },
  {
    id: 2,
    timestamp: '2024-06-15 13:58:44 UTC',
    mission: 'PEGASUS-9',
    description: 'Anomaly detected on thermal sensor array — elevated readings on panel B-4.',
    severity: 'warning',
  },
  {
    id: 3,
    timestamp: '2024-06-15 13:21:15 UTC',
    mission: 'Aquila-1',
    description: 'Battery degradation rate exceeded critical threshold. Entering safe mode.',
    severity: 'critical',
  },
  {
    id: 4,
    timestamp: '2024-06-15 12:47:30 UTC',
    mission: 'Ceres-3',
    description: 'High-resolution imaging sequence of target asteroid 2024-BX1 completed.',
    severity: 'info',
  },
  {
    id: 5,
    timestamp: '2024-06-15 11:55:02 UTC',
    mission: 'Solaris-4',
    description: 'Solar wind particle flux spike detected — instruments recalibrating.',
    severity: 'warning',
  },
  {
    id: 6,
    timestamp: '2024-06-15 10:30:19 UTC',
    mission: 'Horizon-2',
    description: 'Deep space network handoff from Goldstone to Canberra completed.',
    severity: 'info',
  },
];

const groundStations = [
  {
    id: 1,
    name: 'Goldstone',
    location: 'California, USA',
    contact: 'Artemis VII',
    signalQuality: 94,
    online: true,
  },
  {
    id: 2,
    name: 'Madrid',
    location: 'Madrid, Spain',
    contact: 'Solaris-4',
    signalQuality: 81,
    online: true,
  },
  {
    id: 3,
    name: 'Canberra',
    location: 'Canberra, Australia',
    contact: 'Horizon-2',
    signalQuality: 67,
    online: true,
  },
  {
    id: 4,
    name: 'Usuda',
    location: 'Nagano, Japan',
    contact: '—',
    signalQuality: 0,
    online: false,
  },
];

const upcomingSchedule = [
  {
    id: 1,
    scheduledTime: '2024-06-15 16:00 UTC',
    mission: 'Artemis VII',
    eventType: 'EVA Spacewalk',
    duration: '6h 30m',
  },
  {
    id: 2,
    scheduledTime: '2024-06-15 18:45 UTC',
    mission: 'PEGASUS-9',
    eventType: 'Thermal Diagnostic',
    duration: '45m',
  },
  {
    id: 3,
    scheduledTime: '2024-06-15 21:00 UTC',
    mission: 'Ceres-3',
    eventType: 'Orbital Insertion Burn',
    duration: '12m',
  },
  {
    id: 4,
    scheduledTime: '2024-06-16 03:30 UTC',
    mission: 'Horizon-2',
    eventType: 'DSN Contact Window',
    duration: '4h 15m',
  },
  {
    id: 5,
    scheduledTime: '2024-06-16 08:00 UTC',
    mission: 'Solaris-4',
    eventType: 'Instrument Calibration',
    duration: '2h 00m',
  },
];

function severityConfig(severity: string) {
  switch (severity) {
    case 'critical':
      return { color: 'text-red-600', bg: 'bg-red-100', Icon: AlertTriangle };
    case 'warning':
      return { color: 'text-yellow-600', bg: 'bg-yellow-100', Icon: AlertTriangle };
    default:
      return { color: 'text-blue-600', bg: 'bg-blue-100', Icon: Info };
  }
}

function statusColor(status: string) {
  switch (status) {
    case 'Active':
      return 'text-green-700 bg-green-100';
    case 'Warning':
      return 'text-yellow-700 bg-yellow-100';
    case 'Critical':
      return 'text-red-700 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

function healthColor(health: number) {
  if (health >= 90) return 'bg-green-500';
  if (health >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
}

function signalColor(quality: number) {
  if (quality >= 80) return 'bg-green-500';
  if (quality >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
}

export default function DashboardPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('All');

  const filteredMissions = missions.filter((mission) => {
    const matchesSearch = mission.name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status === 'All' || mission.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hello World</h1>
        <p className="text-gray-500 text-sm mt-1">365 Days Till Launch!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white border border-gray-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-500 text-sm">{stat.label}</span>
                <Icon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className={`text-xs mt-1 ${stat.up ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-gray-900 font-semibold">Active Missions</h2>
          </div>
          <MissionFilters
            searchValue={search}
            selectedStatus={status}
            onSearchChange={setSearch}
            onStatusChange={setStatus}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-medium">ID</th>
                  <th className="text-left px-4 py-3 font-medium">Name</th>
                  <th className="text-left px-4 py-3 font-medium">Type</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-left px-4 py-3 font-medium">Health</th>
                  <th className="text-left px-4 py-3 font-medium">Crew</th>
                </tr>
              </thead>
              <tbody>
                {filteredMissions.map((mission) => (
                  <tr key={mission.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 text-gray-500 font-mono text-xs">{mission.id}</td>
                    <td className="px-4 py-3 text-gray-900 font-medium">{mission.name}</td>
                    <td className="px-4 py-3 text-gray-500">{mission.type}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor(mission.status)}`}>
                        {mission.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${healthColor(mission.health)}`}
                            style={{ width: `${mission.health}%` }}
                          />
                        </div>
                        <span className="text-gray-500 text-xs">{mission.health}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {mission.crew > 0 ? mission.crew : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
                {filteredMissions.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                      No missions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-gray-900 font-semibold flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Live Telemetry
            </h2>
          </div>
          <div className="p-4 space-y-3">
            {telemetry.map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-500 text-xs">{item.mission}</span>
                  <span
                    className={`text-xs ${
                      item.trend === 'up'
                        ? 'text-yellow-600'
                        : item.trend === 'down'
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : '●'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 text-sm font-medium">{item.metric}</span>
                  <span className="text-gray-900 font-mono text-sm">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-xl">
          <div className="p-4 border-b border-gray-200 flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-600" />
            <h2 className="text-gray-900 font-semibold">Recent Events</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {recentEvents.map((event) => {
              const { color, bg, Icon } = severityConfig(event.severity);
              return (
                <div key={event.id} className="flex gap-4 px-4 py-3 hover:bg-gray-50 transition-colors">
                  <div className="mt-0.5 flex-shrink-0">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${bg}`}>
                      <Icon className={`w-4 h-4 ${color}`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-gray-900 text-sm font-medium">{event.mission}</span>
                      <span
                        className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                          event.severity === 'critical'
                            ? 'text-red-700 bg-red-100'
                            : event.severity === 'warning'
                            ? 'text-yellow-700 bg-yellow-100'
                            : 'text-blue-700 bg-blue-100'
                        }`}
                      >
                        {event.severity}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-snug">{event.description}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-gray-400 text-xs">{event.timestamp}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl">
          <div className="p-4 border-b border-gray-200 flex items-center gap-2">
            <Radio className="w-4 h-4 text-green-600" />
            <h2 className="text-gray-900 font-semibold">Ground Stations</h2>
          </div>
          <div className="p-4 space-y-3">
            {groundStations.map((station) => (
              <div key={station.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-900 font-medium text-sm">{station.name}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      station.online
                        ? 'text-green-700 bg-green-100'
                        : 'text-gray-400 bg-gray-100'
                    }`}
                  >
                    {station.online ? 'Online' : 'Offline'}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  <span className="text-gray-500 text-xs">{station.location}</span>
                </div>
                <div className="mb-2">
                  <span className="text-gray-500 text-xs">Contact: </span>
                  <span className="text-gray-700 text-xs">{station.contact}</span>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-500 text-xs">Signal Quality</span>
                    <span className="text-gray-500 text-xs">{station.online ? `${station.signalQuality}%` : '—'}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all ${
                        station.online ? signalColor(station.signalQuality) : 'bg-gray-300'
                      }`}
                      style={{ width: station.online ? `${station.signalQuality}%` : '0%' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl">
        <div className="p-4 border-b border-gray-200 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-purple-600" />
          <h2 className="text-gray-900 font-semibold">Upcoming Schedule</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-medium">Scheduled Time</th>
                <th className="text-left px-4 py-3 font-medium">Mission</th>
                <th className="text-left px-4 py-3 font-medium">Event Type</th>
                <th className="text-left px-4 py-3 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {upcomingSchedule.map((row) => (
                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      <span className="text-gray-600 font-mono text-xs">{row.scheduledTime}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-900 font-medium">{row.mission}</td>
                  <td className="px-4 py-3 text-gray-500">{row.eventType}</td>
                  <td className="px-4 py-3">
                    <span className="text-purple-700 font-mono text-xs bg-purple-100 px-2 py-0.5 rounded-full">
                      {row.duration}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
