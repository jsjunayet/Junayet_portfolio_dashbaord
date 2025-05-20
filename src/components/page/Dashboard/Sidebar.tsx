"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Contact, Database, FileText, Home, Palette } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isSidebarCollapsed: boolean;
}

const NavItem = ({ to, icon, children, isSidebarCollapsed }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "hover:bg-secondary text-foreground"
      )}
    >
      <div className="text-lg">{icon}</div>
      {!isSidebarCollapsed && <span>{children}</span>}
    </Link>
  );
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    router.push("/");
  };

  return (
    <div
      className={cn(
        "bg-background border-r border-border h-screen flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && <h2 className="font-semibold text-lg">Dashboard</h2>}
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {isCollapsed ? "→" : "←"}
        </Button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-2">
        <NavItem
          to="/dashboard"
          icon={<Home />}
          isSidebarCollapsed={isCollapsed}
        >
          Home
        </NavItem>
        <NavItem
          to="/dashboard/projects"
          icon={<Database />}
          isSidebarCollapsed={isCollapsed}
        >
          Projects
        </NavItem>
        <NavItem
          to="/dashboard/resume"
          icon={<FileText />}
          isSidebarCollapsed={isCollapsed}
        >
          Resume
        </NavItem>
        <NavItem
          to="/dashboard/blog"
          icon={<Contact />}
          isSidebarCollapsed={isCollapsed}
        >
          Blog
        </NavItem>
        <NavItem
          to="/dashboard/appearance"
          icon={<Palette />}
          isSidebarCollapsed={isCollapsed}
        >
          Appearance
        </NavItem>
      </nav>

      <div className="p-4 border-t border-border mt-auto">
        <Button variant="destructive" onClick={handleLogout} className="w-full">
          {isCollapsed ? "Out" : "Logout"}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
