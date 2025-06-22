
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  X, 
  Clock, 
  FileText,
  Calendar
} from "lucide-react";

export const PendingApprovals = () => {
  const approvals = [
    {
      type: "Leave Request",
      employee: "Sarah Johnson",
      details: "Vacation leave - Dec 20-24",
      date: "2 hours ago",
      priority: "normal"
    },
    {
      type: "Expense Report",
      employee: "Mike Chen",
      details: "Business trip expenses - $1,250",
      date: "5 hours ago",
      priority: "urgent"
    },
    {
      type: "Overtime Request",
      employee: "Emma Davis",
      details: "Weekend project work - 8 hours",
      date: "1 day ago",
      priority: "normal"
    }
  ];

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-orange-600" />
            Pending Approvals
          </CardTitle>
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            3 Pending
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {approvals.map((approval, index) => (
            <div key={index} className="p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="font-medium text-slate-900">{approval.type}</span>
                    {approval.priority === "urgent" && (
                      <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{approval.employee}</p>
                  <p className="text-sm text-slate-500">{approval.details}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {approval.date}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                    <X className="w-3 h-3 mr-1" />
                    Deny
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            View All Pending Requests →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
