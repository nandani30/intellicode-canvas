import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Terminal, 
  Bug, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Play,
  Trash2,
  Download
} from "lucide-react";
import { cn } from "@/lib/utils";

interface OutputPanelProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const OutputPanel = ({ activeTab, onTabChange }: OutputPanelProps) => {
  const [isRunning, setIsRunning] = useState(false);

  const tabs = [
    { id: "output", icon: Terminal, label: "Output", count: null },
    { id: "problems", icon: Bug, label: "Problems", count: 3 },
    { id: "debug", icon: Play, label: "Debug Console", count: null },
    { id: "terminal", icon: Terminal, label: "Terminal", count: null }
  ];

  const outputLogs = [
    { type: "success", message: "120", timestamp: "14:32:15" },
    { type: "info", message: "Code executed successfully", timestamp: "14:32:15" },
    { type: "info", message: "Execution time: 0.24ms", timestamp: "14:32:15" },
  ];

  const problems = [
    {
      type: "error",
      message: "Potential stack overflow for large inputs",
      file: "script.js",
      line: 3,
      column: 10,
      severity: "high"
    },
    {
      type: "warning", 
      message: "Missing input validation",
      file: "script.js",
      line: 1,
      column: 18,
      severity: "medium"
    },
    {
      type: "info",
      message: "Consider adding JSDoc comments",
      file: "script.js", 
      line: 1,
      column: 1,
      severity: "low"
    }
  ];

  const handleClearOutput = () => {
    // Clear output logic
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "output":
        return (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-2 border-b border-editor-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-medium">Console Output</span>
              </div>
              <div className="flex items-center gap-1">
                <Button size="sm" variant="ghost" onClick={handleClearOutput} className="h-6 w-6 p-0">
                  <Trash2 className="w-3 h-3" />
                </Button>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                  <Download className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <ScrollArea className="flex-1 p-2">
              <div className="space-y-1 font-mono text-xs">
                {outputLogs.map((log, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-muted-foreground text-xs">{log.timestamp}</span>
                    {log.type === "success" && <CheckCircle className="w-3 h-3 text-success" />}
                    {log.type === "info" && <span className="text-info">ℹ</span>}
                    {log.type === "error" && <XCircle className="w-3 h-3 text-destructive" />}
                    <span className={cn(
                      log.type === "success" && "text-success",
                      log.type === "info" && "text-info", 
                      log.type === "error" && "text-destructive"
                    )}>
                      {log.message}
                    </span>
                  </div>
                ))}
                {isRunning && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-3 h-3 border border-ai-accent border-t-transparent rounded-full animate-spin"></div>
                    <span>Executing...</span>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        );

      case "problems":
        return (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-2 border-b border-editor-border">
              <div className="flex items-center gap-2">
                <Bug className="w-4 h-4" />
                <span className="text-sm font-medium">Problems</span>
                <Badge variant="secondary" className="h-4 text-xs">{problems.length}</Badge>
              </div>
            </div>
            <ScrollArea className="flex-1 p-2">
              <div className="space-y-2">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className="border border-editor-border rounded-lg p-2 hover:bg-editor-bg cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {problem.type === "error" && <XCircle className="w-4 h-4 text-destructive" />}
                      {problem.type === "warning" && <AlertTriangle className="w-4 h-4 text-warning" />}
                      {problem.type === "info" && <span className="w-4 h-4 text-info flex items-center justify-center">ℹ</span>}
                      <Badge 
                        variant="secondary" 
                        className={cn(
                          "h-4 text-xs",
                          problem.severity === "high" && "bg-destructive/20 text-destructive",
                          problem.severity === "medium" && "bg-warning/20 text-warning",
                          problem.severity === "low" && "bg-info/20 text-info"
                        )}
                      >
                        {problem.severity}
                      </Badge>
                    </div>
                    <p className="text-xs mb-1">{problem.message}</p>
                    <div className="text-xs text-muted-foreground">
                      {problem.file}:{problem.line}:{problem.column}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        );

      case "debug":
        return (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-2 border-b border-editor-border">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                <span className="text-sm font-medium">Debug Console</span>
              </div>
            </div>
            <ScrollArea className="flex-1 p-2">
              <div className="space-y-1 font-mono text-xs">
                <div className="text-muted-foreground"># Debug session started</div>
                <div className="text-success">✓ Breakpoint set at line 3</div>
                <div className="text-info">→ factorial(5) called</div>
                <div className="text-muted-foreground">  n = 5</div>
                <div className="text-info">→ factorial(4) called</div>
                <div className="text-muted-foreground">  n = 4</div>
                <div className="text-warning">⚠ Deep recursion detected</div>
              </div>
            </ScrollArea>
          </div>
        );

      case "terminal":
        return (
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-2 border-b border-editor-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-medium">Terminal</span>
              </div>
            </div>
            <ScrollArea className="flex-1 p-2">
              <div className="space-y-1 font-mono text-xs">
                <div className="text-success">user@codeaura:~/project$ npm run dev</div>
                <div className="text-info">  ➜  Local:   http://localhost:3000/</div>
                <div className="text-info">  ➜  Network: use --host to expose</div>
                <div className="text-muted-foreground">  ➜  ready in 124ms</div>
                <div className="text-success">✓ Server running</div>
                <div className="text-muted-foreground">user@codeaura:~/project$ _</div>
              </div>
            </ScrollArea>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-64 bg-editor-bg border-t border-editor-border flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-editor-border">
        {tabs.map(tab => (
          <Button
            key={tab.id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "h-8 rounded-none border-r border-editor-border text-xs flex items-center gap-1",
              activeTab === tab.id && "bg-editor-panel text-ai-accent"
            )}
          >
            <tab.icon className="w-3 h-3" />
            {tab.label}
            {tab.count && (
              <Badge variant="secondary" className="h-4 text-xs ml-1">
                {tab.count}
              </Badge>
            )}
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {renderTabContent()}
      </div>
    </div>
  );
};