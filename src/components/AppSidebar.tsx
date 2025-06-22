
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
  HelpCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Overview",
    icon: LayoutGrid,
    url: "/",
    isActive: true
  },
  {
    title: "Chats",
    icon: MessageSquare,
    url: "/chats"
  },
  {
    title: "Today's Schedule",
    icon: Calendar,
    url: "/schedule"
  },
  {
    title: "Employee Dashboard",
    icon: Users,
    url: "/employee-dashboard"
  },
  {
    title: "Company Dashboard",
    icon: Building2,
    url: "/company-dashboard"
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    url: "/tasks"
  },
  {
    title: "Meet",
    icon: Video,
    url: "/meet"
  },
  {
    title: "Notes & Reminder",
    icon: StickyNote,
    url: "/notes"
  },
  {
    title: "Reports",
    icon: FileText,
    url: "/reports"
  }
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-slate-200">
      <SidebarHeader className="p-6 border-b border-slate-100">
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="/lovable-uploads/37183cdd-6c21-47a1-acda-93f71a55d7f5.png" 
            alt="EasyDo" 
            className="w-20 h-auto"
          />
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200">
              <img 
                src="/lovable-uploads/20890228-6919-4738-a10b-77ad7b06de2e.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <div className="flex items-center space-x-1">
                <h3 className="font-semibold text-slate-900">Bhaskar Ghosh</h3>
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <p className="text-sm text-slate-600">Executive Director</p>
              <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-700 hover:bg-blue-100">
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
                        ? 'bg-blue-50 text-blue-700 font-medium shadow-sm border border-blue-100' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <a href={item.url} className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${item.isActive ? 'text-blue-600' : 'text-slate-500'}`} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-slate-100">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-12 px-4 rounded-lg text-slate-700 hover:bg-slate-50">
              <a href="/settings" className="flex items-center space-x-3">
                <Settings className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium">Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-12 px-4 rounded-lg text-slate-700 hover:bg-slate-50">
              <a href="/help" className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-slate-500" />
                <span className="text-sm font-medium">Help</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">COPYRIGHT © 2025</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
