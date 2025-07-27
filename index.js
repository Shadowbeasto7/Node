// import http from "http";
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello World\n");
// });
// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// // });

import express from "express";
const server= express();  
 server.use(express.json());
 
server.get("/", (req, res) => {
    res.send("Hello World");
});
server.get("/post", (req, res) => {
    res.send("This is a post request");
});
//post request
server.post("/login", (req, res) => {
    const {username, password} = req.body;
    res.json({
        message: "Post request received",
        user: { username, password }
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});