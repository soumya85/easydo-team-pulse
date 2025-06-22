
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Plus,
  Filter
} from "lucide-react";

export const TasksOverview = () => {
  const tasks = [
    {
      id: 1,
      title: "Review Q4 Marketing Campaign",
      priority: "High",
      dueTime: "2:00 PM",
      status: "pending",
      completed: false
    },
    {
      id: 2,
      title: "Update Employee Handbook",
      priority: "Medium",
      dueTime: "Tomorrow",
      status: "in-progress",
      completed: false
    },
    {
      id: 3,
      title: "Weekly Team Standup",
      priority: "High",
      dueTime: "10:00 AM",
      status: "completed",
      completed: true
    },
    {
      id: 4,
      title: "Client Presentation Prep",
      priority: "High",
      dueTime: "4:00 PM",
      status: "pending",
      completed: false
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-700 border-red-200";
      case "Medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-progress": return <Clock className="w-4 h-4 text-blue-500" />;
      case "pending": return <AlertTriangle className="w-4 h-4 text-orange-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
            My Tasks Today
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-1" />
              Add Task
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start space-x-3 p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors duration-150">
              <Checkbox 
                checked={task.completed}
                className="mt-1"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-medium ${task.completed ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                    {task.title}
                  </h4>
                  {getStatusIcon(task.status)}
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                  <span className="text-sm text-slate-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {task.dueTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100">
          <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            View All Tasks →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
