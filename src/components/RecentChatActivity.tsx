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
    unreadCount: 3,
  },
  {
    id: "2",
    name: "Project Team Alpha",
    avatar: "/lovable-uploads/37183cdd-6c21-47a1-acda-93f71a55d7f5.png",
    lastMessage:
      "The latest updates have been pushed to the development branch",
    timestamp: "12m ago",
    unreadCount: 5,
    isGroup: true,
  },
  {
    id: "3",
    name: "Mike Chen",
    avatar: "/lovable-uploads/20890228-6919-4738-a10b-77ad7b06de2e.png",
    lastMessage: "Thanks for the quick response!",
    timestamp: "1h ago",
    unreadCount: 2,
  },
  {
    id: "4",
    name: "HR Department",
    avatar: "/lovable-uploads/37183cdd-6c21-47a1-acda-93f71a55d7f5.png",
    lastMessage:
      "Please review the updated policy document and provide feedback",
    timestamp: "Yesterday",
    unreadCount: 4,
    isGroup: true,
  },
];

export function RecentChatActivity() {
  const totalUnreadCount = 14; // Updated to 14 as requested

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
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
            <span className="font-semibold text-lg text-foreground">
              Recent Chat Activity
            </span>
          </div>
          <Badge className="bg-red-500 text-white px-4 py-2 text-base font-bold">
            {totalUnreadCount}
          </Badge>
        </div>

        <div className="text-center mb-8">
          <div className="text-4xl font-bold text-blue-600 mb-2">
            {totalUnreadCount}
          </div>
          <div className="text-base text-muted-foreground">Unread Messages</div>
        </div>

        <div className="space-y-4 mb-6 max-h-96 overflow-auto">
          {mockChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatClick(chat.id)}
              className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-blue-200 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all cursor-pointer group shadow-sm"
            >
              <div className="relative">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-lg font-semibold">
                    {chat.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {chat.unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {chat.unreadCount > 9 ? "9+" : chat.unreadCount}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground truncate text-base">
                    {chat.name}
                    {chat.isGroup && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        (Group)
                      </span>
                    )}
                  </h4>
                  <span className="text-sm text-muted-foreground ml-2">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground truncate mt-1 leading-relaxed">
                  {chat.lastMessage.length > 50
                    ? `${chat.lastMessage.substring(0, 50)}...`
                    : chat.lastMessage}
                </p>
              </div>

              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
            </div>
          ))}
        </div>

        <Button
          onClick={handleViewAllChats}
          variant="ghost"
          className="w-full text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-950/30 border border-blue-200 dark:border-blue-800 h-12 text-base font-medium"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          View All Chats
        </Button>
      </CardContent>
    </Card>
  );
}
