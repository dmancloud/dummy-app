export default function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600 mb-6">Configure your application.</p>
      <div className="max-w-xl space-y-6">
        {["App Name", "Timezone", "Language"].map((label) => (
          <div key={label}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label}
            </label>
            <input
              type="text"
              placeholder={label}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
