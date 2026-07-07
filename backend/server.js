import express from "express";
import { createServer } from "http";
import { Server } from "socket.io"; // Fixed typo: 'serevr' -> 'Server'
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();

// 1. Create the HTTP server wrapping the Express app
// Fixed typo: 'craeteServer' -> 'createServer'
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: [ "GET", "POST" ]  // Adjust this for production security
    }
});

const ysocketio = new YSocketIO(io);
ysocketio.initialize();



app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World",
        success: true
    })
})

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Okk",
        success: true
    })
})



httpServer.listen(3000, ()=> {
    console.log("Server is Running on Port 3000")
})



// By using createServer(app), you are feeding Express into the native Node.js server. This allows you to bind both Express (for regular web routes) and Socket.io (for real-time WebSockets) to the exact same port (3000).