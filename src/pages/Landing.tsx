import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Users, 
  Brain, 
  Bug, 
  Play, 
  Sparkles,
  Zap,
  ArrowRight,
  FileText,
  Folder,
  Search,
  Settings,
  Terminal
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      title: "Create a Project",
      description: "Start with your preferred language and framework",
      icon: Code2
    },
    {
      title: "Invite Collaborators", 
      description: "Share session codes for real-time collaboration",
      icon: Users
    },
    {
      title: "Code & Collaborate",
      description: "Build together with AI assistance and live editing",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-editor-border px-6 py-4 bg-editor-sidebar">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CodeAura</span>
          </Link>
          
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

      {/* Hero Section - Code Editor Interface */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-editor-bg border border-editor-border rounded-lg overflow-hidden min-h-[600px]">
            {/* Editor Layout */}
            <div className="flex h-full">
              {/* Left Sidebar - File Explorer */}
              <div className="w-64 bg-editor-sidebar border-r border-editor-border">
                <div className="p-4 border-b border-editor-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Folder className="w-4 h-4" />
                    <span>EXPLORER</span>
                  </div>
                </div>
                <div className="p-2 space-y-1 text-sm">
                  <div className="flex items-center space-x-2 text-foreground">
                    <FileText className="w-4 h-4" />
                    <span>hero.js</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground ml-4">
                    <FileText className="w-4 h-4" />
                    <span>collaboration.js</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground ml-4">
                    <FileText className="w-4 h-4" />
                    <span>ai-features.js</span>
                  </div>
                </div>
              </div>

              {/* Main Editor Area */}
              <div className="flex-1 flex flex-col">
                {/* Tab Bar */}
                <div className="bg-editor-panel border-b border-editor-border">
                  <div className="flex">
                    <div className="px-4 py-2 bg-editor-bg border-r border-editor-border text-sm text-foreground">
                      hero.js
                    </div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="flex-1 p-6 font-mono text-sm bg-code-bg">
                  <div className="space-y-4">
                    <div className="text-center mb-8">
                      <h1 className="text-4xl font-bold mb-4 font-sans text-foreground">
                        Code together.<br />
                        Think smarter.<br />
                        <span className="text-primary">Build faster.</span>
                      </h1>
                      <p className="text-lg text-muted-foreground font-sans mb-6">
                        Real-time collaboration meets AI-powered development
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup">
                          <Button size="lg">
                            Start Building Now
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="lg">
                          <Play className="mr-2 w-4 h-4" />
                          See Demo
                        </Button>
                      </div>
                    </div>

                    {/* Code Comments as Features */}
                    <div className="mt-12 space-y-2">
                      <div className="text-ai-accent">// 🚀 Feature 1: AI Code Explain</div>
                      <div className="text-muted-foreground">//    Understand complex code instantly with AI-powered explanations</div>
                      <div className="text-ai-accent">// 🔍 Feature 2: Smart Bug Detection</div>
                      <div className="text-muted-foreground">//    Find and fix issues before they become problems</div>
                      <div className="text-ai-accent">// 🎨 Feature 3: Real-time Collaboration</div>
                      <div className="text-muted-foreground">//    Code together seamlessly with live cursors and instant sync</div>
                      <div className="text-ai-accent">// 📚 Feature 4: AI Flashcards & Challenges</div>
                      <div className="text-muted-foreground">//    Generate learning materials and practice challenges from your projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Editor Tabs */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h2>
          
          <div className="bg-editor-bg border border-editor-border rounded-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="bg-editor-sidebar border-b border-editor-border flex">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 text-sm border-r border-editor-border transition-colors ${
                    activeTab === index 
                      ? 'bg-editor-panel text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {index + 1}. {step.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-12 text-center">
              {(() => {
                const IconComponent = steps[activeTab].icon;
                return <IconComponent className="w-20 h-20 text-primary mx-auto mb-6" />;
              })()}
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{steps[activeTab].title}</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">{steps[activeTab].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-editor-panel">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Your Development?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join developers building better software together with AI assistance
          </p>
          <Link to="/signup">
            <Button size="lg" className="px-8">
              Start Building Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-editor-border px-6 py-8 bg-editor-sidebar">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 CodeAura. Built for developers, by developers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;