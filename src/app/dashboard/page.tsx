export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-6">Overview of your application metrics.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Sales Chart", "Traffic Sources", "Recent Activity", "Performance"].map(
          (title) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm h-48 flex items-center justify-center"
            >
              <p className="text-gray-400">{title} placeholder</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
