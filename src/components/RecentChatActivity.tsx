
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, ChevronRight } from "lucide-react";

interface ChatItem {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isGroup?: boolean;
}

const mockChats: ChatItem[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/lovable-uploads/20890228-6919-4738-a10b-77ad7b06de2e.png",
    lastMessage: "Can we schedule the meeting for tomorrow?",
    timestamp: "5m ago",
    unreadCount: 3
  },
  {
    id: "2",
    name: "Project Team Alpha",
    avatar: "/lovable-uploads/37183cdd-6c21-47a1-acda-93f71a55d7f5.png",
    lastMessage: "The latest updates have been pushed to...",
    timestamp: "12m ago",
    unreadCount: 7,
    isGroup: true
  },
  {
    id: "3",
    name: "Mike Chen",
    avatar: "/lovable-uploads/20890228-6919-4738-a10b-77ad7b06de2e.png",
    lastMessage: "Thanks for the quick response!",
    timestamp: "1h ago",
    unreadCount: 1
  },
  {
    id: "4",
    name: "HR Department",
    avatar: "/lovable-uploads/37183cdd-6c21-47a1-acda-93f71a55d7f5.png",
    lastMessage: "Please review the updated policy doc...",
    timestamp: "Yesterday",
    unreadCount: 2,
    isGroup: true
  }
];

export function RecentChatActivity() {
  const totalUnreadCount = mockChats.reduce((sum, chat) => sum + chat.unreadCount, 0);

  const handleChatClick = (chatId: string) => {
    // Navigate to specific chat - for now just log
    console.log(`Navigating to chat: ${chatId}`);
    // In a real app, this would navigate to /chats/{chatId}
  };

  const handleViewAllChats = () => {
    // Navigate to chats page
    console.log("Navigating to all chats");
    // In a real app, this would navigate to /chats
  };

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-medium text-slate-900">Recent Chat Activity</span>
          </div>
          <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-bold">
            {totalUnreadCount}
          </Badge>
        </div>
        
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-blue-600 mb-1">{totalUnreadCount}</div>
          <div className="text-sm text-slate-600">Unread Messages</div>
        </div>

        <div className="space-y-3 mb-4 max-h-80 overflow-auto">
          {mockChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer group"
            >
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    {chat.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {chat.unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {chat.unreadCount > 9 ? '9+' : chat.unreadCount}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-slate-900 truncate">
                    {chat.name}
                    {chat.isGroup && (
                      <span className="ml-1 text-xs text-slate-500">(Group)</span>
                    )}
                  </h4>
                  <span className="text-xs text-slate-500 ml-2">{chat.timestamp}</span>
                </div>
                <p className="text-sm text-slate-600 truncate mt-1">
                  {chat.lastMessage.length > 35 
                    ? `${chat.lastMessage.substring(0, 35)}...`
                    : chat.lastMessage
                  }
                </p>
              </div>
              
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
          ))}
        </div>

        <Button 
          onClick={handleViewAllChats}
          variant="ghost" 
          className="w-full text-blue-600 hover:bg-blue-100 border border-blue-200"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          View All Chats
        </Button>
      </CardContent>
    </Card>
  );
}
