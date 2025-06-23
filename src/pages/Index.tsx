import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RecentChatActivity } from "@/components/RecentChatActivity";
import {
  CheckSquare,
  Calendar,
  StickyNote,
  Clock,
  Users,
  Star,
  AlertTriangle,
  FileText,
  DollarSign,
  TrendingUp,
  Bell,
  ChevronRight,
  MapPin,
} from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <AppHeader />

          {/* Main Dashboard Content */}
          <main className="flex-1 p-3 md:p-6 overflow-auto">
            <div className="max-w-7xl mx-auto">
              {/* Welcome Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-semibold text-slate-900 flex items-center">
                  Good morning, Bhaskar! 👋
                </h1>
                <p className="text-slate-600 mt-1">
                  Here's what's happening with your work today
                </p>
              </div>

              {/* Quick Overview Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-600 rounded mr-3"></div>
                  {/* Quick Notes */}
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <CheckSquare className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-slate-900">
                          My Tasks at a Glance
                        </span>
                      </div>
                      <div className="text-center mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                          472
                        </div>
                        <div className="text-xs md:text-sm text-slate-600">
                          Total Pending Tasks
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <AlertTriangle className="w-4 h-4 text-red-600" />
                          </div>
                          <div className="text-xl font-bold text-red-600">
                            23
                          </div>
                          <div className="text-xs text-slate-600">Overdue</div>
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-1">
                            <Clock className="w-4 h-4 text-orange-600" />
                          </div>
                          <div className="text-xl font-bold text-orange-600">
                            18
                          </div>
                          <div className="text-xs text-slate-600">
                            Due Today
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Weekly Progress</span>
                          <span className="font-medium">85%</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View All My Tasks
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Meetings This Week */}
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-green-600 mr-2" />
                        <span className="font-medium text-slate-900">
                          Meetings This Week
                        </span>
                      </div>
                      <div className="text-center mb-4 md:mb-6">
                        <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                          7
                        </div>
                        <div className="text-xs md:text-sm text-slate-600">
                          Scheduled Meetings
                        </div>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="border-l-2 border-green-600 pl-3">
                          <div className="font-medium text-slate-900">
                            Upcoming
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white p-3 rounded border">
                            <div className="font-medium text-slate-900">
                              Weekly Team Sync
                            </div>
                            <div className="text-sm text-slate-600 flex items-center mt-1">
                              <Clock className="w-3 h-3 mr-1" />
                              Today at 2:00 PM
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              5 attendees
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <div className="font-medium text-slate-900">
                              Client Review Meeting
                            </div>
                            <div className="text-sm text-slate-600 flex items-center mt-1">
                              <Clock className="w-3 h-3 mr-1" />
                              Tomorrow at 10:30 AM
                            </div>
                            <div className="text-xs text-slate-500 mt-1">
                              John, Sarah
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full text-green-600 hover:bg-green-100"
                      >
                        View All Meetings
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Recent Notes & Reminders */}
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <StickyNote className="w-5 h-5 text-yellow-600 mr-2" />
                          <span className="font-medium text-slate-900">
                            Recent Notes & Reminders
                          </span>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                          12
                        </Badge>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">
                          12
                        </div>
                        <div className="text-sm text-slate-600">
                          Active Reminders
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="font-medium text-slate-900 mb-2">
                          Latest Note
                        </div>
                        <div className="bg-white p-3 rounded border text-sm text-slate-600">
                          Follow up on client feedback for the new dashboard
                          design...
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                          <span className="mr-2">+</span>
                          New Note/Reminder
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full text-yellow-600 hover:bg-yellow-100"
                        >
                          View All Notes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pending Approvals */}
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                          <span className="font-medium text-slate-900">
                            Pending Approvals
                          </span>
                        </div>
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          10
                        </div>
                        <div className="text-sm text-slate-600">
                          Total Pending Approvals
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-white p-2 rounded text-center">
                          <div className="text-blue-600 font-bold">3</div>
                          <div className="text-slate-600">Leave Requests</div>
                        </div>
                        <div className="bg-white p-2 rounded text-center">
                          <div className="text-orange-600 font-bold">2</div>
                          <div className="text-slate-600">OT Requests</div>
                        </div>
                        <div className="bg-white p-2 rounded text-center">
                          <div className="text-green-600 font-bold">1</div>
                          <div className="text-slate-600">Salary Advance</div>
                        </div>
                        <div className="bg-white p-2 rounded text-center">
                          <div className="text-purple-600 font-bold">4</div>
                          <div className="text-slate-600">Reimbursements</div>
                        </div>
                      </div>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Review Approvals
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Mid-Row Section - Recent Chat Activity + Work Status */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4 flex items-center">
                  <div className="w-1 h-5 md:h-6 bg-indigo-600 rounded mr-2 md:mr-3"></div>
                  Personal Productivity & Communication
                </h2>

                <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-4 md:gap-6">
                  {/* Recent Chat Activity - 50% width */}
                  <RecentChatActivity />

                  {/* My Daily Work Status - 50% width */}
                  <Card>
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <Clock className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-medium text-slate-900">
                          My Daily Work Status
                        </span>
                      </div>

                      <div className="text-center mb-4 md:mb-6">
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                          03:43:14 am IST
                        </div>
                        <div className="text-xs md:text-sm text-slate-600">
                          Monday 23 Jun, 2025
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">
                            Punch Status
                          </span>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded p-3 mb-4">
                          <div className="font-medium text-red-800">
                            NOT PUNCHED IN
                          </div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          ▷ PUNCH IN
                        </Button>
                        <div className="text-xs text-center text-slate-500 mt-2">
                          Punch actions are tracked for attendance
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-sm font-medium text-blue-800">
                            Office Hours
                          </span>
                        </div>
                        <div className="text-sm text-blue-600 mt-1">
                          09:00 AM To 06:00 PM
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded p-3 mb-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <span className="text-white text-xs font-bold">!</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-orange-800">
                              <span className="font-medium">Attendance is locked @11:31 AM.</span> For Punch-in, Click above try request for Approval, to yr Reporting Manager...
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border border-slate-200 rounded-lg p-3 md:p-4">
                        <div className="mb-3">
                          <h3 className="text-xs md:text-sm font-semibold text-slate-900">Location Timeline</h3>
                          <p className="text-xs text-slate-600">
                            (Tracked ONLY between Punch-in & Punch-out as per Mandate of the company)
                          </p>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Click here for more Detail
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Information Hub Section */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-3 md:mb-4 flex items-center">
                  <div className="w-1 h-5 md:h-6 bg-orange-600 rounded mr-2 md:mr-3"></div>
                  Information Hub
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {/* Notice Board */}
                  <Card>
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <Bell className="w-5 h-5 text-orange-600 mr-2" />
                        <span className="font-medium text-slate-900">
                          Notice Board
                        </span>
                      </div>
                      <div className="text-sm text-slate-600 mb-4">
                        You're viewing for: All Branch
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="border-l-4 border-orange-500 pl-3">
                          <div className="font-medium text-slate-900 text-sm">
                            Holiday Notice - Diwali Celebration
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            2 hours ago
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            Office will remain closed on October 24th for
                            Diwali...
                          </div>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3">
                          <div className="font-medium text-slate-900 text-sm">
                            New Health Insurance Policy Updates
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            1 day ago
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            Important updates regarding the company health
                            insurance polic...
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full text-orange-600 hover:bg-orange-50"
                      >
                        View All Notices
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Monthly Attendance Summary */}
                  <Card>
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center mb-4">
                        <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                        <span className="font-medium text-slate-900">
                          Monthly Attendance Summary - June 2025
                        </span>
                      </div>

                      <div className="text-center mb-4">
                        <div className="text-sm text-slate-600 mb-2">
                          Total Days: 30 | Working Days: 22
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-green-50 rounded">
                          <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              18
                            </span>
                          </div>
                          <div className="text-xs text-slate-600">Present</div>
                        </div>
                        <div className="text-center p-3 bg-red-50 rounded">
                          <div className="w-6 h-6 bg-red-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              2
                            </span>
                          </div>
                          <div className="text-xs text-slate-600">Absent</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded">
                          <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              3
                            </span>
                          </div>
                          <div className="text-xs text-slate-600">Leave</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded">
                          <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              5
                            </span>
                          </div>
                          <div className="text-xs text-slate-600">Late</div>
                        </div>
                        <div className="text-center p-3 bg-yellow-50 rounded">
                          <div className="w-6 h-6 bg-yellow-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              1
                            </span>
                          </div>
                          <div className="text-xs text-slate-600">Half Day</div>
                        </div>
                        <div className="text-center p-3 bg-red-50 rounded">
                          <div className="w-6 h-6 bg-red-400 rounded-full mx-auto mb-1 flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              1
                            </span>
                          </div>
                          <div className="text-xs text-slate-600">
                            Red Flags
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        View Full Attendance
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Salary Snapshot */}
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                        <div className="flex items-center">
                          <span className="font-medium text-slate-900">
                            Salary Snapshot
                          </span>
                          <div className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            +2.3%
                          </div>
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          ₹ 50,000.00
                        </div>
                        <div className="text-sm text-slate-600">
                          Last Net Pay
                        </div>
                        <div className="text-xs text-slate-500">
                          vs previous month
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Next Payslip</span>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700"
                          >
                            15
                          </Badge>
                        </div>
                        <div className="text-xs text-slate-600">
                          Days Remaining
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-white p-2 rounded text-center">
                          <div className="text-purple-600 font-bold">
                            ₹8,500
                          </div>
                          <div className="text-slate-600">Tax Deducted</div>
                        </div>
                        <div className="bg-white p-2 rounded text-center">
                          <div className="text-orange-600 font-bold">
                            ₹2,200
                          </div>
                          <div className="text-slate-600">PF Contribution</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                          Request Salary Advance
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full text-green-600 hover:bg-green-100 text-sm"
                        >
                          View All Payslips
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* My Performance */}
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Star className="w-5 h-5 text-yellow-600 mr-2" />
                        <span className="font-medium text-slate-900">
                          My Performance
                        </span>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-current" />
                          ))}
                          <Star className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">
                          4.4
                        </div>
                        <div className="text-sm text-slate-600">
                          Average rating from 23 task reviews
                        </div>
                        <div className="text-sm text-green-600 font-medium mt-2 flex items-center justify-center">
                          Nice, Keep it up! 👍
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded mb-4">
                        <div className="text-center">
                          <div className="text-orange-600 font-bold mb-1">
                            👑
                          </div>
                          <div className="font-medium text-orange-800">
                            Employee of the Month
                          </div>
                          <div className="text-sm text-orange-600">
                            June 2025
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full text-yellow-600 hover:bg-yellow-100"
                      >
                        View Performance Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Support Footer */}
              <div className="text-center text-sm text-slate-500 py-4">
                Have a productive day! Need help? Contact our support team.
              </div>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;