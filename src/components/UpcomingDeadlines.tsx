
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Calendar, 
  Clock
} from "lucide-react";

export const UpcomingDeadlines = () => {
  const deadlines = [
    {
      title: "Q4 Budget Review",
      date: "Tomorrow",
      time: "2:00 PM",
      priority: "urgent",
      project: "Finance"
    },
    {
      title: "Client Presentation",
      date: "Dec 3",
      time: "10:00 AM",
      priority: "high",
      project: "Marketing"
    },
    {
      title: "Team Performance Review",
      date: "Dec 5",
      time: "3:00 PM",
      priority: "medium",
      project: "HR"
    },
    {
      title: "Product Launch Meeting",
      date: "Dec 8",
      time: "9:00 AM",
      priority: "high",
      project: "Product"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent": return "bg-red-100 text-red-700 border-red-200";
      case "high": return "bg-orange-100 text-orange-700 border-orange-200";
      case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
          Upcoming Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-slate-900 truncate">{deadline.title}</h4>
                  <Badge variant="outline" className={getPriorityColor(deadline.priority)}>
                    {deadline.priority}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {deadline.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {deadline.time}
                  </span>
                  <span className="text-blue-600">{deadline.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
