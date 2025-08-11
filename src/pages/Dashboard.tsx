import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Plus, 
  Clock, 
  Users, 
  Brain, 
  Bug, 
  FileText, 
  Star,
  Zap,
  TrendingUp,
  Calendar,
  Settings,
  LogOut,
  ChevronRight,
  Activity,
  Target,
  Award,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - replace with real data from backend
  const userData = {
    name: "Alex Developer",
    email: "alex@example.com",
    avatar: "/api/placeholder/40/40",
    plan: "Pro",
    joinDate: "March 2024"
  };

  const stats = {
    codeExplanations: 142,
    bugsFixed: 38,
    studyNotes: 67,
    collaborationHours: 24
  };

  const recentProjects = [
    {
      id: 1,
      name: "React Todo App",
      language: "JavaScript",
      lastModified: "2 hours ago",
      collaborators: 2,
      status: "active"
    },
    {
      id: 2,
      name: "Python Data Analysis",
      language: "Python",
      lastModified: "1 day ago",
      collaborators: 1,
      status: "completed"
    },
    {
      id: 3,
      name: "Express API Server",
      language: "Node.js",
      lastModified: "3 days ago",
      collaborators: 3,
      status: "active"
    }
  ];

  const achievements = [
    { name: "First Bug Fix", icon: Bug, unlocked: true },
    { name: "Code Explainer", icon: Brain, unlocked: true },
    { name: "Collaboration Master", icon: Users, unlocked: false },
    { name: "Study Champion", icon: FileText, unlocked: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">CodeAura</span>
            </Link>
            <Badge variant="secondary">{userData.plan}</Badge>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/editor" className="text-muted-foreground hover:text-foreground transition-colors">
              Editor
            </Link>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link to="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
              Learn
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {userData.name.split(' ')[0]}! 👋</h1>
              <p className="text-muted-foreground">Here's what's happening with your coding journey</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link to="/editor">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </Link>
              <Button variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Collaborate
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Code Explanations</p>
                  <p className="text-2xl font-bold">{stats.codeExplanations}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500">+12%</span>
                <span className="text-muted-foreground ml-1">this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Bugs Fixed</p>
                  <p className="text-2xl font-bold">{stats.bugsFixed}</p>
                </div>
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Bug className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Target className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-green-500">+8</span>
                <span className="text-muted-foreground ml-1">this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Study Notes</p>
                  <p className="text-2xl font-bold">{stats.studyNotes}</p>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Activity className="w-4 h-4 text-blue-500 mr-1" />
                <span className="text-blue-500">+15</span>
                <span className="text-muted-foreground ml-1">this week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Collaboration</p>
                  <p className="text-2xl font-bold">{stats.collaborationHours}h</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className="flex items-center mt-4 text-sm">
                <Clock className="w-4 h-4 text-purple-500 mr-1" />
                <span className="text-purple-500">+5h</span>
                <span className="text-muted-foreground ml-1">this week</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Projects */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Projects</CardTitle>
                    <CardDescription>Your latest coding projects and collaborations</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 border border-border/40 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">{project.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{project.language}</span>
                            <span>•</span>
                            <span>{project.lastModified}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{project.collaborators}</span>
                        </div>
                        <Badge variant={project.status === "active" ? "default" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Progress */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/editor">
                  <Button variant="outline" className="w-full justify-start">
                    <Code2 className="w-4 h-4 mr-2" />
                    Open Editor
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Brain className="w-4 h-4 mr-2" />
                  Explain Code
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Bug className="w-4 h-4 mr-2" />
                  Debug Challenge
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Start Collaboration
                </Button>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your coding milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                      achievement.unlocked ? 'bg-muted/50' : 'bg-muted/20 opacity-60'
                    }`}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        achievement.unlocked ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        <achievement.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{achievement.name}</span>
                      {achievement.unlocked && (
                        <Award className="w-4 h-4 text-yellow-500 ml-auto" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your weekly goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Code Explanations</span>
                    <span>8/10</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Bug Fixes</span>
                    <span>5/5</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Study Notes</span>
                    <span>3/7</span>
                  </div>
                  <Progress value={43} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;