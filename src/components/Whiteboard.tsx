import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Pen, 
  Square, 
  Circle, 
  Type, 
  MousePointer, 
  Eraser,
  Undo,
  Redo,
  Download,
  Users,
  Palette
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WhiteboardProps {
  isVisible: boolean;
}

export const Whiteboard = ({ isVisible }: WhiteboardProps) => {
  const [selectedTool, setSelectedTool] = useState("pointer");
  const [selectedColor, setSelectedColor] = useState("#A855F7");

  const tools = [
    { id: "pointer", icon: MousePointer, label: "Select" },
    { id: "pen", icon: Pen, label: "Pen" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "text", icon: Type, label: "Text" },
    { id: "eraser", icon: Eraser, label: "Eraser" }
  ];

  const colors = [
    "#A855F7", // Purple (ai-accent)
    "#22C55E", // Green (success) 
    "#EAB308", // Yellow (warning)
    "#3B82F6", // Blue (info)
    "#EF4444", // Red (destructive)
    "#F8FAFC", // White
    "#0F172A"  // Dark
  ];

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-editor-bg border border-editor-border rounded-lg flex flex-col z-10">
      {/* Whiteboard Header */}
      <div className="flex items-center justify-between p-3 border-b border-editor-border bg-editor-panel">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-medium">Collaborative Whiteboard</h3>
          <Badge variant="secondary" className="bg-success/20 text-success h-5 text-xs">
            2 collaborators
          </Badge>
        </div>
        
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
            <Undo className="w-3 h-3" />
          </Button>
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
            <Redo className="w-3 h-3" />
          </Button>
          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
            <Download className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Tool Bar */}
      <div className="flex items-center justify-between p-2 border-b border-editor-border bg-editor-sidebar">
        <div className="flex items-center gap-1">
          {tools.map(tool => (
            <Button
              key={tool.id}
              size="sm"
              variant="ghost"
              onClick={() => setSelectedTool(tool.id)}
              className={cn(
                "h-8 w-8 p-0",
                selectedTool === tool.id && "bg-ai-accent/20 text-ai-accent"
              )}
              title={tool.label}
            >
              <tool.icon className="w-4 h-4" />
            </Button>
          ))}
        </div>

        {/* Color Palette */}
        <div className="flex items-center gap-1">
          <Palette className="w-4 h-4 text-muted-foreground mr-1" />
          {colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={cn(
                "w-6 h-6 rounded border-2 border-editor-border hover:scale-110 transition-transform",
                selectedColor === color && "border-ai-accent"
              )}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Whiteboard Canvas */}
      <div className="flex-1 relative bg-white m-2 rounded border border-editor-border overflow-hidden">
        {/* Sample diagram content */}
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* User flow diagram */}
          <rect x="50" y="50" width="120" height="60" rx="8" fill="#A855F7" fillOpacity="0.2" stroke="#A855F7" strokeWidth="2" />
          <text x="110" y="85" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="monospace">User Input</text>
          
          <path d="M170 80 L230 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <rect x="250" y="50" width="120" height="60" rx="8" fill="#22C55E" fillOpacity="0.2" stroke="#22C55E" strokeWidth="2" />
          <text x="310" y="85" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="monospace">Code Parser</text>
          
          <path d="M370 80 L430 80" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <rect x="450" y="50" width="120" height="60" rx="8" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" />
          <text x="510" y="85" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="monospace">AI Analysis</text>
          
          <path d="M510 110 L510 170" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
          
          <rect x="450" y="190" width="120" height="60" rx="8" fill="#EAB308" fillOpacity="0.2" stroke="#EAB308" strokeWidth="2" />
          <text x="510" y="225" textAnchor="middle" fill="#1F2937" fontSize="12" fontFamily="monospace">Output</text>
          
          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
            </marker>
          </defs>
          
          {/* Collaboration cursors */}
          <g transform="translate(200, 150)">
            <circle cx="0" cy="0" r="3" fill="#A855F7" />
            <text x="8" y="-5" fill="#A855F7" fontSize="10" fontFamily="monospace">Alex</text>
          </g>
          
          <g transform="translate(350, 200)">
            <circle cx="0" cy="0" r="3" fill="#3B82F6" />
            <text x="8" y="-5" fill="#3B82F6" fontSize="10" fontFamily="monospace">Maria</text>
          </g>
        </svg>
        
        {/* Real-time collaboration indicators */}
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <div className="flex items-center gap-1 bg-black/10 rounded px-2 py-1">
            <div className="w-2 h-2 rounded-full bg-ai-accent"></div>
            <span className="text-xs">Alex</span>
          </div>
          <div className="flex items-center gap-1 bg-black/10 rounded px-2 py-1">
            <div className="w-2 h-2 rounded-full bg-info"></div>
            <span className="text-xs">Maria</span>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-editor-border bg-editor-panel text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Zoom: 100%</span>
          <span>Tool: {tools.find(t => t.id === selectedTool)?.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-3 h-3" />
          <span>2 active users</span>
        </div>
      </div>
    </div>
  );
};