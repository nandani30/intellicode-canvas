import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  Github, 
  Chrome,
  Eye,
  EyeOff,
  ArrowLeft,
  Terminal,
  Zap,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic when backend is connected
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Left Panel - Interactive Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-muted/40"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12">
          <div className="max-w-md space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">CodeAura</h1>
                <p className="text-sm text-muted-foreground">AI-Powered Development</p>
              </div>
            </div>
            
            {/* Interactive Code Preview */}
            <Card className="bg-code-bg/50 backdrop-blur border-editor-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-purple-400">const</div>
                    <div className="text-blue-400">welcomeBack</div>
                    <div className="text-white">= () =&gt; {"{"}</div>
                    <div className="pl-4 text-green-400">// Ready to code?</div>
                    <div className="pl-4 text-white">return <span className="text-emerald-400">'Let\'s build!'</span>;</div>
                    <div className="text-white">{"}"}</div>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-primary" />
                      <span className="text-sm text-primary">Welcome back to the future of coding</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Continue Your Journey</h2>
              <p className="text-muted-foreground">
                Experience AI-powered explanations, smart debugging, and real-time collaboration
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI Explanations
                </Badge>
                <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                  Smart Debugging
                </Badge>
                <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                  Live Collaboration
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            <h2 className="text-3xl font-bold">Welcome back</h2>
            <p className="text-muted-foreground">
              Sign in to continue to your CodeAura dashboard
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full group hover:bg-primary/5" size="lg">
              <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Continue with GitHub
            </Button>
            <Button variant="outline" className="w-full group hover:bg-primary/5" size="lg">
              <Chrome className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Continue with Google
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background px-4 text-sm text-muted-foreground">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Login Form */}
          <Card className="border-editor-border bg-card/50 backdrop-blur">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-xl">Sign in to your account</CardTitle>
              <CardDescription>
                Enter your credentials to access CodeAura
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background/50 border-border focus:border-primary transition-colors pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-auto p-1 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      ) : (
                        <Eye className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" 
                  size="lg"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sign up link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/signup" className="text-primary hover:underline font-medium">
              Sign up for free
            </Link>
          </div>

          {/* Demo credentials */}
          <Card className="bg-muted/20 border-dashed border-muted-foreground/20">
            <CardContent className="pt-6">
              <div className="text-sm space-y-2">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">Demo Credentials</span>
                </div>
                <div className="space-y-1 text-muted-foreground font-mono text-xs">
                  <div>Email: demo@codeaura.dev</div>
                  <div>Password: demo123</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;