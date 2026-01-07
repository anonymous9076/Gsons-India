import AdminSidebar from "@/components/AdminSidebar";
import AdminGuard from "@/components/AdminGuard";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminGuard>
            <div className="flex min-h-screen bg-gray-50">
                <AdminSidebar />
                <main className="flex-1 p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </AdminGuard>
    );
}
