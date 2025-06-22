
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";

export const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Tasks Today",
      value: "8",
      subtitle: "3 completed",
      progress: 37.5,
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      title: "Active Projects",
      value: "12",
      subtitle: "2 due this week",
      progress: 83,
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Hours Logged",
      value: "6.5h",
      subtitle: "Today",
      progress: 81,
      icon: Clock,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Performance",
      value: "92%",
      subtitle: "This month",
      progress: 92,
      icon: TrendingUp,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        return (
          <Card key={index} className={`border ${metric.borderColor} hover:shadow-md transition-all duration-200 hover:-translate-y-1`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                  <IconComponent className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                  <div className="text-xs text-slate-500">{metric.subtitle}</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">{metric.title}</span>
                  <span className="text-xs text-slate-500">{metric.progress}%</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
