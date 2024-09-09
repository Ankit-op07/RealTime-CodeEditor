import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";



interface user{
  userName:string
  roomId:string
}
const Sidebar = ({socketRef}) => {
  console.log(socketRef.current)
  const [users,setUsers] = useState<user[]>([]);


  useEffect(()=>{
    const data = localStorage.getItem("user")
    console.log(data)
    const userData  = JSON.parse(data);
    
    if(socketRef && socketRef.current){
      socketRef.current.emit("join",userData)

      socketRef.current.on("userJoined",({userName,roomId})=>{
        console.log(userName + "has joined the room with id " + roomId)
      })
    }

  },[])


  return (
    <div className="bg-slate-200 h-full w-full  border-gray-400 border-4">
      <div className="border-b-2 border-b-slate-500">
        <p className="p-4 font-bold text-2xl text-center">Code Sync</p>
      </div>
      <div className="overflow-y-auto  p-3 mb-9 pb-20">
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback >CN</AvatarFallback>
          </Avatar>

          <div className="flex-1 ml-4">
            <h2 className="text-lg font-semibold">Ankit</h2>
            <p className="text-gray-600">online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
