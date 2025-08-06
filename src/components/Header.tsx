import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  Search, 
  Bell, 
  Settings, 
  User, 
  ChevronDown,
  Sparkles,
  Play,
  Share2,
  Save
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onToggleWhiteboard: () => void;
  whiteboardVisible: boolean;
}

export const Header = ({ onToggleWhiteboard, whiteboardVisible }: HeaderProps) => {
  return (
    <header className="h-12 bg-editor-sidebar border-b border-editor-border flex items-center justify-between px-4">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-ai-accent to-ai-muted rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-black font-bold" />
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-ai-accent to-ai-muted bg-clip-text text-transparent">
            CodeAura
          </h1>
        </div>
        
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost" className="h-8 text-xs">
            <Menu className="w-4 h-4 mr-1" />
            File
          </Button>
          <Button size="sm" variant="ghost" className="h-8 text-xs">
            Edit
          </Button>
          <Button size="sm" variant="ghost" className="h-8 text-xs">
            View
          </Button>
          <Button size="sm" variant="ghost" className="h-8 text-xs">
            Run
          </Button>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-editor-bg border border-editor-border rounded-lg px-3 py-1">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search files, functions..." 
            className="bg-transparent border-0 text-sm w-64 focus:outline-none placeholder:text-muted-foreground"
          />
          <kbd className="text-xs text-muted-foreground bg-muted px-1 rounded">⌘K</kbd>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Button 
          size="sm" 
          variant="ghost" 
          onClick={onToggleWhiteboard}
          className={cn(
            "h-8 text-xs",
            whiteboardVisible && "bg-ai-accent/20 text-ai-accent"
          )}
        >
          <Share2 className="w-4 h-4 mr-1" />
          Whiteboard
        </Button>
        
        <Button size="sm" variant="ghost" className="h-8 text-xs">
          <Save className="w-4 h-4 mr-1" />
          Save
        </Button>
        
        <Button size="sm" variant="default" className="h-8 text-xs bg-ai-accent hover:bg-ai-accent/90 text-black">
          <Play className="w-4 h-4 mr-1" />
          Run
        </Button>

        <div className="w-px h-6 bg-editor-border mx-1"></div>

        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Bell className="w-4 h-4" />
        </Button>
        
        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
          <Settings className="w-4 h-4" />
        </Button>

        <div className="flex items-center gap-2 bg-editor-panel rounded-lg px-2 py-1">
          <div className="w-6 h-6 rounded-full bg-ai-accent flex items-center justify-center text-black text-xs font-medium">
            A
          </div>
          <span className="text-sm">Alex</span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </div>

        <Badge variant="secondary" className="bg-success/20 text-success h-6 text-xs">
          2 online
        </Badge>
      </div>
    </header>
  );
};