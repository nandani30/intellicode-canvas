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
  ChevronRight,
  Activity,
  Target,
  Award,
  Sparkles,
  Home,
  RotateCcw,
  Shuffle,
  Play,
  CheckCircle,
  Menu,
  X,
  ChevronLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock data
  const userData = {
    name: "Alex Developer",
    email: "alex@example.com",
    avatar: "/api/placeholder/40/40",
    streak: 12,
    status: "online"
  };

  const stats = {
    codingStreak: 12,
    hoursThisWeek: 24,
    challengesCompleted: 38,
    challengesTotal: 50,
    lastProject: "React Todo App"
  };

  const sidebarItems = [
    { name: "Home", icon: Home, active: true },
    { name: "Code Editor", icon: Code2, active: false },
    { name: "Flashcards", icon: Brain, active: false },
    { name: "Challenges", icon: Target, active: false },
    { name: "Revision", icon: RotateCcw, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  const flashcards = [
    { 
      id: 1, 
      title: "Array Methods", 
      code: "arr.map(item => item * 2)", 
      tags: ["JavaScript", "Arrays"],
      difficulty: "Easy"
    },
    { 
      id: 2, 
      title: "Async/Await", 
      code: "const data = await fetch(url)", 
      tags: ["JavaScript", "Promises"],
      difficulty: "Medium"
    },
    { 
      id: 3, 
      title: "Binary Search", 
      code: "while (left <= right) { ... }", 
      tags: ["Algorithms", "Search"],
      difficulty: "Hard"
    },
  ];

  const revisionExercises = [
    { title: "String Reversal", difficulty: "Easy", completed: true },
    { title: "Two Sum Problem", difficulty: "Medium", completed: false },
    { title: "Binary Tree Traversal", difficulty: "Hard", completed: false },
    { title: "Hash Table Implementation", difficulty: "Medium", completed: true },
    { title: "Merge Sort Algorithm", difficulty: "Hard", completed: false },
    { title: "Graph DFS/BFS", difficulty: "Hard", completed: false },
  ];

  const timeline = [
    { 
      action: "Fixed bug in JS sorting function", 
      time: "2 hours ago", 
      icon: Bug,
      type: "fix"
    },
    { 
      action: "Reviewed 10 flashcards", 
      time: "4 hours ago", 
      icon: Brain,
      type: "study"
    },
    { 
      action: "Completed async/await challenge", 
      time: "1 day ago", 
      icon: CheckCircle,
      type: "achievement"
    },
    { 
      action: "Started new React project", 
      time: "2 days ago", 
      icon: Code2,
      type: "project"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-card border-r border-border flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">CodeAura</span>
              </Link>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="ml-auto"
            >
              {sidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full ${sidebarCollapsed ? 'justify-center px-2' : 'justify-start'}`}
                size="sm"
              >
                <item.icon className="w-4 h-4" />
                {!sidebarCollapsed && <span className="ml-2">{item.name}</span>}
              </Button>
            ))}
          </div>
        </nav>

        {/* User Status */}
        <div className="p-4 border-t border-border">
          <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : 'space-x-3'}`}>
            <Avatar className="w-8 h-8">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {!sidebarCollapsed && (
              <div>
                <div className="text-sm font-medium">{userData.name}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  {userData.status}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Welcome back, {userData.name.split(' ')[0]}!</h1>
              <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full">
                <Zap className="w-4 h-4" />
                <span className="text-sm font-medium">{userData.streak} day streak</span>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Quick Action
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content - Scrollable */}
        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          {/* Productivity Snapshot */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Productivity Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.codingStreak}</p>
                      <p className="text-sm text-muted-foreground">Day Streak</p>
                    </div>
                    <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-orange-500" />
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stats.hoursThisWeek}h coded this week
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.challengesCompleted}%</p>
                      <p className="text-sm text-muted-foreground">Challenges</p>
                    </div>
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <Progress value={stats.challengesCompleted} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-2">
                    {Math.round(stats.challengesTotal * stats.challengesCompleted / 100)}/{stats.challengesTotal} completed
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">Last Session</p>
                      <p className="text-lg font-semibold text-muted-foreground">{stats.lastProject}</p>
                    </div>
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Code2 className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Resume Editing
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Flashcards Carousel */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Flashcards</h2>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Plus className="w-4 h-4 mr-1" />
                  Add New
                </Button>
                <Button size="sm" variant="outline">
                  <Shuffle className="w-4 h-4 mr-1" />
                  Shuffle
                </Button>
                <Button size="sm">
                  <Brain className="w-4 h-4 mr-1" />
                  Review 5 Cards
                </Button>
              </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {flashcards.map((card) => (
                <Card key={card.id} className="min-w-[300px] flex-shrink-0">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{card.title}</CardTitle>
                      <Badge variant={card.difficulty === 'Easy' ? 'default' : card.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                        {card.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/30 p-3 rounded-md font-mono text-sm mb-3">
                      {card.code}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {card.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full">
                      <Play className="w-4 h-4 mr-1" />
                      Practice
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Revision Exercises Grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Revision Exercises</h2>
              <Button size="sm" variant="outline">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {revisionExercises.map((exercise, index) => (
                <Card key={index} className={exercise.completed ? 'bg-green-500/5 border-green-500/20' : ''}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-foreground">{exercise.title}</h3>
                      {exercise.completed ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <div className="w-4 h-4 border border-muted-foreground rounded-full" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant={exercise.difficulty === 'Easy' ? 'default' : exercise.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                        {exercise.difficulty}
                      </Badge>
                      {!exercise.completed && (
                        <Button size="sm">
                          Start
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Learning Timeline */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-foreground">Recent Activity</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.type === 'fix' ? 'bg-red-500/10 text-red-500' :
                        item.type === 'study' ? 'bg-blue-500/10 text-blue-500' :
                        item.type === 'achievement' ? 'bg-green-500/10 text-green-500' :
                        'bg-purple-500/10 text-purple-500'
                      }`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-foreground">{item.action}</p>
                        <p className="text-xs text-muted-foreground">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;