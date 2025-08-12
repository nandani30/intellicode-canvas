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
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    lastSession: "React Hooks Challenge"
  };

  const flashcards = [
    { id: 1, title: "Array Methods", snippet: "arr.map()", tag: "JavaScript", difficulty: "Easy" },
    { id: 2, title: "Async/Await", snippet: "async function", tag: "JavaScript", difficulty: "Medium" },
    { id: 3, title: "Binary Search", snippet: "O(log n)", tag: "Algorithms", difficulty: "Medium" },
    { id: 4, title: "CSS Flexbox", snippet: "display: flex", tag: "CSS", difficulty: "Easy" }
  ];

  const revisionExercises = [
    { title: "String Reversal", difficulty: "Easy", completed: true },
    { title: "Two Sum Problem", difficulty: "Medium", completed: false },
    { title: "Valid Parentheses", difficulty: "Easy", completed: true },
    { title: "Merge Sort", difficulty: "Hard", completed: false },
    { title: "Binary Tree Traversal", difficulty: "Medium", completed: false },
    { title: "Fibonacci Sequence", difficulty: "Easy", completed: true }
  ];

  const timeline = [
    { action: "Fixed bug in JS sorting function", time: "2 hours ago", icon: Bug },
    { action: "Reviewed 10 flashcards", time: "4 hours ago", icon: Brain },
    { action: "Completed async/await challenge", time: "1 day ago", icon: Target },
    { action: "Added 5 new study notes", time: "2 days ago", icon: FileText }
  ];

  const sidebarItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Code Editor", icon: Code2, active: false },
    { name: "Flashcards", icon: Brain, active: false },
    { name: "Challenges", icon: Target, active: false },
    { name: "Revision", icon: RotateCcw, active: false },
    { name: "Settings", icon: Settings, active: false }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:w-16`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="lg:hidden text-lg font-semibold">CodeAura</span>
              </Link>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden"
              >
                <X className="w-4 h-4" />
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
                  className="w-full justify-start lg:justify-center lg:px-2"
                  size="sm"
                >
                  <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="ml-2 lg:hidden">{item.name}</span>
                </Button>
              ))}
            </div>
          </nav>

          {/* User Status */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3 lg:justify-center">
              <Avatar className="w-8 h-8">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="lg:hidden">
                <div className="text-sm font-medium">{userData.name}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  {userData.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Top Header */}
        <header className="bg-card border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold">Welcome back, {userData.name.split(' ')[0]}!</h1>
                <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
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

        {/* Dashboard Content */}
        <main className="p-6 space-y-8 overflow-auto">
          {/* Productivity Snapshot */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Productivity Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold">{stats.codingStreak}</p>
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
                      <p className="text-2xl font-bold">{stats.challengesCompleted}%</p>
                      <p className="text-sm text-muted-foreground">Weekly Progress</p>
                    </div>
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <Progress value={stats.challengesCompleted} className="h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Last Session</p>
                      <p className="text-lg font-semibold">{stats.lastSession}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Flashcards Carousel */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Flashcards</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Add New
                </Button>
                <Button variant="outline" size="sm">
                  <Shuffle className="w-4 h-4 mr-1" />
                  Shuffle
                </Button>
                <Button variant="outline" size="sm">
                  Review 5
                </Button>
              </div>
            </div>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {flashcards.map((card) => (
                <Card key={card.id} className="min-w-[280px] cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{card.tag}</Badge>
                      <Badge variant={card.difficulty === 'Easy' ? 'default' : card.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                        {card.difficulty}
                      </Badge>
                    </div>
                    <h3 className="font-medium mb-2">{card.title}</h3>
                    <code className="text-sm bg-muted px-2 py-1 rounded">{card.snippet}</code>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Revision Exercises Grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Revision Exercises</h2>
              <Button variant="outline" size="sm">
                View All
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {revisionExercises.map((exercise, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{exercise.title}</h3>
                      {exercise.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Play className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant={exercise.difficulty === 'Easy' ? 'default' : exercise.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                        {exercise.difficulty}
                      </Badge>
                      <Button variant="outline" size="sm">
                        {exercise.completed ? 'Review' : 'Start'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Learning Timeline */}
          <section>
            <h2 className="text-lg font-semibold mb-4">Learning Timeline</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.action}</p>
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

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;