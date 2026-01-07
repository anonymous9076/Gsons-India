export default function AdminDashboard() {
    const stats = [
        { name: "Total Products", value: "245", change: "+12%", changeType: "increase" },
        { name: "Total Users", value: "1,200", change: "+5%", changeType: "increase" },
        { name: "Recent Posts", value: "12", change: "0", changeType: "neutral" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500 mt-2">Welcome to the GSONS admin panel.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                        <div className="mt-2 flex items-baseline justify-between">
                            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.changeType === 'increase' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                }`}>
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-orange-100 bg-orange-50 text-primary hover:bg-primary hover:text-white transition-all">
                            <span className="font-bold">Add Product</span>
                        </button>
                        <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-100 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                            <span className="font-bold">New Post</span>
                        </button>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">System Status</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Database</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Operational</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Image Storage</span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
