
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Eye
} from "lucide-react";

export const SalarySnapshot = () => {
  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-600" />
            Salary Overview
          </CardTitle>
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-1" />
            Details
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Current Month Progress */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-slate-700">December Progress</span>
              <span className="text-sm text-slate-500">22/31 days</span>
            </div>
            <Progress value={71} className="h-2" />
            <div className="text-right">
              <div className="text-lg font-bold text-slate-900">$4,260</div>
              <div className="text-sm text-slate-500">Earned this month</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-lg font-bold text-green-700">$6,000</div>
              <div className="text-xs text-green-600">Monthly Salary</div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-lg font-bold text-blue-700">$1,200</div>
              <div className="text-xs text-blue-600">Overtime</div>
            </div>
          </div>

          {/* Next Payday */}
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Next Payday</span>
            </div>
            <span className="text-sm font-semibold text-slate-900">Dec 31, 2024</span>
          </div>

          {/* Year Overview */}
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>8.5% increase from last year</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
