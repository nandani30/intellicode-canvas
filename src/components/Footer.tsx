import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  GitBranch, 
  Zap,
  Users,
  Clock
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="h-6 bg-editor-sidebar border-t border-editor-border flex items-center justify-between px-4 text-xs text-muted-foreground">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <span>JavaScript</span>
        </div>
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-ai-accent" />
          <span>AI Ready</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          <span>2 collaborators</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>Session: 1h 23m</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <Badge variant="secondary" className="bg-success/20 text-success h-4 text-xs">
          <Wifi className="w-2 h-2 mr-1" />
          Connected
        </Badge>
        <span>CodeAura v1.0</span>
      </div>
    </footer>
  );
};