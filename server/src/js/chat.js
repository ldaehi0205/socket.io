console.log("1111");

const socket = io();

console.log(socket);

socket.emit("chatting", "form front");
socket.on("chatting", data => {
  console.log(data);
});
