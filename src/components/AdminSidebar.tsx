"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Package,
    Users,
    FileText,
    LogOut,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { cn } from "@/utils/cn";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const menuItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Posts", href: "/admin/posts", icon: FileText },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const { logout, user } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logout();
            router.push("/auth/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <aside className="w-50 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
            <div className="p-6">
                <Link href="/admin" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.png"
                        alt="Gsons Logo"
                        width={150}
                        height={50}
                        className="h-12 w-auto object-contain"
                        priority
                    />
                </Link>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = item.href === "/admin"
                        ? pathname === "/admin"
                        : pathname === item.href || pathname.startsWith(item.href + "/");
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-primary text-white shadow-lg shadow-orange-500/20"
                                    : "text-gray-600 hover:bg-orange-50 hover:text-primary"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-400 group-hover:text-primary")} />
                                <span className="font-semibold">{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-100 space-y-2">
                <div className="px-4 py-3 bg-gray-50 rounded-xl mb-2">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Logged in as</p>
                    <p className="text-sm font-bold text-gray-900 truncate">{user?.name || "Admin"}</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all group"
                >
                    <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                    <span className="font-semibold">Logout</span>
                </button>
                <Link
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-primary rounded-xl transition-all group"
                >
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                    <span className="font-semibold">Exit Admin</span>
                </Link>
            </div>
        </aside>
    );
}
