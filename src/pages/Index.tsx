
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  AlertCircle, 
  TrendingUp
} from "lucide-react";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { TasksOverview } from "@/components/TasksOverview";
import { WorkStatusCard } from "@/components/WorkStatusCard";
import { ProjectsOverview } from "@/components/ProjectsOverview";
import { QuickActions } from "@/components/QuickActions";
import { UpcomingDeadlines } from "@/components/UpcomingDeadlines";
import { CompanyAnnouncements } from "@/components/CompanyAnnouncements";
import { SalarySnapshot } from "@/components/SalarySnapshot";
import { PerformanceCard } from "@/components/PerformanceCard";
import { PendingApprovals } from "@/components/PendingApprovals";
import { TeamAttendanceHighlights } from "@/components/TeamAttendanceHighlights";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <AppHeader />
          
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {/* Welcome Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-900 mb-1">Good morning, Alex!</h2>
                    <p className="text-slate-600">Here's what's happening with your work today</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      All Systems Operational
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Dashboard Metrics - Top Row */}
              <DashboardMetrics />

              {/* Primary Work Content - Second Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 space-y-6">
                  <TasksOverview />
                  <ProjectsOverview />
                </div>
                <div className="space-y-6">
                  <WorkStatusCard />
                  <UpcomingDeadlines />
                </div>
              </div>

              {/* Quick Actions - Floating Section */}
              <QuickActions />

              {/* Company & Personal Information - Bottom Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                <CompanyAnnouncements />
                <SalarySnapshot />
                <PerformanceCard />
              </div>

              {/* Management Section - Final Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PendingApprovals />
                <TeamAttendanceHighlights />
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
