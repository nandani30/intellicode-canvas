import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  Play, 
  Send, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye,
  Sparkles,
  BookOpen,
  Timer,
  Target,
  Code2,
  Brain,
  Trophy
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface TestCase {
  id: number;
  input: string;
  expectedOutput: string;
  userOutput?: string;
  passed?: boolean;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
  type: "coding" | "quiz";
  language?: string;
  testCases?: TestCase[];
  questions?: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
  relatedFlashcard: {
    id: string;
    title: string;
    content: string;
  };
}

const ChallengeAttempt = () => {
  const { challengeId } = useParams();
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testResults, setTestResults] = useState<TestCase[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes

  // Mock challenge data
  const challenge: Challenge = {
    id: challengeId || "1",
    title: "Implement Binary Search",
    description: "Write a function that performs binary search on a sorted array. The function should return the index of the target element, or -1 if not found.",
    difficulty: "Medium",
    tags: ["Algorithms", "Search", "Arrays"],
    type: "coding",
    language: "javascript",
    testCases: [
      {
        id: 1,
        input: "arr = [1, 3, 5, 7, 9], target = 5",
        expectedOutput: "2",
        userOutput: "",
        passed: false
      },
      {
        id: 2,
        input: "arr = [1, 3, 5, 7, 9], target = 1",
        expectedOutput: "0",
        userOutput: "",
        passed: false
      },
      {
        id: 3,
        input: "arr = [1, 3, 5, 7, 9], target = 9",
        expectedOutput: "4",
        userOutput: "",
        passed: false
      },
      {
        id: 4,
        input: "arr = [1, 3, 5, 7, 9], target = 4",
        expectedOutput: "-1",
        userOutput: "",
        passed: false
      }
    ],
    relatedFlashcard: {
      id: "f1",
      title: "Binary Search Algorithm",
      content: "Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item."
    }
  };

  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" }
  ];

  const getPlaceholder = (lang: string) => {
    switch (lang) {
      case "javascript":
        return `function binarySearch(arr, target) {
  // Your implementation here
  
}`;
      case "python":
        return `def binary_search(arr, target):
    # Your implementation here
    pass`;
      case "java":
        return `public class Solution {
    public int binarySearch(int[] arr, int target) {
        // Your implementation here
        return -1;
    }
}`;
      case "cpp":
        return `#include <vector>
using namespace std;

class Solution {
public:
    int binarySearch(vector<int>& arr, int target) {
        // Your implementation here
        return -1;
    }
};`;
      default:
        return "// Start coding here...";
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    // Mock running code
    setTimeout(() => {
      const mockResults = challenge.testCases?.map(tc => ({
        ...tc,
        userOutput: Math.random() > 0.3 ? tc.expectedOutput : "incorrect",
        passed: Math.random() > 0.3
      })) || [];
      
      setTestResults(mockResults);
      setShowResults(true);
      setIsRunning(false);
    }, 2000);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const allPassed = testResults.every(tc => tc.passed);
      if (allPassed) {
        // Show success modal
        alert("🎉 Challenge completed successfully!");
      } else {
        alert("Some test cases failed. Keep trying!");
      }
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-500 bg-green-500/10 border-green-500/20";
      case "Medium": return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
      case "Hard": return "text-red-500 bg-red-500/10 border-red-500/20";
      default: return "text-muted-foreground bg-muted/10 border-border";
    }
  };

  if (challenge.type === "quiz") {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-lg font-semibold">{challenge.title}</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge className={getDifficultyColor(challenge.difficulty)}>
                {challenge.difficulty}
              </Badge>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Timer className="w-4 h-4" />
                <span>{formatTime(timer)}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Quiz Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Quiz Challenge
                </CardTitle>
                <CardDescription>
                  Answer the following questions based on the flashcard content.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Question {currentQuestion + 1} of {challenge.questions?.length || 0}
                  </p>
                  <Progress 
                    value={((currentQuestion + 1) / (challenge.questions?.length || 1)) * 100} 
                    className="w-full mt-2" 
                  />
                </div>
                
                {/* Quiz questions would go here */}
                <div className="text-center py-8">
                  <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Quiz implementation coming soon!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-lg font-semibold">{challenge.title}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Timer className="w-4 h-4" />
              <span>{formatTime(timer)}</span>
            </div>
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map(lang => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Panel - Challenge Description */}
        <div className="w-1/3 border-r border-border bg-card/50 p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-foreground">Challenge Description</h2>
              <p className="text-foreground leading-relaxed mb-4">
                {challenge.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-foreground">Input/Output Examples</h3>
              <div className="space-y-3">
                {challenge.testCases?.slice(0, 2).map(tc => (
                  <div key={tc.id} className="bg-muted/20 p-3 rounded-lg border">
                    <div className="text-sm">
                      <div className="mb-2">
                        <span className="font-medium text-foreground">Input:</span>
                        <div className="font-mono text-xs mt-1 bg-muted/30 p-2 rounded text-foreground">
                          {tc.input}
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Expected Output:</span>
                        <div className="font-mono text-xs mt-1 bg-muted/30 p-2 rounded text-foreground">
                          {tc.expectedOutput}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setShowFlashcard(true)}
            >
              <Eye className="w-4 h-4 mr-2" />
              View Related Flashcard
            </Button>
          </div>
        </div>

        {/* Right Panel - Code Editor & Output */}
        <div className="flex-1 flex flex-col">
          {/* Code Editor */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border bg-card/30">
              <div className="flex items-center space-x-2">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-medium">Solution</span>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  onClick={handleRunCode}
                  disabled={isRunning}
                >
                  <Play className="w-4 h-4 mr-2" />
                  {isRunning ? "Running..." : "Run Code"}
                </Button>
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || !showResults}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 p-4">
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={getPlaceholder(selectedLanguage)}
                className="w-full h-full font-mono text-sm resize-none border-0 bg-transparent focus-visible:ring-0"
              />
            </div>
          </div>

          {/* Test Cases Results */}
          {showResults && (
            <div className="h-1/3 border-t border-border bg-card/30 p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Test Results</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {testResults.filter(tc => tc.passed).length} / {testResults.length} passed
                  </span>
                  <Progress 
                    value={(testResults.filter(tc => tc.passed).length / testResults.length) * 100} 
                    className="w-20"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                {testResults.map(tc => (
                  <div key={tc.id} className={`p-3 rounded-lg border ${
                    tc.passed ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Test Case {tc.id}</span>
                      {tc.passed ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                    <div className="text-xs space-y-1">
                      <div>
                        <span className="text-muted-foreground">Input:</span> {tc.input}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Expected:</span> {tc.expectedOutput}
                      </div>
                      <div>
                        <span className="text-muted-foreground">Got:</span> {tc.userOutput}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Flashcard Modal */}
      <Dialog open={showFlashcard} onOpenChange={setShowFlashcard}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              {challenge.relatedFlashcard.title}
            </DialogTitle>
            <DialogDescription>
              Review the concept behind this challenge
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-muted/20 p-4 rounded-lg border">
              <p className="text-sm leading-relaxed">
                {challenge.relatedFlashcard.content}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChallengeAttempt;