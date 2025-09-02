import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Zap, ChevronRight, MessageSquare, Code2, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [activeTab, setActiveTab] = useState("files");

  const codeSnippet = `def reverse_string(s: str) -> str:
    return s[::-1]

def main() -> None:
    reversed_str = reverse_string("hello")
    print("Reversed string:", reversed_str)`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">CodeAura</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <span className="text-muted-foreground">Your AI-Powered Code Editor</span>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" className="border-border">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary hover:bg-primary/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Hero Text */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Sparkles className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm text-primary font-medium">AI-Powered Code Editor</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Code smarter with{" "}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    AI assistance
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Experience the future of development with real-time collaboration, intelligent code explanations, and AI-powered debugging.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 px-8">
                    Start Coding Now
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="lg" className="border-border hover:bg-muted/50 px-8">
                    View Demo
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Online now: 1,247 developers</span>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Code Editor Demo */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
              
              <Card className="relative bg-card/95 backdrop-blur border-border/50 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-editor-sidebar/80 backdrop-blur border-b border-border/50">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex space-x-1">
                        <button 
                          onClick={() => setActiveTab("files")}
                          className={`text-xs px-2 py-1 rounded ${
                            activeTab === "files" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          Explorer
                        </button>
                        <button className="text-xs px-2 py-1 rounded text-muted-foreground hover:text-foreground">
                          Search
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground">factorial.js</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-12 h-[420px]">
                    {/* Left - File Explorer */}
                    <div className="col-span-3 bg-editor-sidebar/60 backdrop-blur border-r border-border/30 p-3">
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground font-medium">EXPLORER</div>
                        <div className="space-y-1">
                          <div className="text-xs flex items-center space-x-2 text-foreground bg-primary/10 px-2 py-1 rounded">
                            <ChevronRight className="w-3 h-3" />
                            <span>factorial.js</span>
                          </div>
                          <div className="text-xs text-muted-foreground pl-5 hover:text-foreground cursor-pointer py-1">utils.js</div>
                          <div className="text-xs text-muted-foreground pl-5 hover:text-foreground cursor-pointer py-1">index.html</div>
                          <div className="text-xs text-muted-foreground pl-5 hover:text-foreground cursor-pointer py-1">style.css</div>
                          <div className="text-xs text-muted-foreground pl-5 hover:text-foreground cursor-pointer py-1">package.json</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center - Code Editor */}
                    <div className="col-span-6 bg-editor-bg/90 backdrop-blur p-4 font-mono text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">1</span>
                          <span className="text-purple-400">function</span>
                          <span className="text-blue-400 ml-2">factorial</span>
                          <span className="text-foreground">(</span>
                          <span className="text-orange-400">n</span>
                          <span className="text-foreground">) {"{"}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">2</span>
                          <span className="text-muted-foreground ml-4">//</span>
                          <span className="text-green-400 ml-2">Base case</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">3</span>
                          <span className="text-purple-400 ml-4">if</span>
                          <span className="text-foreground ml-2">(</span>
                          <span className="text-orange-400">n</span>
                          <span className="text-foreground ml-2">&lt;= 1) </span>
                          <span className="text-purple-400">return</span>
                          <span className="text-yellow-400 ml-2">1</span>
                          <span className="text-foreground">;</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">4</span>
                        </div>
                        <div className="flex items-center bg-primary/5 border-l-2 border-primary/50">
                          <span className="text-muted-foreground w-8 text-xs">5</span>
                          <span className="text-muted-foreground ml-4">//</span>
                          <span className="text-green-400 ml-2">Recursive case</span>
                        </div>
                        <div className="flex items-center bg-primary/5 border-l-2 border-primary/50">
                          <span className="text-muted-foreground w-8 text-xs">6</span>
                          <span className="text-purple-400 ml-4">return</span>
                          <span className="text-orange-400 ml-2">n</span>
                          <span className="text-foreground ml-2">*</span>
                          <span className="text-blue-400 ml-2">factorial</span>
                          <span className="text-foreground">(</span>
                          <span className="text-orange-400">n</span>
                          <span className="text-foreground ml-2">- 1);</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">7</span>
                          <span className="text-foreground">{"}"}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">8</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">9</span>
                          <span className="text-muted-foreground">//</span>
                          <span className="text-green-400 ml-2">Test the function</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-muted-foreground w-8 text-xs">10</span>
                          <span className="text-blue-400">console</span>
                          <span className="text-foreground">.</span>
                          <span className="text-blue-400">log</span>
                          <span className="text-foreground">(</span>
                          <span className="text-blue-400">factorial</span>
                          <span className="text-foreground">(</span>
                          <span className="text-yellow-400">5</span>
                          <span className="text-foreground">));</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - AI Assistant */}
                    <div className="col-span-3 bg-editor-panel/80 backdrop-blur border-l border-border/30 p-3">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                          <span className="text-xs font-medium">AI Assistant</span>
                        </div>
                        
                        <div className="space-y-2">
                          <button className="w-full text-left p-2 bg-primary/10 border border-primary/30 rounded text-xs hover:bg-primary/20 transition-all duration-200 hover:scale-105">
                            ✨ Explain Code
                          </button>
                          <button className="w-full text-left p-2 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs hover:bg-emerald-500/20 transition-all duration-200">
                            🐛 Find Issues
                          </button>
                          <button className="w-full text-left p-2 bg-blue-500/10 border border-blue-500/30 rounded text-xs hover:bg-blue-500/20 transition-all duration-200">
                            🚀 Optimize
                          </button>
                        </div>
                        
                        <div className="mt-4 p-3 bg-muted/20 rounded-lg border border-border/30">
                          <div className="text-xs font-medium mb-2 text-primary">💡 Explanation</div>
                          <div className="text-xs text-muted-foreground leading-relaxed">
                            This recursive factorial function calculates n! by multiplying n with factorial(n-1).
                          </div>
                        </div>
                        
                        <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                          <div className="text-xs font-medium mb-2 text-green-400">✅ Output</div>
                          <div className="text-xs font-mono text-muted-foreground">
                            → 120
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - More Creative */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                code better
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to enhance your development workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Code Editor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced syntax highlighting, auto-completion, and intelligent code formatting for multiple languages
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Code Assistant</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get instant code explanations, bug fixes, optimization suggestions, and smart completions
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Execution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Run code instantly with built-in compiler, see real-time output, and debug efficiently
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Learning Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Practice with flashcards, coding challenges, and track your progress with analytics
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interactive Whiteboard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Visualize algorithms, design system architecture, and brainstorm with collaborative drawing tools
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Activity className="w-8 h-8 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Progress Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor coding streaks, track completed challenges, and visualize your learning journey
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary/10 via-purple-600/10 to-emerald-500/10 rounded-3xl p-12 border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to level up your coding skills?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers mastering algorithms and acing technical interviews
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 px-8">
                  Start Coding Now
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="border-border hover:bg-muted/50 px-8">
                  View Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-primary-foreground" />
              </div>
              <span className="font-semibold">CodeAura</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Built for developers, by developers
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;