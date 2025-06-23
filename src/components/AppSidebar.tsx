import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutGrid,
  MessageSquare,
  Calendar,
  Users,
  Building2,
  CheckSquare,
  Video,
  StickyNote,
  FileText,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutGrid,
    url: "/",
    isActive: true,
  },
  {
    title: "Chats",
    icon: MessageSquare,
    url: "/chats",
  },
  {
    title: "Today's Schedule",
    icon: Calendar,
    url: "/schedule",
  },
  {
    title: "Employee Dashboard",
    icon: Users,
    url: "/employee-dashboard",
  },
  {
    title: "Company Dashboard",
    icon: Building2,
    url: "/company-dashboard",
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    url: "/tasks",
  },
  {
    title: "Meet",
    icon: Video,
    url: "/meet",
  },
  {
    title: "Notes & Reminder",
    icon: StickyNote,
    url: "/notes",
  },
  {
    title: "Reports",
    icon: FileText,
    url: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    url: "/settings",
  },
  {
    title: "Help",
    icon: HelpCircle,
    url: "/help",
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border" collapsible="icon">
      <SidebarHeader className="p-6 border-b border-border">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/lovable-uploads/37183cdd-6c21-47a1-acda-93f71a55d7f5.png"
            alt="EasyDo"
            className="w-20 h-auto group-data-[collapsible=icon]:w-8"
          />
          <div className="flex flex-col items-center space-y-2 group-data-[collapsible=icon]:hidden">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border">
              <img
                src="/lovable-uploads/20890228-6919-4738-a10b-77ad7b06de2e.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <h3 className="font-semibold text-foreground text-lg">
                  Bhaskar Ghosh
                </h3>
                <img
                  src="https://cdn.builder.io/api/v1/assets/62c95941e2ef4fb390e9f53735b0fcbd/image-eef20a?format=webp&width=800"
                  alt="User Icon"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Executive Director
              </p>
              <Badge
                variant="secondary"
                className="mt-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
              >
                Authority Level 1
              </Badge>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={item.isActive}
                    className={`h-12 px-4 rounded-lg transition-all duration-200 ${
                      item.isActive
                        ? "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 font-medium shadow-sm border border-blue-100 dark:border-blue-800"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <a href={item.url} className="flex items-center space-x-3">
                      <item.icon
                        className={`w-5 h-5 ${item.isActive ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground"}`}
                      />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border group-data-[collapsible=icon]:hidden">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">COPYRIGHT © 2025</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
