import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Sparkles, 
  Users, 
  Zap, 
  Brain, 
  Bug, 
  FileText, 
  GitBranch,
  ChevronRight,
  Play,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Brain,
      title: "AI Code Explanation",
      description: "Click any code snippet for instant, natural language explanations",
      demo: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`,
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Bug,
      title: "Smart Debug Challenges", 
      description: "Turn buggy code into guided learning experiences",
      demo: `// Bug: Missing return statement
function addNumbers(a, b) {
  a + b; // Should be: return a + b;
}`,
      color: "from-red-500 to-pink-600"
    },
    {
      icon: FileText,
      title: "AI Study Notes",
      description: "Transform code and concepts into flashcards and notes",
      demo: `// Generates: "What is recursion?"
// Answer: "A function calling itself..."`,
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Pair Programming",
      description: "Real-time collaboration with shared code and whiteboard",
      demo: `// Live cursor positions
// Shared code editing
// Voice/text chat integration`,
      color: "from-orange-500 to-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CodeAura</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a>
            <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">Login</Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Interactive */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Code Learning
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Code Smarter,
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}Learn Faster
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the future of coding with AI explanations, smart debugging, 
                and real-time collaboration. Transform how you write and understand code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Coding Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 rating</span>
              </div>
              <div>10k+ developers</div>
              <div>Free to start</div>
            </div>
          </div>
          
          {/* Interactive Code Preview */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <Badge variant="secondary">Live Demo</Badge>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2 bg-muted/30 p-4 rounded-lg">
                    <div className="text-purple-400">function</div>
                    <div className="text-blue-400">calculateFibonacci</div>
                    <div className="text-muted-foreground">(n) {'{'}</div>
                    <div className="pl-4 text-green-400">// Click me for AI explanation! ✨</div>
                    <div className="pl-4">if (n &lt;= 1) return n;</div>
                    <div className="pl-4">return calculateFibonacci(n-1) +</div>
                    <div className="pl-8">calculateFibonacci(n-2);</div>
                    <div>{'}'}</div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-start space-x-2">
                      <Brain className="w-4 h-4 text-primary mt-0.5" />
                      <div className="text-sm">
                        <div className="font-medium text-primary">AI Explanation:</div>
                        <div className="text-muted-foreground mt-1">
                          This function calculates Fibonacci numbers using recursion...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section id="features" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything you need to elevate your coding skills and collaborate effectively
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Feature Selector */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all ${
                    activeFeature === index ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-transform ${
                        activeFeature === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Feature Demo */}
            <Card className="bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{features[activeFeature].title} Demo</h3>
                    <Badge variant="outline">Interactive</Badge>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4 font-mono text-sm">
                    <pre className="whitespace-pre-wrap text-muted-foreground">
                      {features[activeFeature].demo}
                    </pre>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Zap className="w-4 h-4 mr-2" />
                    Try This Feature
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Coding Journey?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of developers who are already coding smarter with CodeAura
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">CodeAura</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built for developers, by developers</span>
              <div className="flex items-center space-x-1">
                <GitBranch className="w-4 h-4" />
                <span>v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;