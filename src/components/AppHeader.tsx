import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, Plus, RefreshCw, ChevronDown, Filter } from "lucide-react";
import { useState } from "react";

export function AppHeader() {
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  return (
    <>
      {/* Main Header */}
      <header className="h-16 border-b border-slate-200 bg-white px-3 md:px-6 flex items-center justify-between fixed top-0 left-0 md:left-64 right-0 z-50">
        <div className="flex items-center space-x-2 md:space-x-4 flex-1 min-w-0">
          <SidebarTrigger className="h-8 w-8 md:hidden flex-shrink-0" />

          {/* Logo for mobile - shown on small screens */}
          <div className="flex items-center md:hidden flex-shrink-0">
            <img
              src="https://cdn.builder.io/api/v1/assets/62c95941e2ef4fb390e9f53735b0fcbd/image-9faca0?format=webp&width=800"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center space-x-6 flex-1">
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

          {/* Mobile center title */}
          <div className="flex-1 flex justify-center md:hidden">
            <h1 className="text-lg font-semibold text-slate-900">DASHBOARD</h1>
          </div>

          {/* Mobile CREATE button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white h-8 px-3 text-sm md:hidden">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Right side icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Right side icons - Mobile */}
        <div className="flex md:hidden items-center space-x-2">
          <div className="relative">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-green-500 hover:bg-green-500 text-xs">
                2
              </Badge>
            </Button>
          </div>

          <div className="relative">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-red-500 hover:bg-red-500 text-xs">
                3
              </Badge>
            </Button>
          </div>

          <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200">
            <img
              src="/lovable-uploads/9394970e-ec60-4a9a-ba34-feaa274e76f8.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Mobile Sub-Header with Company/Branch selectors */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="text-sm font-medium text-slate-900 mb-1">
              Liberty Highrise PVT Ltd
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <ChevronDown className="w-4 h-4 mr-1" />
              <span>All Branch</span>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="h-8 px-3 flex items-center"
          >
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </Button>
        </div>
      </div>
    </>
  );
}
