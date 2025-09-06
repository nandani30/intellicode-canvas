import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  ArrowLeft, 
  Code2, 
  Plus,
  Sparkles,
  FolderPlus,
  FileText,
  Coffee
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Link, useNavigate } from "react-router-dom";

const NewProject = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedFramework, setSelectedFramework] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  const languages = [
    { value: "javascript", label: "JavaScript", icon: "🟨" },
    { value: "python", label: "Python", icon: "🐍" },
    { value: "java", label: "Java", icon: "☕" },
    { value: "cpp", label: "C++", icon: "⚡" }
  ];

  const frameworks = [
    { value: "react", label: "React.js", language: "javascript", icon: "⚛️" },
    { value: "nextjs", label: "Next.js", language: "javascript", icon: "▲" },
    { value: "vue", label: "Vue.js", language: "javascript", icon: "💚" },
    { value: "angular", label: "Angular", language: "javascript", icon: "🅰️" },
    { value: "express", label: "Express.js", language: "javascript", icon: "🚀" },
    { value: "django", label: "Django", language: "python", icon: "🎸" },
    { value: "flask", label: "Flask", language: "python", icon: "🍶" },
    { value: "spring", label: "Spring Boot", language: "java", icon: "🍃" },
  ];

  const getAvailableFrameworks = () => {
    if (!selectedLanguage) return [];
    return frameworks.filter(f => f.language === selectedLanguage);
  };

  const handleCreateProject = async () => {
    if (!projectName.trim() || !selectedLanguage) return;
    
    setIsCreating(true);
    
    // Simulate project creation
    setTimeout(() => {
      const projectId = Math.random().toString(36).substr(2, 9);
      navigate(`/editor/${projectId}`);
    }, 2000);
  };

  const isValid = projectName.trim() && selectedLanguage;

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
            <h1 className="text-lg font-semibold">Create New Project</h1>
          </div>
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CodeAura</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FolderPlus className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Create Your Project</h1>
            <p className="text-muted-foreground">
              Set up a new coding project with your preferred language and framework
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Project Configuration
              </CardTitle>
              <CardDescription>
                Choose your project settings to get started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Project Name */}
              <div className="space-y-2">
                <Label htmlFor="project-name">
                  Project Name *
                </Label>
                <Input
                  id="project-name"
                  placeholder="Enter your project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">
                  This will be the name of your project folder and main identifier
                </p>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <Label htmlFor="project-description">
                  Project Description
                </Label>
                <Textarea
                  id="project-description"
                  placeholder="Describe what your project will do..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  rows={3}
                />
                <p className="text-xs text-muted-foreground">
                  A brief description of your project's purpose and features
                </p>
              </div>

              {/* Language Selection */}
              <div className="space-y-2">
                <Label>Programming Language *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {languages.map(lang => (
                    <Card 
                      key={lang.value}
                      className={`cursor-pointer transition-all hover:border-primary/50 ${
                        selectedLanguage === lang.value ? 'border-primary bg-primary/5' : ''
                      }`}
                      onClick={() => {
                        setSelectedLanguage(lang.value);
                        setSelectedFramework("");
                      }}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="text-2xl mb-2">{lang.icon}</div>
                        <div className="font-medium text-sm">{lang.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Framework Selection (Optional) */}
              {selectedLanguage && getAvailableFrameworks().length > 0 && (
                <div className="space-y-2">
                  <Label>Framework (Optional)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getAvailableFrameworks().map(framework => (
                      <Card 
                        key={framework.value}
                        className={`cursor-pointer transition-all hover:border-primary/50 ${
                          selectedFramework === framework.value ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedFramework(framework.value)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-xl mb-2">{framework.icon}</div>
                          <div className="font-medium text-xs">{framework.label}</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Preview */}
              {projectName && selectedLanguage && (
                <div className="p-4 bg-muted/20 rounded-lg border">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Project Preview
                  </h4>
                  <div className="text-sm space-y-1">
                    <div>
                      <span className="text-muted-foreground">Name:</span> {projectName}
                    </div>
                    {projectDescription && (
                      <div>
                        <span className="text-muted-foreground">Description:</span> {projectDescription}
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">Language:</span> {
                        languages.find(l => l.value === selectedLanguage)?.label
                      }
                    </div>
                    {selectedFramework && (
                      <div>
                        <span className="text-muted-foreground">Framework:</span> {
                          frameworks.find(f => f.value === selectedFramework)?.label
                        }
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Create Button */}
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate('/dashboard')}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1"
                  onClick={handleCreateProject}
                  disabled={!isValid || isCreating}
                >
                  {isCreating ? (
                    <>
                      <div className="w-4 h-4 animate-spin rounded-full border-2 border-current border-t-transparent mr-2" />
                      Creating Project...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Project
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewProject;