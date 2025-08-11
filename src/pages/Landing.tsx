import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Zap, ChevronRight, MessageSquare } from "lucide-react";
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
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
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
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Hero Text */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                The smarter, collaborative way to{" "}
                <span className="text-primary">learn and write code</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Collaborate in real-time, debug with AI assistance, and create better code.
              </p>
              
              <div className="flex gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                    Sign Up
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-border px-8">
                  Try Demo
                </Button>
              </div>
            </div>

            {/* Right Side - Code Editor Demo */}
            <div className="relative">
              <Card className="bg-card border-border shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-editor-sidebar border-b border-border">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => setActiveTab("files")}
                        className={`text-sm px-3 py-1 rounded ${
                          activeTab === "files" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Explorer
                      </button>
                      <span className="text-sm text-muted-foreground">script.js</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 h-96">
                    {/* Left - File Explorer */}
                    <div className="bg-editor-sidebar border-r border-border p-4">
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground font-medium mb-3">Explorer</div>
                        <div className="space-y-1">
                          <div className="text-sm text-foreground flex items-center space-x-2">
                            <ChevronRight className="w-3 h-3" />
                            <span>script.js</span>
                          </div>
                          <div className="text-sm text-muted-foreground pl-5">index.html</div>
                          <div className="text-sm text-muted-foreground pl-5">styles.css</div>
                          <div className="text-sm text-muted-foreground pl-5">README.md</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center - Code Editor */}
                    <div className="bg-editor-bg p-4 font-mono text-sm">
                      <div className="space-y-1">
                        <div className="flex">
                          <span className="text-muted-foreground w-8">1</span>
                          <span className="text-blue-400">const</span>
                          <span className="text-foreground"> factorial = (</span>
                          <span className="text-orange-400">x</span>
                          <span className="text-foreground">) =&gt; {'{}'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-8">2</span>
                          <span className="text-foreground">    </span>
                          <span className="text-blue-400">return</span>
                          <span className="text-foreground"> a(xt) = x</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-8">3</span>
                          <span className="text-foreground">{'}'}</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-8">4</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-8">5</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right - AI Assistant */}
                    <div className="bg-editor-panel border-l border-border p-4">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">AI Assistant</span>
                        </div>
                        
                        <div className="space-y-3">
                          <button className="w-full text-left p-2 bg-primary/10 border border-primary/20 rounded text-sm hover:bg-primary/20 transition-colors">
                            Explain Code
                          </button>
                          <button className="w-full text-left p-2 bg-secondary/50 border border-border rounded text-sm hover:bg-secondary/70 transition-colors">
                            Report
                          </button>
                        </div>
                        
                        <div className="mt-6">
                          <div className="text-sm font-medium mb-2">Factorial</div>
                          <div className="text-xs text-muted-foreground leading-relaxed">
                            A function of racturaut n defines a factorial function because returns the constint in a recursive function in a reuse.
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <div className="text-sm font-medium mb-2">Explion</div>
                          <div className="text-xs text-muted-foreground">
                            An recoudent explanation
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

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-editor-sidebar/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Real-Time Collaboration</h3>
              <p className="text-muted-foreground">
                Code together seamlessly with others
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">AI Assistance</h3>
              <p className="text-muted-foreground">
                Get intelligent help with code explanations and suggestions
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Whiteboard</h3>
              <p className="text-muted-foreground">
                Brainstorm and design with interactive drawing surface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to start coding smarter?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of developers building better software together
            </p>
            <Link to="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
                Get Started
              </Button>
            </Link>
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