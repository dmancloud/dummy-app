export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="text-gray-600 mb-6">Welcome to the dummy app.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {["Revenue", "Users", "Orders"].map((title, i) => (
          <div
            key={title}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
          >
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold mt-1">
              {[12450, 3842, 1284][i].toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
