const express = require("express"); //require는 node_modules를 보게한다. express를 const express에 저장한다
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);

const socketIO = require("socket.io");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.use(
  express.static(path.join("/Users/leedaehee/Desktop/chat", "client", "public"))
);
//__dirname은 현제 폴더 경로
console.log(__dirname, "===");

io.on("connection", socket => {
  console.log("연결되었습니다");
  socket.on("chatting", data => {
    console.log(data);
    io.emit("chatting", `그래${data}`);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server is runnig${PORT}`);
}); //1번째 인자 포트번호로 시작, 2번째 인자 함수를 실행
