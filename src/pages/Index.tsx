import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppHeader } from "@/components/AppHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <div className="min-h-screen flex w-full overflow-hidden bg-background">
        <AppSidebar />
        <SidebarInset className="flex-1 min-w-0 w-full">
          <AppHeader />

          {/* Main Dashboard Content */}
          <main className="flex-1 overflow-auto pt-32 md:pt-12 w-full">
            <div className="px-3 py-3 md:p-6 w-full">
              <div className="max-w-7xl mx-auto w-full">
                {/* Welcome Header */}
                <div className="mb-4 md:mb-6 w-full">
                  <h1 className="text-xl md:text-2xl font-semibold text-foreground break-words">
                    Good morning, Bhaskar! 👋
                  </h1>
                </div>

                {/* Dashboard Content */}
                <div className="mb-6 md:mb-8 w-full">
                  <h2 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center break-words">
                    <div className="w-1 h-5 md:h-6 bg-foreground rounded mr-2 md:mr-3 flex-shrink-0"></div>
                    Quick Overview
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full items-stretch">
                    {/* Task at a Glance */}
                    <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 w-full min-w-0 flex flex-col min-h-[400px]">
                      <CardContent className="p-4 md:p-6 w-full flex flex-col flex-1">
                        <div className="flex items-center mb-4">
                          <CheckSquare className="w-4 md:w-5 h-4 md:h-5 text-blue-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Task at a Glance
                          </span>
                        </div>

                        <Tabs
                          defaultValue="my-tasks"
                          className="w-full h-full flex flex-col"
                        >
                          <TabsList className="grid w-full grid-cols-2 mb-4">
                            <TabsTrigger
                              value="my-tasks"
                              className="text-xs data-[state=active]:border-2 data-[state=active]:border-blue-600"
                            >
                              My Task
                            </TabsTrigger>
                            <TabsTrigger
                              value="delegated-tasks"
                              className="text-xs data-[state=active]:border-2 data-[state=active]:border-blue-600"
                            >
                              Delegated Task
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent
                            value="my-tasks"
                            className="flex flex-col flex-1 data-[state=active]:flex"
                          >
                            <div className="flex-1">
                              <div className="text-center mb-4 md:mb-6">
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                                  472
                                </div>
                                <div className="text-xs md:text-sm text-muted-foreground">
                                  Total Pending Tasks
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                                <div className="text-center">
                                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                    <AlertTriangle className="w-4 h-4 text-red-600" />
                                  </div>
                                  <div className="text-lg md:text-xl font-bold text-red-600">
                                    23
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Overdue
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                    <Clock className="w-4 h-4 text-orange-600" />
                                  </div>
                                  <div className="text-lg md:text-xl font-bold text-orange-600">
                                    18
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Due Today
                                  </div>
                                </div>
                              </div>
                              <div className="mb-4">
                                <div className="flex justify-between text-xs md:text-sm mb-1 text-foreground">
                                  <span>Weekly Progress</span>
                                  <span className="font-medium">85%</span>
                                </div>
                                <Progress value={85} className="h-2" />
                              </div>
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm mt-auto">
                              View All My Tasks
                            </Button>
                          </TabsContent>

                          <TabsContent
                            value="delegated-tasks"
                            className="flex flex-col flex-1 data-[state=active]:flex"
                          >
                            <div className="flex-1">
                              <div className="text-center mb-4 md:mb-6">
                                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                                  89
                                </div>
                                <div className="text-xs md:text-sm text-muted-foreground">
                                  Total Delegated Tasks
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                                <div className="text-center">
                                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                    <Clock className="w-4 h-4 text-yellow-600" />
                                  </div>
                                  <div className="text-lg md:text-xl font-bold text-yellow-600">
                                    12
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    In Progress
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-1">
                                    <CheckSquare className="w-4 h-4 text-green-600" />
                                  </div>
                                  <div className="text-lg md:text-xl font-bold text-green-600">
                                    77
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Completed
                                  </div>
                                </div>
                              </div>
                              <div className="mb-4">
                                <div className="flex justify-between text-xs md:text-sm mb-1 text-foreground">
                                  <span>Completion Rate</span>
                                  <span className="font-medium">87%</span>
                                </div>
                                <Progress value={87} className="h-2" />
                              </div>
                            </div>
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm mt-auto">
                              View Delegated Tasks
                            </Button>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>

                    {/* Meetings This Week */}
                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 w-full min-w-0 flex flex-col min-h-[400px]">
                      <CardContent className="p-4 md:p-6 w-full flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <Calendar className="w-4 md:w-5 h-4 md:h-5 text-green-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Meetings This Week
                          </span>
                        </div>
                        <div className="text-center mb-4 md:mb-6">
                          <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                            7
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground">
                            Scheduled Meetings
                          </div>
                        </div>
                        <div className="space-y-3 mb-4 flex-grow">
                          <div className="border-l-2 border-green-600 pl-3">
                            <div className="font-medium text-foreground text-sm">
                              Upcoming
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-card border border-border p-3 rounded">
                              <div className="font-medium text-foreground text-sm">
                                Weekly Team Sync
                              </div>
                              <div className="text-xs text-muted-foreground flex items-center mt-1">
                                <Clock className="w-3 h-3 mr-1" />
                                Today at 2:00 PM
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                5 attendees
                              </div>
                            </div>
                            <div className="bg-card border border-border p-3 rounded">
                              <div className="font-medium text-foreground text-sm">
                                Client Review Meeting
                              </div>
                              <div className="text-xs text-muted-foreground flex items-center mt-1">
                                <Clock className="w-3 h-3 mr-1" />
                                Tomorrow at 10:30 AM
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                3 attendees
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                          View All Meetings
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Pending Approvals */}
                    <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800 w-full min-w-0 flex flex-col min-h-[400px]">
                      <CardContent className="p-4 md:p-6 w-full flex flex-col h-full">
                        <div className="flex items-center mb-4">
                          <AlertTriangle className="w-4 md:w-5 h-4 md:h-5 text-red-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Pending Approvals
                          </span>
                        </div>
                        <div className="text-center mb-4 md:mb-6">
                          <div className="text-3xl md:text-4xl font-bold text-red-600 mb-1">
                            8
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground">
                            Items Awaiting Your Approval
                          </div>
                        </div>
                        <div className="space-y-3 mb-4 flex-grow">
                          <div className="bg-card border border-border p-3 rounded">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-foreground text-sm">
                                  Leave Request - John Doe
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Submitted 2 days ago
                                </div>
                              </div>
                              <Badge className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 border-red-200 dark:border-red-800 text-xs">
                                Urgent
                              </Badge>
                            </div>
                          </div>
                          <div className="bg-card border border-border p-3 rounded">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium text-foreground text-sm">
                                  Expense Report - Marketing
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Submitted 1 day ago
                                </div>
                              </div>
                              <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 border-orange-200 dark:border-orange-800 text-xs">
                                Review
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm">
                          Review Approvals
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Notes & Reminder */}
                    <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800 w-full min-w-0 flex flex-col min-h-[400px]">
                      <CardContent className="p-4 md:p-6 w-full flex flex-col flex-1">
                        <div className="flex items-center mb-4">
                          <StickyNote className="w-4 md:w-5 h-4 md:h-5 text-yellow-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Notes & Reminder
                          </span>
                        </div>
                        <div className="flex-grow">
                          <div className="space-y-3 mb-4">
                            <div className="bg-card border border-border p-3 rounded">
                              <div className="font-medium text-foreground text-sm">
                                Follow up on client proposal
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Added 2 hours ago
                              </div>
                            </div>
                            <div className="bg-card border border-border p-3 rounded">
                              <div className="font-medium text-foreground text-sm">
                                Review Q4 budget allocation
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Added yesterday
                              </div>
                            </div>
                            <div className="bg-card border border-border p-3 rounded">
                              <div className="font-medium text-foreground text-sm">
                                Update team on project timeline
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Added 3 days ago
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 mt-auto">
                          <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm">
                            Add New Note
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full text-yellow-600 hover:bg-yellow-50 text-sm"
                          >
                            View All Notes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Mid-Row Section - Recent Chat Activity + Work Status */}
                <div className="mb-6 md:mb-8 w-full">
                  <h2 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center break-words">
                    <div className="w-1 h-5 md:h-6 bg-indigo-600 rounded mr-2 md:mr-3 flex-shrink-0"></div>
                    Personal Productivity & Communication
                  </h2>

                  <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] gap-4 md:gap-6 w-full">
                    {/* Recent Chat Activity - 60% width */}
                    <RecentChatActivity />

                    {/* My Daily Work Status - 40% width */}
                    <Card className="w-full min-w-0">
                      <CardContent className="p-4 md:p-6 w-full">
                        <div className="flex items-center mb-4">
                          <Clock className="w-4 md:w-5 h-4 md:h-5 text-blue-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            My Daily Work Status
                          </span>
                        </div>

                        <div className="text-center mb-4 md:mb-6">
                          <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                            03:43:14 am IST
                          </div>
                          <div className="text-xs md:text-sm text-muted-foreground">
                            Monday 23 Jun, 2025
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded p-3 mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                              Office Hours
                            </span>
                          </div>
                          <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                            09:00 AM To 06:00 PM
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">
                              Punch Status
                            </span>
                          </div>
                          <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded p-3 mb-4">
                            <div className="font-medium text-red-800 dark:text-red-400 text-sm">
                              NOT PUNCHED IN
                            </div>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                            ▷ PUNCH IN
                          </Button>
                          <div className="text-xs text-center text-muted-foreground mt-2">
                            Punch actions are tracked for attendance
                          </div>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded p-3 mb-4">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-white text-xs font-bold">
                                !
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="text-xs md:text-sm text-orange-800 dark:text-orange-300">
                                <span className="font-medium">
                                  Attendance is locked @11:31 AM.
                                </span>{" "}
                                For Punch-in, Click above try request for
                                Approval, to yr Reporting Manager...
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border border-border rounded-lg p-3 md:p-4">
                          <div className="mb-3">
                            <h3 className="text-xs md:text-sm font-semibold text-foreground">
                              Location Timeline
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              (Tracked ONLY between Punch-in & Punch-out as per
                              Mandate of the company)
                            </p>
                          </div>

                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                            Click here for more Detail
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Information Hub Section */}
                <div className="mb-6 md:mb-8 w-full">
                  <h2 className="text-base md:text-lg font-semibold text-foreground mb-3 md:mb-4 flex items-center break-words">
                    <div className="w-1 h-5 md:h-6 bg-orange-600 rounded mr-2 md:mr-3 flex-shrink-0"></div>
                    Information Hub
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                    {/* Notice Board */}
                    <Card className="w-full min-w-0">
                      <CardContent className="p-4 md:p-6 w-full">
                        <div className="flex items-center mb-4">
                          <Bell className="w-4 md:w-5 h-4 md:h-5 text-orange-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Notice Board
                          </span>
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground mb-4">
                          You're viewing for: All Branch
                        </div>
                        <div className="space-y-3 mb-4">
                          <div className="border-l-4 border-orange-500 pl-3">
                            <div className="font-medium text-foreground text-sm">
                              Holiday Notice - Diwali Celebration
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              2 hours ago
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Office will remain closed on October 24th for
                              Diwali...
                            </div>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-3">
                            <div className="font-medium text-foreground text-sm">
                              New Health Insurance Policy Updates
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              1 day ago
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              Important updates regarding the company health
                              insurance polic...
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="w-full text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30 text-sm"
                        >
                          View All Notices
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Monthly Attendance Summary */}
                    <Card className="w-full min-w-0">
                      <CardContent className="p-4 md:p-6 w-full">
                        <div className="flex items-center mb-4">
                          <Calendar className="w-4 md:w-5 h-4 md:h-5 text-purple-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Monthly Attendance Summary - June 2025
                          </span>
                        </div>

                        <div className="text-center mb-4">
                          <div className="text-xs md:text-sm text-muted-foreground mb-2">
                            Total Days: 30 | Working Days: 22
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
                          <div className="text-center p-2 bg-green-50 dark:bg-green-950/30 rounded">
                            <div className="w-5 h-5 bg-green-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                18
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Present
                            </div>
                          </div>
                          <div className="text-center p-2 bg-red-50 dark:bg-red-950/30 rounded">
                            <div className="w-5 h-5 bg-red-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                2
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Absent
                            </div>
                          </div>
                          <div className="text-center p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                            <div className="w-5 h-5 bg-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                3
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Leave
                            </div>
                          </div>
                          <div className="text-center p-2 bg-orange-50 dark:bg-orange-950/30 rounded">
                            <div className="w-5 h-5 bg-orange-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                5
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Holiday
                            </div>
                          </div>
                          <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-950/30 rounded">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                4
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Late
                            </div>
                          </div>
                          <div className="text-center p-2 bg-purple-50 dark:bg-purple-950/30 rounded">
                            <div className="w-5 h-5 bg-purple-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                1
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Halfday
                            </div>
                          </div>
                          <div className="text-center p-2 bg-pink-50 dark:bg-pink-950/30 rounded col-span-2">
                            <div className="w-5 h-5 bg-pink-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                0
                              </span>
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Red Flag
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          className="w-full text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950/30 text-sm"
                        >
                          View Detailed Report
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Salary Snapshot */}
                    <Card className="w-full min-w-0">
                      <CardContent className="p-4 md:p-6 w-full">
                        <div className="flex items-center mb-4">
                          <Star className="w-4 md:w-5 h-4 md:h-5 text-green-600 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            Salary Snapshot
                          </span>
                        </div>

                        {/* Last Net Pay */}
                        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4 relative">
                          <div className="absolute top-2 right-2 text-xs text-green-600 font-medium">
                            📈 +12%
                          </div>
                          <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                            ₹ 50,000.00
                          </div>
                          <div className="text-sm font-medium text-green-700 dark:text-green-400">
                            Last Net Pay
                          </div>
                          <div className="text-xs text-green-600 mt-1">
                            vs previous month
                          </div>
                        </div>

                        {/* Next Payslip */}
                        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                          <div className="flex items-center mb-2">
                            <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-blue-800 dark:text-blue-400">
                              Next Payslip
                            </span>
                          </div>
                          <div className="text-xl font-bold text-blue-600">
                            15
                          </div>
                          <div className="text-xs text-blue-600">
                            Days Remaining
                          </div>
                        </div>

                        {/* Tax and PF */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded p-3 text-center">
                            <div className="text-lg font-bold text-purple-600">
                              ₹8,500
                            </div>
                            <div className="text-xs text-purple-600">
                              Tax Deducted
                            </div>
                          </div>
                          <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded p-3 text-center">
                            <div className="text-lg font-bold text-orange-600">
                              ₹2,200
                            </div>
                            <div className="text-xs text-orange-600">
                              PF Contribution
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-2">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm">
                            💳 Request Salary Advance
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full text-muted-foreground hover:bg-muted text-sm"
                          >
                            View All Payslips
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* My Performance */}
                    <Card className="w-full min-w-0">
                      <CardContent className="p-4 md:p-6 w-full">
                        <div className="flex items-center mb-4">
                          <Star className="w-4 md:w-5 h-4 md:h-5 text-yellow-500 mr-2" />
                          <span className="font-medium text-foreground text-sm md:text-base">
                            My Performance
                          </span>
                        </div>

                        {/* Rating */}
                        <div className="text-center mb-4">
                          <div className="flex justify-center mb-2">
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            <Star className="w-5 h-5 text-gray-300 dark:text-gray-600" />
                          </div>
                          <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                            4.4
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Average rating from 23 task reviews
                          </div>
                        </div>

                        {/* Encouragement Message */}
                        <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-3 mb-4 text-center">
                          <div className="text-sm font-medium text-green-700 dark:text-green-400">
                            Nice, Keep it up! 🎉
                          </div>
                        </div>

                        {/* Employee of the Month */}
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
                          <div className="text-center">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-white text-lg">🏆</span>
                            </div>
                            <div className="font-medium text-orange-700 dark:text-orange-400 text-sm">
                              Employee of the Month
                            </div>
                            <div className="text-xs text-orange-600 dark:text-orange-500 mt-1">
                              June 2025
                            </div>
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button
                          variant="ghost"
                          className="w-full text-muted-foreground hover:bg-muted text-sm"
                        >
                          View Performance Details
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
