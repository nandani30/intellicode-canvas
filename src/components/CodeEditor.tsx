import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Bug, 
  Lightbulb, 
  BookOpen, 
  Users, 
  MessageSquare,
  Sparkles,
  CheckCircle,
  XCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeEditorProps {
  onExplainCode: () => void;
  onBugFix: () => void;
  onGenerateNotes: () => void;
  onQualityAnalysis: () => void;
}

export const CodeEditor = ({ 
  onExplainCode, 
  onBugFix, 
  onGenerateNotes, 
  onQualityAnalysis 
}: CodeEditorProps) => {
  const [code, setCode] = useState(`// JavaScript Factorial Function
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(5)); // Output: 120`);

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);

  const handleRunCode = () => {
    setIsAnalyzing(true);
    // Simulate code execution
    setTimeout(() => {
      setIsAnalyzing(false);
      onQualityAnalysis();
    }, 1500);
  };

  const lineNumbers = code.split('\n').map((_, index) => index + 1);

  return (
    <div className="h-full flex flex-col bg-code-bg border border-editor-border rounded-lg overflow-hidden">
      {/* Editor Header */}
      <div className="flex items-center justify-between p-3 bg-editor-panel border-b border-editor-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <span className="text-sm text-muted-foreground ml-2">script.js</span>
          {hasErrors && <Badge variant="destructive" className="h-5 text-xs">2 errors</Badge>}
        </div>
        
        {/* Quick Actions */}
        <div className="flex items-center gap-1">
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onExplainCode}
            className="h-7 px-2 text-xs hover:bg-ai-accent/20 hover:text-ai-accent"
          >
            <Sparkles className="w-3 h-3 mr-1" />
            Explain
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={onBugFix}
            className="h-7 px-2 text-xs hover:bg-warning/20 hover:text-warning"
          >
            <Bug className="w-3 h-3 mr-1" />
            Debug
          </Button>
          <Button 
            size="sm" 
            variant="default" 
            onClick={handleRunCode}
            disabled={isAnalyzing}
            className="h-7 px-3 text-xs bg-ai-accent hover:bg-ai-accent/90 text-black"
          >
            <Play className="w-3 h-3 mr-1" />
            {isAnalyzing ? "Running..." : "Run"}
          </Button>
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 flex">
        {/* Line Numbers */}
        <div className="w-12 bg-editor-bg border-r border-editor-border p-2 text-right text-xs text-muted-foreground font-mono">
          {lineNumbers.map(num => (
            <div key={num} className="leading-6 h-6">
              {num}
            </div>
          ))}
        </div>

        {/* Code Area */}
        <div className="flex-1 relative">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className={cn(
              "w-full h-full resize-none border-0 bg-transparent p-3 font-mono text-sm leading-6",
              "focus-visible:ring-0 focus-visible:ring-offset-0",
              "placeholder:text-muted-foreground"
            )}
            placeholder="// Start coding..."
            style={{ minHeight: '400px' }}
          />
          
          {/* Error indicators */}
          <div className="absolute right-2 top-2 flex flex-col gap-1">
            <div className="w-2 h-2 rounded-full bg-destructive opacity-60"></div>
            <div className="w-2 h-2 rounded-full bg-warning opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-editor-panel border-t border-editor-border text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>JavaScript</span>
          <span>UTF-8</span>
          <span>Ln 5, Col 12</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-success" />
            No syntax errors
          </span>
        </div>
      </div>
    </div>
  );
};