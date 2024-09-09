import express from "express";
import { createServer } from "http";
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
let users = [];

app.get("/", (req, res) => {
  return res.send("Hello World");
});

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

io.on("connection", (socket) => {
  console.log("a user connected with id " + socket.id);

  let roomId = ""
  let code = ""

  socket.on("join",({roomId,userName})=>{
    socket.join(roomId);
    users = [...users,{
      userName
    }]
    console.log(userName + " joined room " + roomId)
    console.log(socket.id,roomId)
    socket.to(roomId).emit('userJoined',users);
    console.log("users list",users);
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on("shareCode",({code,roomId})=>{
    console.log("roomId",roomId)
    socket.to(roomId).emit('receiveCode',code);
    console.log("code",code)
  })
});

server.listen(2000, () => {
  console.log("Server running on port 2000");
});
