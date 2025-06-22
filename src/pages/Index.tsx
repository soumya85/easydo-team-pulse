
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  TrendingUp, 
  FileText, 
  DollarSign,
  Calendar,
  Bell,
  Target
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 mb-1">Good morning, Alex!</h1>
              <p className="text-slate-600">Here's what's happening with your work today</p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                <CheckCircle className="w-3 h-3 mr-1" />
                All Systems Operational
              </Badge>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
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
  );
};

export default Index;
