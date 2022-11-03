const express = require("express");
const app = express();
const cors = require("cors");
const routers = require('./routers');
const portSocket = 4000;
const server = require("http").createServer(app);

app.use(cors());
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get("/", () => {
  console.log("localhost:4000");
});

server.listen(portSocket, function () {
  console.log("Server listening on port " + portSocket);
});

let content = []

// tạo kết nối giữa client và server

routers(app);
