import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Code2, 
  Plus, 
  Users, 
  Brain, 
  Bug, 
  Target,
  Sparkles,
  Home,
  RotateCcw,
  Play,
  CheckCircle,
  Search,
  Settings,
  LogOut,
  Zap,
  BookOpen,
  Share2,
  Clock,
  Trophy,
  Monitor,
  FileCode,
  Folder,
  Star,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data
  const userData = {
    name: "Alex Developer",
    email: "alex@example.com",
    avatar: "/api/placeholder/40/40",
    streak: 12,
    status: "online"
  };

  const sidebarItems = [
    { name: "My Projects", icon: Home, active: true, path: "/dashboard" },
    { name: "Challenges", icon: Target, active: false, path: "/challenges" },
    { name: "Flashcards", icon: Brain, active: false, path: "/flashcards" },
    { name: "Settings", icon: Settings, active: false, path: "/settings" },
  ];

  const projects = [
    {
      id: 1,
      name: "React Todo App",
      language: "JavaScript",
      framework: "React",
      lastModified: "2 hours ago",
      collaborators: 2
    },
    {
      id: 2,
      name: "Python DSA Solutions", 
      language: "Python",
      framework: "None",
      lastModified: "1 day ago",
      collaborators: 0
    },
    {
      id: 3,
      name: "Java Spring API",
      language: "Java", 
      framework: "Spring",
      lastModified: "3 days ago",
      collaborators: 4
    }
  ];

  const flashcards = [
    { 
      id: 1, 
      title: "Array Methods", 
      topic: "JavaScript Basics",
      difficulty: "Easy"
    },
    { 
      id: 2, 
      title: "Binary Trees", 
      topic: "Data Structures",
      difficulty: "Medium"
    },
    { 
      id: 3, 
      title: "Dynamic Programming", 
      topic: "Algorithms",
      difficulty: "Hard"
    }
  ];

  const todaysChallenge = {
    title: "Two Sum Problem",
    difficulty: "Medium",
    description: "Find two numbers in array that add up to target",
    type: "DSA"
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Fixed Left Sidebar */}
      <div className="w-64 bg-editor-sidebar border-r border-editor-border flex flex-col h-screen fixed">
        {/* Logo */}
        <div className="p-4 border-b border-editor-border">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">CodeAura</span>
          </Link>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-editor-border">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-sm font-medium text-foreground">{userData.name}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Zap className="w-3 h-3 mr-1 text-orange-500" />
                <span>{userData.streak} day streak</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className="w-full justify-start text-foreground"
                size="sm"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Button>
            ))}
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-editor-border">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content Area - Scrollable */}
      <div className="ml-64 flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-editor-panel border-b border-editor-border p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search projects by name..." 
                  className="pl-10 bg-background border-editor-border"
                />
              </div>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Project
            </Button>
          </div>
        </header>

        {/* Scrollable Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Projects Grid - Takes 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4 text-foreground">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project) => (
                    <Card key={project.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base text-foreground">{project.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {project.language}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{project.framework}</span>
                          <span>{project.lastModified}</span>
                          {project.collaborators > 0 && (
                            <div className="flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {project.collaborators}
                            </div>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex space-x-2">
                          <Button size="sm" className="flex-1">
                            <Code2 className="w-4 h-4 mr-1" />
                            Open Editor
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets - Takes 1 column */}
            <div className="space-y-6">
              {/* Flashcards Widget */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center text-foreground">
                    <Brain className="w-4 h-4 mr-2" />
                    Flashcards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {flashcards.slice(0, 3).map((card) => (
                    <div key={card.id} className="p-3 bg-muted/30 rounded-md">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-foreground">{card.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {card.difficulty}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{card.topic}</p>
                    </div>
                  ))}
                  <Button size="sm" variant="outline" className="w-full">
                    <BookOpen className="w-4 h-4 mr-1" />
                    View All
                  </Button>
                </CardContent>
              </Card>

              {/* Today's Challenge Widget */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center text-foreground">
                    <Target className="w-4 h-4 mr-2" />
                    Today's Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground">{todaysChallenge.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{todaysChallenge.description}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {todaysChallenge.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {todaysChallenge.type}
                        </Badge>
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      <Play className="w-4 h-4 mr-1" />
                      Start Challenge
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Streak Info Widget */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center text-foreground">
                    <Trophy className="w-4 h-4 mr-2" />
                    Your Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Coding Streak</span>
                    <div className="flex items-center text-orange-500">
                      <Zap className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{userData.streak} days</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Projects</span>
                    <span className="text-sm font-medium text-foreground">{projects.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Challenges</span>
                    <span className="text-sm font-medium text-foreground">15 completed</span>
                  </div>
                  <div className="text-center pt-2">
                    <p className="text-xs text-muted-foreground">Keep it up! 🚀</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;