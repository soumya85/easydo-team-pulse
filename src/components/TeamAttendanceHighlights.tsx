
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  Clock,
  TrendingUp
} from "lucide-react";

export const TeamAttendanceHighlights = () => {
  const attendanceData = {
    totalEmployees: 45,
    present: 42,
    absent: 2,
    onLeave: 1,
    late: 3
  };

  const recentActivity = [
    { name: "John Smith", status: "late", time: "9:15 AM" },
    { name: "Lisa Wong", status: "absent", reason: "Sick leave" },
    { name: "Mike Johnson", status: "late", time: "9:30 AM" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "present": return "text-green-600 bg-green-50 border-green-200";
      case "absent": return "text-red-600 bg-red-50 border-red-200";
      case "late": return "text-orange-600 bg-orange-50 border-orange-200";
      case "on-leave": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Team Attendance Today
          </CardTitle>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <TrendingUp className="w-3 h-3 mr-1" />
            93% Present
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl font-bold text-green-700">{attendanceData.present}</div>
              <div className="text-sm text-green-600 flex items-center justify-center">
                <CheckCircle className="w-3 h-3 mr-1" />
                Present Today
              </div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="text-2xl font-bold text-slate-700">{attendanceData.totalEmployees}</div>
              <div className="text-sm text-slate-600">Total Team</div>
            </div>
          </div>

          {/* Status Breakdown */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Today's Overview</h4>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div className="flex items-center justify-between p-2 bg-red-50 rounded border border-red-200">
                <span className="text-red-700">Absent</span>
                <span className="font-semibold text-red-800">{attendanceData.absent}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-blue-50 rounded border border-blue-200">
                <span className="text-blue-700">On Leave</span>
                <span className="font-semibold text-blue-800">{attendanceData.onLeave}</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-orange-50 rounded border border-orange-200">
                <span className="text-orange-700">Late</span>
                <span className="font-semibold text-orange-800">{attendanceData.late}</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="space-y-3">
            <h4 className="font-medium text-slate-900">Attention Needed</h4>
            <div className="space-y-2">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-slate-900">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline" className={getStatusColor(item.status)}>
                      {item.status === "late" ? "Late" : "Absent"}
                    </Badge>
                    {item.time && (
                      <span className="text-xs text-slate-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {item.time}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <Button variant="outline" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            <Calendar className="w-4 h-4 mr-2" />
            View Full Attendance Log
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
