'use client';

import { useState } from 'react';
import {
  Satellite,
  Radio,
  AlertTriangle,
  CheckCircle,
  Search,
  Activity,
  MapPin,
  Calendar,
  Clock,
  Info,
  XCircle,
  Wifi,
  WifiOff,
} from 'lucide-react';

const stats = [
  { label: 'Active Missions', value: '12', icon: Satellite, color: 'text-blue-400' },
  { label: 'Ground Stations', value: '4', icon: Radio, color: 'text-green-400' },
  { label: 'Alerts', value: '3', icon: AlertTriangle, color: 'text-yellow-400' },
  { label: 'Systems Nominal', value: '94%', icon: CheckCircle, color: 'text-emerald-400' },
];

const missions = [
  { id: 'ART-7', name: 'Artemis VII', status: 'Active', type: 'Lunar Orbit', altitude: '384,400 km', signal: 98 },
  { id: 'PEG-9', name: 'PEGASUS-9', status: 'Warning', type: 'Earth Observation', altitude: '512 km', signal: 74 },
  { id: 'HRZ-3', name: 'Horizon-3', status: 'Active', type: 'Deep Space Probe', altitude: '1.2 AU', signal: 61 },
  { id: 'STL-11', name: 'Stellar-11', status: 'Active', type: 'Solar Observatory', altitude: '0.99 AU', signal: 89 },
  { id: 'NVG-2', name: 'Navigator-2', status: 'Inactive', type: 'Navigation Satellite', altitude: '20,200 km', signal: 0 },
  { id: 'CRS-14', name: 'CRS-14', status: 'Active', type: 'Cargo Resupply', altitude: '408 km', signal: 95 },
];

const telemetry = [
  { label: 'CPU Load', value: 42, unit: '%', color: 'bg-blue-500' },
  { label: 'Memory Usage', value: 67, unit: '%', color: 'bg-purple-500' },
  { label: 'Power Output', value: 88, unit: '%', color: 'bg-green-500' },
  { label: 'Thermal', value: 55, unit: '%', color: 'bg-orange-500' },
  { label: 'Data Link', value: 91, unit: '%', color: 'bg-cyan-500' },
  { label: 'Fuel Reserve', value: 34, unit: '%', color: 'bg-yellow-500' },
];

type EventSeverity = 'info' | 'warning' | 'critical';

const recentEvents: {
  id: number;
  timestamp: string;
  mission: string;
  description: string;
  severity: EventSeverity;
}[] = [
  {
    id: 1,
    timestamp: '2025-01-15 14:32:07 UTC',
    mission: 'Artemis VII',
    description: 'Course correction burn completed successfully. Delta-v applied: 12.4 m/s.',
    severity: 'info',
  },
  {
    id: 2,
    timestamp: '2025-01-15 13:18:44 UTC',
    mission: 'PEGASUS-9',
    description: 'Anomaly detected on thermal sensors — payload bay temperature elevated by 8°C above nominal.',
    severity: 'warning',
  },
  {
    id: 3,
    timestamp: '2025-01-15 12:55:21 UTC',
    mission: 'CRS-14',
    description: 'Docking port pressurization confirmed. ISS berthing sequence initiated.',
    severity: 'info',
  },
  {
    id: 4,
    timestamp: '2025-01-15 11:40:09 UTC',
    mission: 'Navigator-2',
    description: 'Loss of signal — satellite entered eclipse phase. Contact expected in 47 minutes.',
    severity: 'critical',
  },
  {
    id: 5,
    timestamp: '2025-01-15 10:22:33 UTC',
    mission: 'Horizon-3',
    description: 'Science data downlink complete. 4.7 GB transferred to Goldstone ground station.',
    severity: 'info',
  },
  {
    id: 6,
    timestamp: '2025-01-15 09:05:17 UTC',
    mission: 'Stellar-11',
    description: 'Solar flare event (X1.2) detected. Instrument safing mode activated as precaution.',
    severity: 'warning',
  },
];

const groundStations: {
  id: number;
  name: string;
  location: string;
  currentContact: string | null;
  signalQuality: number;
  online: boolean;
}[] = [
  {
    id: 1,
    name: 'Goldstone',
    location: 'Mojave Desert, CA, USA',
    currentContact: 'Horizon-3',
    signalQuality: 87,
    online: true,
  },
  {
    id: 2,
    name: 'Madrid',
    location: 'Robledo de Chavela, Spain',
    currentContact: 'Artemis VII',
    signalQuality: 92,
    online: true,
  },
  {
    id: 3,
    name: 'Canberra',
    location: 'Tidbinbilla, Australia',
    currentContact: null,
    signalQuality: 0,
    online: false,
  },
  {
    id: 4,
    name: 'Usuda',
    location: 'Nagano Prefecture, Japan',
    currentContact: 'Stellar-11',
    signalQuality: 74,
    online: true,
  },
];

const upcomingSchedule: {
  id: number;
  scheduledTime: string;
  mission: string;
  eventType: string;
  duration: string;
}[] = [
  {
    id: 1,
    scheduledTime: '2025-01-15 16:00 UTC',
    mission: 'Artemis VII',
    eventType: 'Orbital Insertion Burn',
    duration: '4 min 22 sec',
  },
  {
    id: 2,
    scheduledTime: '2025-01-15 17:30 UTC',
    mission: 'CRS-14',
    eventType: 'EVA Support Comms Window',
    duration: '45 min',
  },
  {
    id: 3,
    scheduledTime: '2025-01-15 19:15 UTC',
    mission: 'PEGASUS-9',
    eventType: 'Thermal Diagnostics Sequence',
    duration: '20 min',
  },
  {
    id: 4,
    scheduledTime: '2025-01-15 21:00 UTC',
    mission: 'Horizon-3',
    eventType: 'Deep Space Network Handoff',
    duration: '1 hr 10 min',
  },
  {
    id: 5,
    scheduledTime: '2025-01-15 23:45 UTC',
    mission: 'Navigator-2',
    eventType: 'Signal Reacquisition Attempt',
    duration: '30 min',
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case 'Active':
      return 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
    case 'Warning':
      return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
    case 'Inactive':
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  }
}

function SeverityIcon({ severity }: { severity: EventSeverity }) {
  switch (severity) {
    case 'critical':
      return <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />;
    case 'warning':
      return <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />;
    case 'info':
    default:
      return <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />;
  }
}

function SeverityDot({ severity }: { severity: EventSeverity }) {
  switch (severity) {
    case 'critical':
      return <span className="inline-block w-2 h-2 rounded-full bg-red-400" />;
    case 'warning':
      return <span className="inline-block w-2 h-2 rounded-full bg-yellow-400" />;
    case 'info':
    default:
      return <span className="inline-block w-2 h-2 rounded-full bg-blue-400" />;
  }
}

export default function DashboardPage() {
  const [search, setSearch] = useState('');

  const filteredMissions = missions.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.id.toLowerCase().includes(search.toLowerCase()) ||
      m.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Mission Control Dashboard</h1>
        <p className="text-gray-400 mt-1">Real-time overview of all active space missions and systems.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-900 border border-gray-800 rounded-xl p-5 flex items-center gap-4"
          >
            <stat.icon className={`w-8 h-8 ${stat.color}`} />
            <div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Missions Table + Telemetry Panel */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Missions Table */}
        <div className="xl:col-span-2 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="p-5 border-b border-gray-800 flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-white">Missions</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search missions…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 w-56"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="text-left px-5 py-3 font-medium">ID</th>
                  <th className="text-left px-5 py-3 font-medium">Name</th>
                  <th className="text-left px-5 py-3 font-medium">Type</th>
                  <th className="text-left px-5 py-3 font-medium">Altitude</th>
                  <th className="text-left px-5 py-3 font-medium">Signal</th>
                  <th className="text-left px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredMissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-5 py-8 text-center text-gray-500">
                      No missions match your search.
                    </td>
                  </tr>
                ) : (
                  filteredMissions.map((mission) => (
                    <tr
                      key={mission.id}
                      className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-5 py-3 font-mono text-gray-400">{mission.id}</td>
                      <td className="px-5 py-3 font-medium text-white">{mission.name}</td>
                      <td className="px-5 py-3 text-gray-400">{mission.type}</td>
                      <td className="px-5 py-3 text-gray-400">{mission.altitude}</td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-700 rounded-full h-1.5">
                            <div
                              className="bg-blue-500 h-1.5 rounded-full"
                              style={{ width: `${mission.signal}%` }}
                            />
                          </div>
                          <span className="text-gray-400 text-xs">{mission.signal}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(mission.status)}`}>
                          {mission.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Telemetry Panel */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl">
          <div className="p-5 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Live Telemetry</h2>
            <p className="text-xs text-gray-500 mt-0.5">Primary systems — Artemis VII</p>
          </div>
          <div className="p-5 space-y-5">
            {telemetry.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-gray-300">{item.label}</span>
                  <span className="text-white font-medium">
                    {item.value}{item.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`${item.color} h-2 rounded-full transition-all`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Events + Ground Stations */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Events Activity Feed */}
        <div className="xl:col-span-2 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="p-5 border-b border-gray-800 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <h2 className="text-lg font-semibold text-white">Recent Events</h2>
          </div>
          <div className="divide-y divide-gray-800">
            {recentEvents.map((event) => (
              <div key={event.id} className="px-5 py-4 flex items-start gap-4 hover:bg-gray-800/40 transition-colors">
                <div className="mt-0.5">
                  <SeverityIcon severity={event.severity} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-white">{event.mission}</span>
                    <SeverityDot severity={event.severity} />
                    <span className="text-xs text-gray-500">{event.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-0.5 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ground Stations */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl">
          <div className="p-5 border-b border-gray-800 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-400" />
            <h2 className="text-lg font-semibold text-white">Ground Stations</h2>
          </div>
          <div className="divide-y divide-gray-800">
            {groundStations.map((station) => (
              <div key={station.id} className="px-5 py-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-sm">{station.name}</span>
                  {station.online ? (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      <Wifi className="w-3 h-3" />
                      Online
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-500/10 border border-gray-600/20 px-2 py-0.5 rounded-full">
                      <WifiOff className="w-3 h-3" />
                      Offline
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  {station.location}
                </p>
                <p className="text-xs text-gray-400">
                  Contact:{' '}
                  {station.currentContact ? (
                    <span className="text-blue-400 font-medium">{station.currentContact}</span>
                  ) : (
                    <span className="text-gray-600">None</span>
                  )}
                </p>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500">Signal Quality</span>
                    <span className={station.online ? 'text-white' : 'text-gray-600'}>
                      {station.signalQuality}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${station.online ? 'bg-green-500' : 'bg-gray-600'}`}
                      style={{ width: `${station.signalQuality}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl">
        <div className="p-5 border-b border-gray-800 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-purple-400" />
          <h2 className="text-lg font-semibold text-white">Upcoming Schedule</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-800">
                <th className="text-left px-5 py-3 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Scheduled Time
                  </span>
                </th>
                <th className="text-left px-5 py-3 font-medium">Mission</th>
                <th className="text-left px-5 py-3 font-medium">Event Type</th>
                <th className="text-left px-5 py-3 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              {upcomingSchedule.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-5 py-3 font-mono text-gray-300 text-xs">{row.scheduledTime}</td>
                  <td className="px-5 py-3 font-medium text-white">{row.mission}</td>
                  <td className="px-5 py-3 text-gray-400">{row.eventType}</td>
                  <td className="px-5 py-3">
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
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
