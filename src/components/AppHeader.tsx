
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Bell, 
  Plus,
  RefreshCw,
  ChevronDown
} from "lucide-react";

export function AppHeader() {
  return (
    <header className="h-16 border-b border-slate-200 bg-white px-6 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="h-8 w-8" />
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-semibold text-slate-900">DASHBOARD</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Company</span>
              <Button variant="outline" size="sm" className="h-8 px-3">
                Liberty Highrise PVT Ltd
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">Branch</span>
              <Button variant="outline" size="sm" className="h-8 px-3">
                All Branch
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white h-9 px-4">
          <Plus className="w-4 h-4 mr-2" />
          CREATE
        </Button>
        
        <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
          <RefreshCw className="w-4 h-4" />
        </Button>

        <div className="relative">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-green-500 hover:bg-green-500 text-xs">
              2
            </Badge>
          </Button>
        </div>

        <div className="relative">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0 relative">
            <Bell className="w-4 h-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 hover:bg-red-500 text-xs">
              3
            </Badge>
          </Button>
        </div>

        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
          <img 
            src="/lovable-uploads/9394970e-ec60-4a9a-ba34-feaa274e76f8.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
