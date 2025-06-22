
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  Users, 
  Calendar,
  TrendingUp
} from "lucide-react";

export const ProjectsOverview = () => {
  const projects = [
    {
      name: "EasyDo Mobile App",
      progress: 75,
      team: 8,
      deadline: "Dec 15",
      status: "On Track",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Client Portal Redesign",
      progress: 45,
      team: 5,
      deadline: "Jan 10",
      status: "In Progress",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "API Integration",
      progress: 90,
      team: 3,
      deadline: "Nov 30",
      status: "Almost Done",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <FolderOpen className="w-5 h-5 mr-2 text-blue-600" />
            Active Projects
          </CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-900">{project.name}</h4>
                <Badge variant="outline" className={`${project.bgColor} ${project.color} ${project.borderColor}`}>
                  {project.status}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">Progress</span>
                  <span className="text-sm font-medium text-slate-900">{project.progress}%</span>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {project.team} members
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Due {project.deadline}
                  </span>
                </div>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
