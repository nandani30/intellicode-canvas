import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Sparkles, 
  Github, 
  Chrome,
  Eye,
  EyeOff,
  ArrowLeft,
  Check,
  X,
  Zap,
  Users,
  Brain
} from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const [passwordStrength, setPasswordStrength] = useState({
    hasMinLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecial: false
  });

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    setPasswordStrength({
      hasMinLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signup logic when backend is connected
    console.log("Signup attempt with:", formData);
  };

  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;
  const strengthColor = strengthScore < 2 ? 'text-red-500' : strengthScore < 4 ? 'text-yellow-500' : 'text-green-500';
  const strengthText = strengthScore < 2 ? 'Weak' : strengthScore < 4 ? 'Medium' : 'Strong';

  return (
    <div className="min-h-screen bg-background flex relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Left Panel - Interactive Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-editor-bg via-editor-sidebar to-editor-panel"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-12">
          <div className="max-w-md space-y-8">
            {/* Logo */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-4 h-4 text-black" />
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  CodeAura
                </h1>
                <p className="text-muted-foreground">Join the coding revolution</p>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-code-bg/50 backdrop-blur border-editor-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI-Powered Learning</h3>
                      <p className="text-sm text-muted-foreground">Instant code explanations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-code-bg/50 backdrop-blur border-editor-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Smart Debugging</h3>
                      <p className="text-sm text-muted-foreground">AI-guided bug fixes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-code-bg/50 backdrop-blur border-editor-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Real-time Collaboration</h3>
                      <p className="text-sm text-muted-foreground">Code together, anywhere</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                      i === 0 ? 'from-blue-500 to-purple-600' :
                      i === 1 ? 'from-green-500 to-emerald-600' :
                      i === 2 ? 'from-pink-500 to-red-600' :
                      'from-yellow-500 to-orange-600'
                    } border-2 border-background`}></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">10,000+ developers trust CodeAura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 relative z-10">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            <h2 className="text-3xl font-bold">Create your account</h2>
            <p className="text-muted-foreground">
              Start your journey with AI-powered coding
            </p>
          </div>

          {/* Social Signup */}
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
                Or create with email
              </span>
            </div>
          </div>

          {/* Signup Form */}
          <Card className="border-editor-border bg-card/50 backdrop-blur">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-xl">Create account</CardTitle>
              <CardDescription>
                Fill in your details to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handlePasswordChange(e.target.value)}
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
                  
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Password strength:</span>
                        <span className={`text-xs font-medium ${strengthColor}`}>{strengthText}</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`h-1 flex-1 rounded-full ${
                            i < strengthScore ? 'bg-primary' : 'bg-muted'
                          }`}></div>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {Object.entries(passwordStrength).map(([key, met]) => (
                          <div key={key} className="flex items-center space-x-2 text-xs">
                            {met ? (
                              <Check className="w-3 h-3 text-green-500" />
                            ) : (
                              <X className="w-3 h-3 text-muted-foreground" />
                            )}
                            <span className={met ? 'text-green-500' : 'text-muted-foreground'}>
                              {key === 'hasMinLength' && '8+ characters'}
                              {key === 'hasUppercase' && 'Uppercase letter'}
                              {key === 'hasLowercase' && 'Lowercase letter'}
                              {key === 'hasNumber' && 'Number'}
                              {key === 'hasSpecial' && 'Special character'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                    required
                  />
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-red-500">Passwords don't match</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90" 
                  size="lg"
                  disabled={!formData.agreeToTerms || formData.password !== formData.confirmPassword || strengthScore < 3}
                >
                  Create Account
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Login link */}
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;