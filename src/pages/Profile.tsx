import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowLeft,
  Settings,
  Camera,
  Sparkles,
  Code2,
  Target,
  Star,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Nandani Developer",
    email: "nandani@example.com",
    bio: "Full-stack developer passionate about clean code and AI-powered development tools.",
    defaultLanguage: "JavaScript"
  });

  const stats = {
    projectsCreated: 12,
    flashcardsMastered: 89,
    challengesSolved: 156,
    currentStreak: 15
  };

  const recentActivity = [
    { type: "project", description: "Created Project 'E-commerce App'", time: "2 hours ago" },
    { type: "challenge", description: "Solved Challenge 'Two Sum Problem'", time: "5 hours ago" },
    { type: "flashcard", description: "Mastered React Hooks flashcard set", time: "1 day ago" },
    { type: "project", description: "Updated 'Chat Application' project", time: "2 days ago" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "project": return <Code2 className="w-4 h-4 text-primary" />;
      case "challenge": return <Zap className="w-4 h-4 text-success" />;
      case "flashcard": return <Target className="w-4 h-4 text-ai-accent" />;
      default: return <Star className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CodeAura</span>
          </Link>

          <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"}>
            <Settings className="w-4 h-4 mr-2" />
            {isEditing ? "Save" : "Edit"}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/api/placeholder/80/80" />
                    <AvatarFallback className="text-lg bg-primary/10 text-primary">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="sm" className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full p-0">
                      <Camera className="w-3 h-3" />
                    </Button>
                  )}
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground">{profileData.name}</h1>
                  <p className="text-muted-foreground">{profileData.email}</p>
                  <p className="text-sm text-muted-foreground mt-1">{profileData.bio}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{stats.projectsCreated}</div>
                <div className="text-sm text-muted-foreground">Projects Created</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-ai-accent">{stats.flashcardsMastered}</div>
                <div className="text-sm text-muted-foreground">Flashcards Mastered</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success">{stats.challengesSolved}</div>
                <div className="text-sm text-muted-foreground">Challenges Solved</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-warning flex items-center justify-center gap-1">
                  🔥 {stats.currentStreak}
                </div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Timeline & Settings */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Activity Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Activity Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="text-foreground">Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Default Language</Label>
                  <Select value={profileData.defaultLanguage} disabled={!isEditing}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="JavaScript">JavaScript</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                      <SelectItem value="Java">Java</SelectItem>
                      <SelectItem value="C++">C++</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {isEditing && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-foreground">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        rows={3}
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;