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
  Brain, 
  Target,
  Sparkles,
  CheckCircle,
  Search,
  Filter,
  Share2,
  FolderOpen,
  ExternalLink,
  Flame,
  Trophy,
  Star,
  Clock,
  FileText,
  Play
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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
    flashcardsReviewed: 7,
    flashcardsToday: 10,
    challengesSolved: 45,
    challengesTotal: 60,
    projectsCreated: 8
  };

  const projects = [
    {
      id: "1",
      name: "Todo App",
      description: "A full-stack todo application with React and Node.js",
      language: "javascript",
      framework: "react",
      lastOpened: "2 hours ago",
      files: ["src/App.js", "src/components/TodoList.js", "package.json"]
    },
    {
      id: "2", 
      name: "Binary Search Tree",
      description: "Data structure implementation with Python",
      language: "python",
      framework: null,
      lastOpened: "1 day ago",
      files: ["main.py", "tree.py", "test.py"]
    },
    {
      id: "3",
      name: "REST API Server", 
      description: "Express.js backend with authentication",
      language: "javascript",
      framework: "express",
      lastOpened: "3 days ago",
      files: ["server.js", "routes/auth.js", "models/User.js"]
    }
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
      reviewDate: "Today"
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
      fromFlashcard: "Array Methods",
      questions: 1
    },
    { 
      id: "2",
      title: "Promise Handling Quiz", 
      difficulty: "Medium", 
      completed: false,
      language: "JavaScript",
      type: "quiz",
      fromFlashcard: "Async/Await",
      questions: 5
    },
    { 
      id: "3",
      title: "Binary Search Implementation", 
      difficulty: "Hard", 
      completed: true,
      language: "Python",
      type: "coding",
      fromFlashcard: "Binary Search",
      questions: 1
    },
    {
      id: "4",
      title: "Tree Traversal Quiz",
      difficulty: "Medium",
      completed: false,
      language: "C++",
      type: "quiz", 
      fromFlashcard: "Trees",
      questions: 8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CodeAura</span>
            </Link>
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
            <Avatar className="w-8 h-8">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {userData.name}! 👋</h1>
          <p className="text-muted-foreground">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

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
            <h2 className="text-2xl font-semibold text-foreground">My Projects</h2>
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
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
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
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">{project.language}</Badge>
                    {project.framework && (
                      <Badge variant="outline" className="text-xs">{project.framework}</Badge>
                    )}
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p className="mb-1">Files: {project.files.length}</p>
                    <div className="space-y-0.5">
                      {project.files.slice(0, 2).map((file, i) => (
                        <div key={i} className="flex items-center space-x-1">
                          <FileText className="w-3 h-3" />
                          <span>{file}</span>
                        </div>
                      ))}
                      {project.files.length > 2 && (
                        <p className="text-muted-foreground">+{project.files.length - 2} more files</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1" onClick={() => navigate(`/editor/${project.id}`)}>
                      <Code2 className="w-3 h-3 mr-1" />
                      Open Editor
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-3 h-3" />
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
            <h2 className="text-2xl font-semibold text-foreground">Challenges Waiting for You</h2>
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
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-muted-foreground">
                      Generated from: <span className="font-medium text-foreground">{challenge.fromFlashcard}</span>
                    </p>
                    {challenge.type === "quiz" && (
                      <p className="text-xs text-muted-foreground">
                        {challenge.questions} questions
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    size="sm" 
                    className="w-full" 
                    onClick={() => navigate(`/challenge/${challenge.id}`)}
                  >
                    <Play className="w-3 h-3 mr-1" />
                    Attempt Now
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            {challenges.filter(c => !c.completed).length === 0 && (
              <div className="col-span-full text-center py-12">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">🎉 All Challenges Completed!</h3>
                <p className="text-muted-foreground">Review flashcards to unlock more challenges.</p>
              </div>
            )}
          </div>
        </section>

        {/* Flashcards Review Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Today's Flashcard Review</h2>
            <div className="flex items-center space-x-2">
              <div className="text-sm text-muted-foreground">
                Progress: {stats.flashcardsReviewed}/{stats.flashcardsToday}
              </div>
              <Progress 
                value={(stats.flashcardsReviewed / stats.flashcardsToday) * 100} 
                className="w-20"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {flashcards.map(flashcard => (
              <Card key={flashcard.id} className="group hover:shadow-lg transition-all duration-200 hover:border-primary/50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-foreground">{flashcard.title}</h3>
                    <Badge 
                      variant={flashcard.difficulty === 'Easy' ? 'default' : flashcard.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {flashcard.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {flashcard.question}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {flashcard.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Review: {flashcard.reviewDate}
                    </span>
                    <Button size="sm">
                      <Brain className="w-3 h-3 mr-1" />
                      Review Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;