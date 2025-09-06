import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Save, 
  ArrowLeft,
  User,
  Trophy,
  Target,
  Brain,
  Code2,
  Sparkles,
  Calendar,
  MapPin,
  Star,
  Eye,
  EyeOff
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Alex",
    lastName: "Developer",
    email: "alex@example.com",
    bio: "Full-stack developer passionate about clean code and AI-powered development tools.",
    location: "San Francisco, CA",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const stats = {
    challengesCompleted: 89,
    flashcardsReviewed: 1247,
    projectsCreated: 12,
    streak: 15
  };

  const recentActivity = [
    { type: "challenge", description: "Completed Binary Search challenge", time: "2 hours ago", points: 50 },
    { type: "flashcard", description: "Reviewed React Hooks flashcards", time: "5 hours ago", points: 10 },
    { type: "project", description: "Created new Express.js project", time: "1 day ago", points: 20 },
    { type: "achievement", description: "Earned 'Problem Solver' badge", time: "2 days ago", points: 100 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "challenge": return <Target className="w-4 h-4 text-green-500" />;
      case "flashcard": return <Brain className="w-4 h-4 text-blue-500" />;
      case "project": return <Code2 className="w-4 h-4 text-purple-500" />;
      case "achievement": return <Trophy className="w-4 h-4 text-yellow-500" />;
      default: return <Star className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleSave = () => {
    // TODO: Implement save logic when backend is connected
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
    // Reset password fields
    setProfileData(prev => ({
      ...prev,
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    }));
  };

  const canSave = () => {
    if (profileData.newPassword) {
      return profileData.oldPassword && 
             profileData.newPassword === profileData.confirmPassword &&
             profileData.newPassword.length >= 8;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CodeAura</span>
          </Link>

          <div className="flex items-center space-x-3">
            {isEditing ? (
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={!canSave()}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <User className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6 text-center space-y-4">
                  {/* Avatar */}
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage src="/api/placeholder/96/96" />
                    <AvatarFallback className="text-lg">
                      {profileData.firstName[0]}{profileData.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Name */}
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {profileData.firstName} {profileData.lastName}
                    </h2>
                    <p className="text-muted-foreground">{profileData.email}</p>
                  </div>
                  
                  {/* Plan Badge */}
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <Trophy className="w-3 h-3 mr-1" />
                    Pro Plan
                  </Badge>
                  
                  {/* Bio */}
                  <p className="text-sm text-muted-foreground">
                    {profileData.bio}
                  </p>
                  
                  {/* Location & Joined Date */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Joined March 2024</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Your Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">{stats.challengesCompleted}</div>
                      <div className="text-xs text-muted-foreground">Challenges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-500">{stats.flashcardsReviewed}</div>
                      <div className="text-xs text-muted-foreground">Flashcards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-500">{stats.projectsCreated}</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-500">{stats.streak}</div>
                      <div className="text-xs text-muted-foreground">Day Streak</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                        disabled={!isEditing}
                        className="text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                        disabled={!isEditing}
                        className="text-foreground"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                      className="text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      disabled={!isEditing}
                      rows={3}
                      className="text-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profileData.location}
                      onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                      disabled={!isEditing}
                      className="text-foreground"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Password Change */}
              {isEditing && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Change Password</CardTitle>
                    <CardDescription>
                      Leave blank if you don't want to change your password
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="oldPassword">Current Password</Label>
                      <div className="relative">
                        <Input
                          id="oldPassword"
                          type={showOldPassword ? "text" : "password"}
                          value={profileData.oldPassword}
                          onChange={(e) => setProfileData({...profileData, oldPassword: e.target.value})}
                          className="text-foreground pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowOldPassword(!showOldPassword)}
                        >
                          {showOldPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={profileData.newPassword}
                          onChange={(e) => setProfileData({...profileData, newPassword: e.target.value})}
                          className="text-foreground pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={profileData.confirmPassword}
                        onChange={(e) => setProfileData({...profileData, confirmPassword: e.target.value})}
                        className="text-foreground"
                      />
                      {profileData.newPassword && profileData.confirmPassword && 
                       profileData.newPassword !== profileData.confirmPassword && (
                        <p className="text-sm text-destructive">Passwords do not match</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Activity History */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-foreground">Recent Activity</CardTitle>
                  <CardDescription>
                    Your latest achievements and progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/20 border">
                        <div className="flex-shrink-0">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {activity.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <Badge variant="outline" className="text-xs">
                            +{activity.points} XP
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;