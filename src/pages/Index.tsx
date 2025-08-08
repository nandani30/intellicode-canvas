import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar"; 
import { CodeEditor } from "@/components/CodeEditor";
import { AIPanel } from "@/components/AIPanel";
import { OutputPanel } from "@/components/OutputPanel";
import { Whiteboard } from "@/components/Whiteboard";
import { Footer } from "@/components/Footer";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Index = () => {
  const [sidebarTab, setSidebarTab] = useState("explorer");
  const [aiFeature, setAiFeature] = useState("explain");
  const [outputTab, setOutputTab] = useState("output");
  const [whiteboardVisible, setWhiteboardVisible] = useState(false);

  const handleExplainCode = () => {
    setAiFeature("explain");
  };

  const handleBugFix = () => {
    setAiFeature("debug");
  };

  const handleGenerateNotes = () => {
    setAiFeature("notes");
  };

  const handleQualityAnalysis = () => {
    setAiFeature("quality");
    setOutputTab("problems");
  };

  return (
    <div className="h-screen bg-editor-bg text-foreground flex flex-col overflow-hidden">
      <Header 
        onToggleWhiteboard={() => setWhiteboardVisible(!whiteboardVisible)}
        whiteboardVisible={whiteboardVisible}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="flex-1">
          {/* Sidebar */}
          <ResizablePanel defaultSize={15} minSize={12} maxSize={25}>
            <Sidebar activeTab={sidebarTab} onTabChange={setSidebarTab} />
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* Main Editor Area */}
          <ResizablePanel defaultSize={55} minSize={30}>
            <ResizablePanelGroup direction="vertical">
              {/* Code Editor */}
              <ResizablePanel defaultSize={outputTab === "hidden" ? 100 : 70} minSize={40}>
                <div className="relative h-full">
                  <CodeEditor
                    onExplainCode={handleExplainCode}
                    onBugFix={handleBugFix}
                    onGenerateNotes={handleGenerateNotes}
                    onQualityAnalysis={handleQualityAnalysis}
                  />
                  <Whiteboard isVisible={whiteboardVisible} />
                </div>
              </ResizablePanel>
              
              {outputTab !== "hidden" && (
                <>
                  <ResizableHandle />
                  {/* Output Panel */}
                  <ResizablePanel defaultSize={30} minSize={15} maxSize={60}>
                    <OutputPanel 
                      activeTab={outputTab} 
                      onTabChange={setOutputTab}
                      onClose={() => setOutputTab("hidden")}
                    />
                  </ResizablePanel>
                </>
              )}
            </ResizablePanelGroup>
          </ResizablePanel>
          
          <ResizableHandle />
          
          {/* AI Panel */}
          <ResizablePanel defaultSize={30} minSize={25} maxSize={40}>
            <AIPanel activeFeature={aiFeature} onFeatureChange={setAiFeature} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
