// Socket instance created to connect to the server
import { io } from "socket.io-client";

export function socketInstance(){
    return io("http://localhost:2000");
}



