const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { exec } = require('child_process');

io.on("connection", (socket) => {
    socket.on("cmd", (cmd) => {
        console.log("Handling request : " + cmd);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                socket.emit("cmd return","wrongcmd");
                return;
            }
            socket.emit("cmd return",stdout);
        });
    })
})
console.log("Server listening on port 3030")
http.listen(3030);