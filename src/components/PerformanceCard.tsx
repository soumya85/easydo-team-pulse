
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Award,
  BarChart3
} from "lucide-react";

export const PerformanceCard = () => {
  const metrics = [
    { label: "Task Completion", value: 92, target: 90 },
    { label: "Quality Score", value: 88, target: 85 },
    { label: "Team Collaboration", value: 95, target: 80 },
    { label: "Goal Achievement", value: 87, target: 85 }
  ];

  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <Target className="w-5 h-5 mr-2 text-purple-600" />
            My Performance
          </CardTitle>
          <Badge className="bg-green-100 text-green-800 border-green-200">
            <Award className="w-3 h-3 mr-1" />
            Excellent
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Overall Score */}
          <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-700">91%</div>
            <div className="text-sm text-purple-600">Overall Performance</div>
            <div className="flex items-center justify-center mt-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +5% from last month
            </div>
          </div>

          {/* Metrics Breakdown */}
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-700">{metric.label}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-900 font-semibold">{metric.value}%</span>
                    {metric.value >= metric.target && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                </div>
                <Progress value={metric.value} className="h-2" />
                <div className="text-xs text-slate-500">Target: {metric.target}%</div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full">
            <BarChart3 className="w-4 h-4 mr-2" />
            View Detailed Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
