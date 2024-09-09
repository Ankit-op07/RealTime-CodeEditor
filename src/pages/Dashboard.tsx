import CodeEditor from "@/components/CodeEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Sidebar from "@/components/Sidebar";
import { socketInstance } from "../socket";
import { useEffect, useRef, useState } from "react";

const Dashboard = () => {
  const socketRef = useRef(null);
  const [isSocketReady, setIsSocketReady] = useState(false); 

  useEffect(() => {
    async function init(){
      socketRef.current = await socketInstance();
      socketRef.current.on("connect", () => {
        console.log(socketRef.current.id);
        setIsSocketReady(true);
      });
    }
    init();
    return ()=>{
      console.log("unmounting")
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    }
  }, []);

  return (
    
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-screen flex "
    >
      <ResizablePanel defaultSize={20} maxSize={30} minSize={15}>
        { socketRef.current && <Sidebar socketRef={socketRef} /> }
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="  h-full w-full">
        { socketRef.current && <CodeEditor socketRef={socketRef} /> }
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Dashboard;
