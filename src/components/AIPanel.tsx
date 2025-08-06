import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Sparkles, 
  MessageSquare, 
  BookOpen, 
  Bug, 
  BarChart3,
  Eye,
  RefreshCw,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Send
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

interface AIPanelProps {
  activeFeature: string;
  onFeatureChange: (feature: string) => void;
}

export const AIPanel = ({ activeFeature, onFeatureChange }: AIPanelProps) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const features = [
    { id: "explain", icon: Sparkles, label: "Explain Code", color: "ai-accent" },
    { id: "debug", icon: Bug, label: "Bug Detector", color: "warning" },
    { id: "quality", icon: BarChart3, label: "Quality Check", color: "info" },
    { id: "review", icon: Eye, label: "Code Review", color: "success" },
    { id: "notes", icon: BookOpen, label: "Study Notes", color: "ai-accent" },
    { id: "chat", icon: MessageSquare, label: "AI Chat", color: "primary" }
  ];

  const explanationContent = {
    title: "Factorial Function Analysis",
    explanation: "This JavaScript function implements a recursive factorial algorithm. Here's how it works:",
    details: [
      {
        line: "function factorial(n) {",
        explanation: "Declares a function named 'factorial' that takes one parameter 'n'"
      },
      {
        line: "if (n <= 1) return 1;",
        explanation: "Base case: if n is 0 or 1, return 1 (factorial of 0 and 1 is 1)"
      },
      {
        line: "return n * factorial(n - 1);",
        explanation: "Recursive case: multiply n by factorial of (n-1)"
      }
    ],
    complexity: "O(n) time, O(n) space due to call stack",
    suggestions: ["Consider iterative approach for better space efficiency", "Add input validation for negative numbers"]
  };

  const qualityMetrics = [
    { label: "Readability", score: 85, color: "success" },
    { label: "Maintainability", score: 90, color: "success" },
    { label: "Performance", score: 70, color: "warning" },
    { label: "Security", score: 95, color: "success" }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  const renderFeatureContent = () => {
    switch (activeFeature) {
      case "explain":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{explanationContent.title}</h3>
              <Button size="sm" variant="ghost" onClick={handleAnalyze} disabled={isAnalyzing}>
                <RefreshCw className={cn("w-4 h-4", isAnalyzing && "animate-spin")} />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">{explanationContent.explanation}</p>
            
            <div className="space-y-3">
              {explanationContent.details.map((detail, index) => (
                <div key={index} className="border border-editor-border rounded-lg p-3 bg-code-bg">
                  <code className="text-xs text-ai-accent font-mono block mb-2">{detail.line}</code>
                  <p className="text-xs text-muted-foreground">{detail.explanation}</p>
                </div>
              ))}
            </div>

            <div className="border border-editor-border rounded-lg p-3 bg-editor-panel">
              <h4 className="text-sm font-medium mb-2">Complexity Analysis</h4>
              <p className="text-xs text-muted-foreground">{explanationContent.complexity}</p>
            </div>

            <div className="border border-editor-border rounded-lg p-3 bg-editor-panel">
              <h4 className="text-sm font-medium mb-2">Suggestions</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                {explanationContent.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-ai-accent mt-1">•</span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="text-xs">
                <ThumbsUp className="w-3 h-3 mr-1" />
                Helpful
              </Button>
              <Button size="sm" variant="ghost" className="text-xs">
                <ThumbsDown className="w-3 h-3 mr-1" />
                Not helpful
              </Button>
              <Button size="sm" variant="ghost" className="text-xs ml-auto">
                <Copy className="w-3 h-3 mr-1" />
                Copy
              </Button>
            </div>
          </div>
        );

      case "quality":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Code Quality Report</h3>
              <Badge variant="secondary" className="bg-success/20 text-success">Score: 85/100</Badge>
            </div>

            <div className="space-y-3">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="border border-editor-border rounded-lg p-3 bg-editor-panel">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <Badge variant="secondary" className={cn(
                      "h-5 text-xs",
                      metric.score >= 80 && "bg-success/20 text-success",
                      metric.score >= 60 && metric.score < 80 && "bg-warning/20 text-warning",
                      metric.score < 60 && "bg-destructive/20 text-destructive"
                    )}>
                      {metric.score}%
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={cn(
                        "h-2 rounded-full transition-all",
                        metric.score >= 80 && "bg-success",
                        metric.score >= 60 && metric.score < 80 && "bg-warning",
                        metric.score < 60 && "bg-destructive"
                      )}
                      style={{ width: `${metric.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-editor-border rounded-lg p-3 bg-code-bg">
              <h4 className="text-sm font-medium mb-2 text-warning">⚠️ Issues Found</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive" className="h-4 text-xs">Error</Badge>
                  <span>Missing input validation (line 2)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="h-4 text-xs text-warning border-warning">Warning</Badge>
                  <span>Consider iterative approach for large inputs</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "chat":
        return (
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">AI Assistant</h3>
              <Badge variant="secondary" className="bg-ai-accent/20 text-ai-accent">Online</Badge>
            </div>
            
            <ScrollArea className="flex-1 mb-4">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-ai-accent flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-black" />
                  </div>
                  <div className="flex-1 bg-editor-panel rounded-lg p-2">
                    <p className="text-xs">Hello! I'm here to help you with code analysis, debugging, and explanations. What would you like to know about your code?</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-ai-accent/20 rounded-lg p-2 max-w-xs">
                    <p className="text-xs">Can you explain how recursion works in this factorial function?</p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs">U</span>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about your code..."
                className="flex-1 h-10 text-xs resize-none"
              />
              <Button size="sm" className="bg-ai-accent hover:bg-ai-accent/90 text-black">
                <Send className="w-3 h-3" />
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-8 text-muted-foreground">
            <Sparkles className="w-8 h-8 mx-auto mb-2 text-ai-accent" />
            <p className="text-sm">Select a feature to get started</p>
          </div>
        );
    }
  };

  return (
    <div className="w-80 bg-editor-panel border-l border-editor-border flex flex-col h-full">
      {/* Feature Tabs */}
      <div className="p-3 border-b border-editor-border">
        <div className="grid grid-cols-3 gap-1">
          {features.map(feature => (
            <Button
              key={feature.id}
              variant="ghost"
              size="sm"
              onClick={() => onFeatureChange(feature.id)}
              className={cn(
                "h-8 text-xs flex flex-col items-center gap-1 p-1",
                activeFeature === feature.id && "bg-ai-accent/20 text-ai-accent"
              )}
            >
              <feature.icon className="w-3 h-3" />
              <span className="text-xs leading-none">{feature.label.split(' ')[0]}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Feature Content */}
      <div className="flex-1 p-3 overflow-auto">
        {renderFeatureContent()}
      </div>
    </div>
  );
};