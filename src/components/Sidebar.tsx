import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  FolderOpen, 
  File, 
  ChevronRight, 
  ChevronDown,
  Search,
  GitBranch,
  Settings,
  Palette,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["src", "components"]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => 
      prev.includes(folder) 
        ? prev.filter(f => f !== folder)
        : [...prev, folder]
    );
  };

  const fileTree = [
    {
      name: "src",
      type: "folder",
      children: [
        {
          name: "components",
          type: "folder", 
          children: [
            { name: "CodeEditor.tsx", type: "file", active: true },
            { name: "Sidebar.tsx", type: "file" },
            { name: "AIPanel.tsx", type: "file" },
            { name: "Whiteboard.tsx", type: "file" }
          ]
        },
        { name: "hooks", type: "folder", children: [
          { name: "useCodeAnalysis.ts", type: "file" },
          { name: "useCollaboration.ts", type: "file" }
        ]},
        { name: "utils", type: "folder", children: [
          { name: "codeParser.ts", type: "file" },
          { name: "aiService.ts", type: "file" }
        ]},
        { name: "App.tsx", type: "file" },
        { name: "main.tsx", type: "file" }
      ]
    },
    { name: "public", type: "folder", children: [] },
    { name: "package.json", type: "file" },
    { name: "README.md", type: "file" }
  ];

  const tabs = [
    { id: "explorer", icon: FolderOpen, label: "Explorer" },
    { id: "search", icon: Search, label: "Search" },
    { id: "git", icon: GitBranch, label: "Git" },
    { id: "collab", icon: Users, label: "Collaboration" },
    { id: "themes", icon: Palette, label: "Themes" },
    { id: "settings", icon: Settings, label: "Settings" }
  ];

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={index}>
        <div 
          className={cn(
            "flex items-center gap-1 px-2 py-1 text-sm rounded hover:bg-editor-panel cursor-pointer",
            item.active && "bg-ai-accent/20 text-ai-accent",
            level > 0 && "ml-4"
          )}
          style={{ paddingLeft: `${level * 12 + 8}px` }}
          onClick={() => item.type === "folder" && toggleFolder(item.name)}
        >
          {item.type === "folder" && (
            expandedFolders.includes(item.name) ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
          )}
          {item.type === "folder" ? (
            <FolderOpen className="w-4 h-4 text-warning" />
          ) : (
            <File className="w-4 h-4 text-info" />
          )}
          <span className="truncate">{item.name}</span>
          {item.type === "file" && item.active && (
            <Badge variant="secondary" className="ml-auto h-4 text-xs">Active</Badge>
          )}
        </div>
        {item.type === "folder" && expandedFolders.includes(item.name) && item.children && (
          renderFileTree(item.children, level + 1)
        )}
      </div>
    ));
  };

  return (
    <div className="w-64 bg-editor-sidebar border-r border-editor-border flex flex-col h-full">
      {/* Tab Bar */}
      <div className="flex border-b border-editor-border">
        {tabs.map(tab => (
          <Button
            key={tab.id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex-1 h-10 rounded-none border-r border-editor-border text-xs",
              activeTab === tab.id && "bg-editor-panel text-ai-accent"
            )}
          >
            <tab.icon className="w-4 h-4" />
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 p-2">
        {activeTab === "explorer" && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">EXPLORER</h3>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                <File className="w-3 h-3" />
              </Button>
            </div>
            <ScrollArea className="h-full">
              {renderFileTree(fileTree)}
            </ScrollArea>
          </div>
        )}

        {activeTab === "collab" && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">COLLABORATION</h3>
              <Badge variant="secondary" className="h-5 text-xs">2 online</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 rounded bg-editor-panel">
                <div className="w-6 h-6 rounded-full bg-ai-accent flex items-center justify-center text-xs text-black font-medium">
                  A
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Alex (You)</div>
                  <div className="text-xs text-muted-foreground">Editing script.js</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-success"></div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded bg-editor-panel">
                <div className="w-6 h-6 rounded-full bg-info flex items-center justify-center text-xs text-black font-medium">
                  M
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Maria</div>
                  <div className="text-xs text-muted-foreground">On whiteboard</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-success"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "git" && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">SOURCE CONTROL</h3>
              <Badge variant="secondary" className="h-5 text-xs">3 changes</Badge>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2 p-1 rounded hover:bg-editor-panel">
                <div className="w-4 h-4 bg-warning rounded text-center text-xs font-bold text-black">M</div>
                <span className="truncate">script.js</span>
              </div>
              <div className="flex items-center gap-2 p-1 rounded hover:bg-editor-panel">
                <div className="w-4 h-4 bg-success rounded text-center text-xs font-bold text-black">A</div>
                <span className="truncate">utils/parser.ts</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};