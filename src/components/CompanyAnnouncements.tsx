
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Pin, 
  Calendar
} from "lucide-react";

export const CompanyAnnouncements = () => {
  const announcements = [
    {
      title: "Holiday Schedule Update",
      content: "Office will be closed Dec 24-26. Remote work available Dec 27-29.",
      date: "2 hours ago",
      pinned: true,
      category: "Important"
    },
    {
      title: "New Health Benefits",
      content: "Enhanced health coverage starting January 1st. Details in employee portal.",
      date: "1 day ago",
      pinned: false,
      category: "Benefits"
    },
    {
      title: "Team Building Event",
      content: "Annual company retreat scheduled for March 15-17. Save the date!",
      date: "3 days ago",
      pinned: false,
      category: "Events"
    }
  ];

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <Bell className="w-5 h-5 mr-2 text-blue-600" />
            Company Updates
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors duration-150">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {announcement.pinned && <Pin className="w-4 h-4 text-orange-500" />}
                  <h4 className="font-medium text-slate-900">{announcement.title}</h4>
                </div>
                <Badge variant="outline" className="text-xs">
                  {announcement.category}
                </Badge>
              </div>
              <p className="text-sm text-slate-600 mb-3">{announcement.content}</p>
              <div className="flex items-center text-xs text-slate-500">
                <Calendar className="w-3 h-3 mr-1" />
                {announcement.date}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
