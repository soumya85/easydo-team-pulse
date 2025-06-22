
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Calendar, 
  Users, 
  Clock,
  MessageSquare
} from "lucide-react";

export const QuickActions = () => {
  const actions = [
    { icon: Plus, label: "New Task", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: FileText, label: "Create Report", color: "bg-green-600 hover:bg-green-700" },
    { icon: Calendar, label: "Schedule Meeting", color: "bg-purple-600 hover:bg-purple-700" },
    { icon: Users, label: "Invite Team", color: "bg-orange-600 hover:bg-orange-700" },
    { icon: Clock, label: "Log Time", color: "bg-indigo-600 hover:bg-indigo-700" },
    { icon: MessageSquare, label: "Send Message", color: "bg-pink-600 hover:bg-pink-700" }
  ];

  return (
    <Card className="mb-8 border-slate-200 shadow-sm">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <Button
                key={index}
                variant="outline"
                className={`h-auto py-4 flex-col space-y-2 border-slate-200 hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${action.color.includes('hover') ? 'hover:text-white hover:border-transparent' : ''}`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-xs font-medium">{action.label}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
