import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Code2, 
  Camera, 
  Save, 
  ArrowLeft,
  Settings,
  User,
  Bell,
  Shield,
  CreditCard,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Sparkles,
  Calendar,
  MapPin,
  Star,
  Trophy,
  Target,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alex Developer",
    email: "alex@example.com",
    bio: "Full-stack developer passionate about clean code and AI-powered development tools.",
    location: "San Francisco, CA",
    website: "https://alexdev.com",
    github: "alexdev",
    twitter: "alexdev",
    linkedin: "alexdev",
    timezone: "PST",
    theme: "dark",
    notifications: {
      email: true,
      push: true,
      collaboration: true,
      achievements: true
    }
  });

  const stats = {
    totalExplanations: 1247,
    bugsFixed: 89,
    studyNotes: 156,
    collaborationHours: 78,
    achievements: 12,
    streak: 15
  };

  const recentActivity = [
    { type: "explanation", description: "Explained React hooks implementation", time: "2 hours ago" },
    { type: "debug", description: "Fixed async/await bug in Node.js", time: "5 hours ago" },
    { type: "collaboration", description: "Paired with @sarah on Express API", time: "1 day ago" },
    { type: "note", description: "Created study notes for algorithms", time: "2 days ago" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "explanation": return <Code2 className="w-4 h-4 text-blue-500" />;
      case "debug": return <Zap className="w-4 h-4 text-red-500" />;
      case "collaboration": return <User className="w-4 h-4 text-purple-500" />;
      case "note": return <Target className="w-4 h-4 text-green-500" />;
      default: return <Star className="w-4 h-4 text-gray-500" />;
    }
  };

  const handleSave = () => {
    // TODO: Implement save logic when backend is connected
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CodeAura</span>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            {isEditing ? (
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)}>
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  {/* Avatar */}
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="/api/placeholder/96/96" />
                      <AvatarFallback className="text-lg">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button 
                        size="sm" 
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0"
                      >
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  {/* Name & Email */}
                  <div>
                    <h2 className="text-2xl font-bold">{profileData.name}</h2>
                    <p className="text-muted-foreground">{profileData.email}</p>
                  </div>
                  
                  {/* Plan Badge */}
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-secondary/10">
                    <Trophy className="w-3 h-3 mr-1" />
                    Pro Plan
                  </Badge>
                  
                  {/* Bio */}
                  <p className="text-sm text-muted-foreground text-center">
                    {profileData.bio}
                  </p>
                  
                  {/* Location & Links */}
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
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-500">{stats.totalExplanations}</div>
                    <div className="text-xs text-muted-foreground">Explanations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{stats.bugsFixed}</div>
                    <div className="text-xs text-muted-foreground">Bugs Fixed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500">{stats.studyNotes}</div>
                    <div className="text-xs text-muted-foreground">Study Notes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-500">{stats.collaborationHours}</div>
                    <div className="text-xs text-muted-foreground">Collab Hours</div>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current Streak</span>
                    <span className="font-semibold">{stats.streak} days</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Achievements</span>
                    <span className="font-semibold">{stats.achievements}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>

              {/* General Tab */}
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your profile details and social links
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        disabled={!isEditing}
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          value={profileData.website}
                          onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="github">GitHub</Label>
                        <Input
                          id="github"
                          value={profileData.github}
                          onChange={(e) => setProfileData({...profileData, github: e.target.value})}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input
                          id="twitter"
                          value={profileData.twitter}
                          onChange={(e) => setProfileData({...profileData, twitter: e.target.value})}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input
                          id="linkedin"
                          value={profileData.linkedin}
                          onChange={(e) => setProfileData({...profileData, linkedin: e.target.value})}
                          disabled={!isEditing}
                          placeholder="username"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                    <CardDescription>
                      Customize your CodeAura experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive email updates about your activity</p>
                        </div>
                        <Switch 
                          checked={profileData.notifications.email}
                          onCheckedChange={(checked) => 
                            setProfileData({
                              ...profileData, 
                              notifications: {...profileData.notifications, email: checked}
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Get notified about collaboration invites</p>
                        </div>
                        <Switch 
                          checked={profileData.notifications.push}
                          onCheckedChange={(checked) => 
                            setProfileData({
                              ...profileData, 
                              notifications: {...profileData.notifications, push: checked}
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Achievement Notifications</Label>
                          <p className="text-sm text-muted-foreground">Celebrate your coding milestones</p>
                        </div>
                        <Switch 
                          checked={profileData.notifications.achievements}
                          onCheckedChange={(checked) => 
                            setProfileData({
                              ...profileData, 
                              notifications: {...profileData.notifications, achievements: checked}
                            })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Theme</Label>
                        <Select value={profileData.theme}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Timezone</Label>
                        <Select value={profileData.timezone}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="PST">Pacific (PST)</SelectItem>
                            <SelectItem value="MST">Mountain (MST)</SelectItem>
                            <SelectItem value="CST">Central (CST)</SelectItem>
                            <SelectItem value="EST">Eastern (EST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Activity Tab */}
              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your coding activity and achievements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                          <div className="flex-shrink-0 mt-0.5">
                            {getActivityIcon(activity.type)}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{activity.description}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Tab */}
              <TabsContent value="billing">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing & Subscription</CardTitle>
                    <CardDescription>
                      Manage your subscription and billing information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">Pro Plan</h3>
                          <p className="text-sm text-muted-foreground">Unlimited features, priority support</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">$19</div>
                          <div className="text-sm text-muted-foreground">/month</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Next billing date</span>
                        <span className="font-medium">April 15, 2024</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Payment method</span>
                        <span className="font-medium">•••• 4242</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button variant="outline">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Update Payment
                      </Button>
                      <Button variant="outline">
                        <Shield className="w-4 h-4 mr-2" />
                        Download Invoice
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;