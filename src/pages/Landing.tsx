import { useState, useEffect } from "react";
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
  ArrowRight,
  Terminal,
  Palette,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const codeExample = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < codeExample.length) {
        setTypedText(codeExample.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Brain,
      title: "AI Code Explanation",
      description: "Click any code snippet for instant, natural language explanations",
      gradient: "from-violet-500 to-purple-600",
      demo: "Explains complex algorithms in simple terms"
    },
    {
      icon: Bug,
      title: "Smart Debug Challenges", 
      description: "Turn buggy code into guided learning experiences",
      gradient: "from-red-500 to-pink-600",
      demo: "Interactive debugging with hints and solutions"
    },
    {
      icon: FileText,
      title: "AI Study Notes",
      description: "Transform code and concepts into flashcards and notes",
      gradient: "from-emerald-500 to-teal-600",
      demo: "Auto-generated study materials from your code"
    },
    {
      icon: Users,
      title: "Pair Programming",
      description: "Real-time collaboration with shared code and whiteboard",
      gradient: "from-blue-500 to-cyan-600",
      demo: "Live cursor tracking and voice chat integration"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : ''
      }`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              CodeAura
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors relative group">
              Demo
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" className="hover:bg-primary/10">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI-Powered Development
                </Badge>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Code
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                    {" "}Smarter
                  </span>
                  <br />
                  Build Faster
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Experience the future of coding with AI explanations, smart debugging, 
                  real-time collaboration, and intelligent code analysis.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-6">
                    Start Coding Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover:bg-primary/5">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                        i === 0 ? 'from-blue-500 to-purple-600' :
                        i === 1 ? 'from-green-500 to-emerald-600' :
                        'from-pink-500 to-red-600'
                      } border-2 border-background`}></div>
                    ))}
                  </div>
                  <span className="text-muted-foreground">10k+ developers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-muted-foreground">4.9/5 rating</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Code Demo */}
            <div className="relative">
              <Card className="bg-editor-bg/90 backdrop-blur-xl border-editor-border shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-editor-sidebar border-b border-editor-border">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">CodeAura Editor</span>
                    </div>
                  </div>
                  
                  {/* Code Editor */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">fibonacci.js</span>
                      <Badge variant="secondary" className="text-xs">
                        <Zap className="w-3 h-3 mr-1" />
                        Live
                      </Badge>
                    </div>
                    
                    <div className="font-mono text-sm bg-code-bg p-4 rounded-lg relative">
                      <pre className="text-muted-foreground whitespace-pre-wrap">
                        <span className="text-purple-400">function</span>{" "}
                        <span className="text-blue-400">fibonacci</span>
                        <span className="text-yellow-400">(</span>
                        <span className="text-orange-400">n</span>
                        <span className="text-yellow-400">) {`{`}</span>
                        {"\n"}
                        <span className="text-green-400">  // Click for AI explanation ✨</span>
                        {"\n"}
                        <span className="text-purple-400">  if</span> (n &lt;= <span className="text-emerald-400">1</span>) <span className="text-purple-400">return</span> n;
                        {"\n"}
                        <span className="text-purple-400">  return</span> <span className="text-blue-400">fibonacci</span>(n-<span className="text-emerald-400">1</span>) + <span className="text-blue-400">fibonacci</span>(n-<span className="text-emerald-400">2</span>);
                        {"\n"}
                        <span className="text-yellow-400">{`}`}</span>
                      </pre>
                      
                      {/* Cursor */}
                      <div className="absolute bottom-4 right-4 w-2 h-4 bg-primary animate-pulse"></div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">AI Explanation</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This function calculates Fibonacci numbers using recursion. It returns n if n ≤ 1, 
                        otherwise it calls itself with n-1 and n-2...
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-xl opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="text-sm">
              <Palette className="w-3 h-3 mr-1" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything you need to
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {" "}code smarter
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Advanced AI tools, collaborative features, and intelligent analysis 
              to transform your development workflow
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                    activeFeature === index 
                      ? 'ring-2 ring-primary bg-primary/5 shadow-lg shadow-primary/10' 
                      : 'hover:bg-muted/50 hover:shadow-lg'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                        activeFeature === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Feature Demo */}
            <div className="sticky top-8">
              <Card className="bg-editor-bg/90 backdrop-blur-xl border-editor-border shadow-2xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{features[activeFeature].title}</h3>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Interactive
                      </Badge>
                    </div>
                    
                    <div className="bg-code-bg rounded-lg p-4 border border-editor-border">
                      <div className="text-sm text-muted-foreground font-mono">
                        {features[activeFeature].demo}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full hover:bg-primary/5 group">
                      <Zap className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      Try This Feature
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <Badge variant="outline" className="text-sm bg-background/50">
              <Sparkles className="w-3 h-3 mr-1" />
              Join the Revolution
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to transform your
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}coding journey?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of developers who are already coding smarter, 
              learning faster, and building better software with CodeAura
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-lg px-8 py-6">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 hover:bg-primary/5">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
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