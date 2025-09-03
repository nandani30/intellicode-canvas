import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
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
  ChevronLeft,
  Search,
  Filter,
  Share2,
  FolderOpen,
  ExternalLink,
  Flame,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock data
  const userData = {
    name: "Nandani",
    email: "nandani@example.com",
    avatar: "/api/placeholder/40/40",
    streak: 15,
    status: "online"
  };

  const stats = {
    codingStreak: 15,
    hoursThisWeek: 32,
    challengesCompleted: 45,
    challengesTotal: 60,
    flashcardsReviewed: 7,
    flashcardsToday: 10,
    projectsCreated: 8
  };

  const projects = [
    {
      id: "1",
      name: "Todo App",
      language: "javascript",
      framework: "react",
      lastOpened: "2 hours ago",
      files: ["src/App.js", "src/components/TodoList.js", "package.json"]
    },
    {
      id: "2", 
      name: "Binary Search Tree",
      language: "python",
      framework: null,
      lastOpened: "1 day ago",
      files: ["main.py", "tree.py", "test.py"]
    },
    {
      id: "3",
      name: "REST API Server", 
      language: "java",
      framework: "spring",
      lastOpened: "3 days ago",
      files: ["src/main/java/App.java", "pom.xml"]
    }
  ];

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
      id: "1", 
      title: "Array Methods", 
      question: "What does array.map() return?", 
      tags: ["JavaScript", "Arrays"],
      difficulty: "Easy",
      reviewDate: "Today"
    },
    { 
      id: "2", 
      title: "Async/Await", 
      question: "How to handle errors in async/await?", 
      tags: ["JavaScript", "Promises"],
      difficulty: "Medium",
      reviewDate: "Tomorrow"
    },
    { 
      id: "3", 
      title: "Binary Search", 
      question: "What's the time complexity?", 
      tags: ["Algorithms", "Search"],
      difficulty: "Hard",
      reviewDate: "Today"
    },
  ];

  const challenges = [
    { 
      id: "1",
      title: "Implement Array Methods", 
      difficulty: "Easy", 
      completed: false,
      language: "JavaScript",
      type: "coding",
      fromFlashcard: "Array Methods"
    },
    { 
      id: "2",
      title: "Promise Handling Quiz", 
      difficulty: "Medium", 
      completed: false,
      language: "JavaScript",
      type: "quiz",
      fromFlashcard: "Async/Await"
    },
    { 
      id: "3",
      title: "Binary Search Implementation", 
      difficulty: "Hard", 
      completed: true,
      language: "Python",
      type: "coding",
      fromFlashcard: "Binary Search"
    },
    {
      id: "4",
      title: "Tree Traversal",
      difficulty: "Medium",
      completed: false,
      language: "C++",
      type: "coding", 
      fromFlashcard: "Trees"
    }
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
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-card border-r border-border flex flex-col h-screen fixed z-10`}>
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
      <div className={`flex-1 flex flex-col overflow-hidden ${sidebarCollapsed ? 'ml-16' : 'ml-64'} transition-all duration-300`}>
        {/* Top Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Welcome back, {userData.name}! 👋</h1>
              <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 text-orange-400 px-3 py-2 rounded-full">
                <Flame className="w-4 h-4" />
                <span className="text-sm font-medium">{userData.streak} day streak</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>📈 {stats.flashcardsReviewed}/{stats.flashcardsToday} flashcards today</span>
              </div>
              <Link to="/new-project">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content - Scrollable */}
        <main className="flex-1 p-6 space-y-8 overflow-y-auto">
          {/* Quick Stats */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.codingStreak}</p>
                      <p className="text-sm text-muted-foreground">🔥 Day Streak</p>
                    </div>
                    <Flame className="w-8 h-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-blue-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.flashcardsReviewed}</p>
                      <p className="text-sm text-muted-foreground">📈 Flashcards Today</p>
                    </div>
                    <Brain className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{challenges.filter(c => !c.completed).length}</p>
                      <p className="text-sm text-muted-foreground">⏳ Unsolved Challenges</p>
                    </div>
                    <Target className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border-purple-500/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">{stats.projectsCreated}</p>
                      <p className="text-sm text-muted-foreground">📂 Projects Created</p>
                    </div>
                    <FolderOpen className="w-8 h-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Projects Panel */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">My Projects</h2>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search projects..." className="pl-10 w-64" />
                </div>
                <Link to="/new-project">
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-200 hover:border-primary/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          {project.language === "javascript" && "🟨"}
                          {project.language === "python" && "🐍"}
                          {project.language === "java" && "☕"}
                          {project.language === "cpp" && "⚡"}
                        </div>
                        <div>
                          <CardTitle className="text-base text-foreground">{project.name}</CardTitle>
                          <p className="text-xs text-muted-foreground">{project.lastOpened}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="secondary" className="text-xs">{project.language}</Badge>
                      {project.framework && (
                        <Badge variant="outline" className="text-xs">{project.framework}</Badge>
                      )}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      <p className="mb-1">Files preview:</p>
                      <div className="space-y-0.5">
                        {project.files.slice(0, 3).map((file, i) => (
                          <div key={i} className="flex items-center space-x-1">
                            <FileText className="w-3 h-3" />
                            <span>{file}</span>
                          </div>
                        ))}
                        {project.files.length > 3 && (
                          <p className="text-muted-foreground">+{project.files.length - 3} more files</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Open Editor
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Share2 className="w-3 h-3 mr-1" />
                        Share Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Challenges Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Unsolved Challenges Waiting for You</h2>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
                <Button size="sm" variant="outline">
                  View All
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {challenges.filter(c => !c.completed).map(challenge => (
                <Card key={challenge.id} className="group hover:shadow-lg transition-all duration-200 hover:border-primary/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {challenge.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {challenge.type === "coding" ? (
                          <Code2 className="w-4 h-4 text-blue-500" />
                        ) : (
                          <Brain className="w-4 h-4 text-purple-500" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex space-x-2">
                        <Badge 
                          variant={challenge.difficulty === 'Easy' ? 'default' : challenge.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {challenge.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {challenge.language}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3">
                      Generated from: <span className="font-medium">{challenge.fromFlashcard}</span>
                    </p>
                    
                    <Link to={`/challenge/${challenge.id}`}>
                      <Button size="sm" className="w-full">
                        <Play className="w-4 h-4 mr-2" />
                        Attempt Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {challenges.filter(c => !c.completed).length === 0 && (
              <Card className="text-center p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">🎉 You've solved all challenges!</h3>
                <p className="text-muted-foreground mb-4">Review flashcards to unlock more challenges.</p>
                <Button>
                  <Brain className="w-4 h-4 mr-2" />
                  Review Flashcards
                </Button>
              </Card>
            )}
          </section>

          {/* Flashcards Review */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">📖 Flashcards Review</h2>
              <div className="flex items-center space-x-2">
                <div className="text-sm text-muted-foreground">
                  Today's Progress: <span className="font-medium text-foreground">{stats.flashcardsReviewed}/{stats.flashcardsToday} completed</span>
                </div>
                <div className="w-16">
                  <Progress value={(stats.flashcardsReviewed / stats.flashcardsToday) * 100} className="h-2" />
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {flashcards.map((card) => (
                <Card key={card.id} className="min-w-[280px] flex-shrink-0 group hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base text-foreground">{card.title}</CardTitle>
                      <Badge 
                        variant={card.difficulty === 'Easy' ? 'default' : card.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                        className="text-xs"
                      >
                        {card.difficulty}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Review: {card.reviewDate}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/20 p-3 rounded-md text-sm mb-3 border">
                      <p className="text-muted-foreground">{card.question}</p>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {card.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" className="w-full group-hover:bg-primary/90">
                      <Brain className="w-4 h-4 mr-1" />
                      Review Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Streak & Progress Tracker */}
          <section>
            <Card className="bg-gradient-to-r from-primary/5 via-purple-500/5 to-emerald-500/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-foreground">🔥 Streak & Progress</h2>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Flashcards this week: <strong className="text-foreground">30</strong></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Flame className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stats.codingStreak}</p>
                    <p className="text-sm text-muted-foreground">Day Streak</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{stats.flashcardsReviewed}</p>
                    <p className="text-sm text-muted-foreground">Flashcards Today</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{challenges.filter(c => c.completed).length}</p>
                    <p className="text-sm text-muted-foreground">Challenges Solved</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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