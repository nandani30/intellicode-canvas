import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Users, 
  Brain, 
  Play, 
  Sparkles,
  ArrowRight,
  FileText,
  Folder,
  MousePointer2,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const step = Math.floor(scrollY / (windowHeight * 0.6));
      setCurrentStep(Math.min(step, 4));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-editor-border bg-editor-sidebar/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CodeAura</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-foreground hover:text-primary">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Interactive Scroll Journey */}
      <div className="pt-20">
        {/* Step 1: You open CodeAura */}
        <section 
          ref={(el) => sectionsRef.current[0] = el}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold leading-tight">
                  You open <br />
                  <span className="text-primary">CodeAura.</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  A clean, powerful editor designed for modern developers
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="group">
                    Start Building Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 w-4 h-4" />
                  See Demo
                </Button>
              </div>
            </div>

            {/* Editor Mockup */}
            <div className="bg-editor-bg border border-editor-border rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-editor-sidebar border-b border-editor-border p-3 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <span className="text-sm text-muted-foreground ml-2">main.js</span>
              </div>
              
              <div className="flex">
                <div className="w-48 bg-editor-sidebar border-r border-editor-border p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-foreground">
                      <Folder className="w-4 h-4" />
                      <span>src</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground ml-4">
                      <FileText className="w-4 h-4" />
                      <span>main.js</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground ml-4">
                      <FileText className="w-4 h-4" />
                      <span>utils.js</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-code-comment">// Welcome to CodeAura</div>
                    <div className="text-code-keyword">function</div> <span className="text-code-function">createMagic</span><span className="text-foreground">() {"{"}</span>
                    <div className="ml-4 text-code-keyword">return</div> <span className="text-code-string">"Let's build something amazing"</span><span className="text-foreground">;</span>
                    <div className="text-foreground">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Your friend joins */}
        <section 
          ref={(el) => sectionsRef.current[1] = el}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-editor-bg border border-editor-border rounded-lg overflow-hidden shadow-2xl relative">
                <div className="bg-editor-sidebar border-b border-editor-border p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">collaboration.js</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                    <span className="text-xs text-success">2 online</span>
                  </div>
                </div>
                
                <div className="p-6 font-mono text-sm">
                  <div className="space-y-2">
                    <div className="text-code-comment">// Real-time collaboration</div>
                    <div className="text-code-keyword">const</div> <span className="text-code-function">team</span> <span className="text-foreground">= [</span>
                    <div className="ml-4 text-code-string">"You"</div><span className="text-foreground">,</span>
                    <div className="ml-4 text-code-string relative">
                      "Sarah"
                      {currentStep >= 1 && (
                        <MousePointer2 
                          className="absolute -right-8 top-0 w-4 h-4 text-primary animate-bounce" 
                        />
                      )}
                    </div>
                    <div className="text-foreground">];</div>
                  </div>
                </div>
                
                {currentStep >= 1 && (
                  <div className="absolute top-16 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-lg text-xs animate-fade-in">
                    Sarah joined the session
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold leading-tight">
                  Your friend <br />
                  <span className="text-primary">joins.</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Seamless real-time collaboration with live cursors and instant sync
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Live cursor tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Instant code synchronization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Built-in voice & text chat</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: AI explains the code */}
        <section 
          ref={(el) => sectionsRef.current[2] = el}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold leading-tight">
                  Stuck? <br />
                  <span className="text-primary">Aura explains.</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  AI-powered code explanations, bug detection, and learning assistance
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-ai-accent" />
                  <span>Instant code explanations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-5 h-5 text-ai-accent" />
                  <span>Smart bug detection & fixes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-ai-accent" />
                  <span>Generate learning flashcards</span>
                </div>
              </div>
            </div>

            <div className="bg-editor-bg border border-editor-border rounded-lg overflow-hidden shadow-2xl">
              <div className="flex">
                <div className="flex-1 p-6 font-mono text-sm border-r border-editor-border">
                  <div className="space-y-2">
                    <div className="text-code-comment">// Complex algorithm</div>
                    <div className="text-code-keyword">function</div> <span className="text-code-function">quickSort</span><span className="text-foreground">(arr) {"{"}</span>
                    <div className="ml-4 text-code-keyword">if</div> <span className="text-foreground">(arr.length {"<="} 1) {"{"}</span>
                    <div className="ml-8 text-code-keyword">return</div> <span className="text-foreground">arr;</span>
                    <div className="ml-4">{"}"}</div>
                    <div className="text-foreground">{"}"}</div>
                  </div>
                </div>
                
                {currentStep >= 2 && (
                  <div className="w-80 bg-editor-sidebar p-4 animate-slide-in-right">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-ai-accent" />
                      <span className="text-sm font-medium text-ai-accent">AI Assistant</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-editor-panel rounded-lg">
                        <p className="text-foreground mb-2">This is a QuickSort implementation:</p>
                        <ul className="text-muted-foreground space-y-1 text-xs">
                          <li>• Base case: arrays ≤ 1 element</li>
                          <li>• Divides array around pivot</li>
                          <li>• Time complexity: O(n log n)</li>
                        </ul>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">
                        Generate Flashcard
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Flashcard flips */}
        <section 
          ref={(el) => sectionsRef.current[3] = el}
          className="min-h-screen flex items-center justify-center relative"
        >
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className={`w-80 h-48 bg-card border border-border rounded-xl p-6 flex items-center justify-center shadow-lg transition-transform duration-700 ${currentStep >= 3 ? 'rotate-y-180' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">QuickSort Algorithm</h3>
                    <p className="text-sm text-muted-foreground">What's the average time complexity?</p>
                  </div>
                </div>
                
                {currentStep >= 3 && (
                  <div className="absolute inset-0 w-80 h-48 bg-primary/10 border border-primary rounded-xl p-6 flex items-center justify-center shadow-lg animate-fade-in">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2 text-primary">O(n log n)</h3>
                      <p className="text-sm text-muted-foreground">QuickSort divides the problem in half each time, leading to logarithmic depth.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold leading-tight">
                  You master <br />
                  <span className="text-primary">the concept.</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  AI-generated flashcards and challenges help you learn faster
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span>Auto-generated study materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>Spaced repetition learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-primary" />
                  <span>Practice coding challenges</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 5: Final CTA */}
        <section 
          ref={(el) => sectionsRef.current[4] = el}
          className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-editor-bg to-editor-sidebar"
        >
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl font-bold leading-tight">
                <span className="text-primary">Build.</span>{" "}
                <span className="text-ai-accent">Learn.</span>{" "}
                <span className="text-foreground">Together.</span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                The complete development environment for modern teams
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/signup">
                <Button size="lg" className="text-lg px-8 py-4 h-auto group">
                  Start Building Now
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
                onClick={scrollToTop}
              >
                <Play className="mr-3 w-5 h-5" />
                Experience Again
              </Button>
            </div>
            
            <div className="pt-12">
              <p className="text-muted-foreground">
                &copy; 2024 CodeAura. Built for developers, by developers.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {[0, 1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`w-2 h-8 rounded-full transition-colors duration-300 ${
              currentStep >= step ? 'bg-primary' : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;