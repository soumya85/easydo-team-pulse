
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  MapPin, 
  Coffee, 
  LogOut,
  CheckCircle
} from "lucide-react";

export const WorkStatusCard = () => {
  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-green-600" />
          My Daily Work Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Current Status */}
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium text-green-800">Currently Active</p>
                <p className="text-sm text-green-600">Clocked in at 9:00 AM</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              On Time
            </Badge>
          </div>

          {/* Today's Summary */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">6h 30m</div>
              <div className="text-sm text-slate-500">Hours Today</div>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded-lg">
              <div className="text-2xl font-bold text-slate-900">15m</div>
              <div className="text-sm text-slate-500">Break Time</div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-slate-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Working from: Office - Floor 3</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button variant="outline" className="w-full">
              <Coffee className="w-4 h-4 mr-2" />
              Take Break
            </Button>
            <Button variant="outline" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Clock Out
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
