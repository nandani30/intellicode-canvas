import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Sparkles, 
  Send, 
  FileText, 
  Users, 
  PenTool,
  MessageSquare,
  Brain,
  Lightbulb,
  CheckCircle,
  X
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface EditorAIAssistantProps {
  isVisible: boolean;
  onClose: () => void;
}

export const EditorAIAssistant = ({ isVisible, onClose }: EditorAIAssistantProps) => {
  const [activeTab, setActiveTab] = useState("chat");
  const [chatMessage, setChatMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm here to help you understand your code, fix bugs, and generate learning materials. What can I assist you with?",
      isUser: false,
      timestamp: new Date()
    }
  ]);

  const [flashcards] = useState([
    {
      id: "1",
      title: "React useState Hook",
      question: "What does useState return?",
      answer: "useState returns an array with two elements: the current state value and a setter function.",
      difficulty: "Easy"
    },
    {
      id: "2", 
      title: "JavaScript Closures",
      question: "What is a closure in JavaScript?",
      answer: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.",
      difficulty: "Medium"
    }
  ]);

  const [collaborators] = useState([
    { id: "1", name: "Sarah Chen", status: "online", cursor: { x: 150, y: 200 } },
    { id: "2", name: "Mike Johnson", status: "away", cursor: null }
  ]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: chatMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setChatMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I can help you with that! Let me analyze your code and provide a detailed explanation.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="w-80 bg-editor-sidebar border-l border-editor-border h-full flex flex-col">
      <div className="p-4 border-b border-editor-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-ai-accent" />
          <span className="font-medium text-foreground">AI Assistant</span>
        </div>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid w-full grid-cols-4 m-2">
          <TabsTrigger value="chat" className="text-xs">
            <MessageSquare className="w-3 h-3" />
          </TabsTrigger>
          <TabsTrigger value="flashcards" className="text-xs">
            <FileText className="w-3 h-3" />
          </TabsTrigger>
          <TabsTrigger value="collab" className="text-xs">
            <Users className="w-3 h-3" />
          </TabsTrigger>
          <TabsTrigger value="whiteboard" className="text-xs">
            <PenTool className="w-3 h-3" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="flex-1 flex flex-col m-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-editor-panel text-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-editor-border">
            <div className="flex gap-2">
              <Input
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask about your code..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button size="sm" onClick={handleSendMessage}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="flashcards" className="flex-1 p-4 m-0">
          <ScrollArea className="h-full">
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground">Generated Flashcards</h3>
                <Button size="sm" variant="outline">
                  <Lightbulb className="w-3 h-3 mr-1" />
                  Generate New
                </Button>
              </div>
              
              {flashcards.map((card) => (
                <Card key={card.id} className="bg-editor-panel border-editor-border">
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm text-foreground">{card.title}</CardTitle>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      card.difficulty === 'Easy' ? 'bg-success/20 text-success' :
                      card.difficulty === 'Medium' ? 'bg-warning/20 text-warning' :
                      'bg-destructive/20 text-destructive'
                    }`}>
                      {card.difficulty}
                    </span>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <p className="text-xs text-muted-foreground mb-2">{card.question}</p>
                    <details className="text-xs">
                      <summary className="cursor-pointer text-ai-accent">Show Answer</summary>
                      <p className="mt-1 text-foreground">{card.answer}</p>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="collab" className="flex-1 p-4 m-0">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-foreground">Collaborators</h3>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                <span className="text-xs text-success">{collaborators.length} online</span>
              </div>
            </div>
            
            <div className="space-y-2">
              {collaborators.map((collaborator) => (
                <div key={collaborator.id} className="flex items-center gap-3 p-2 rounded-lg bg-editor-panel">
                  <div className={`w-2 h-2 rounded-full ${
                    collaborator.status === 'online' ? 'bg-success' : 'bg-muted-foreground'
                  }`} />
                  <span className="text-sm text-foreground">{collaborator.name}</span>
                  <span className="text-xs text-muted-foreground ml-auto">{collaborator.status}</span>
                </div>
              ))}
            </div>
            
            <Button className="w-full" size="sm">
              <Users className="w-3 h-3 mr-1" />
              Invite Collaborator
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="whiteboard" className="flex-1 p-4 m-0">
          <div className="h-full bg-editor-panel border border-editor-border rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <PenTool className="w-8 h-8 text-muted-foreground mx-auto" />
              <p className="text-sm text-muted-foreground">Collaborative Whiteboard</p>
              <Button size="sm">
                Open Whiteboard
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};