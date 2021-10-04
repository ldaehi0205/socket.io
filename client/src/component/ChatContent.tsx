import React, { useState } from "react";
import socketio from "socket.io-client";
import styled from "styled-components";

// const socket = socketio("http://localhost:5000");

const ChatContent = () => {
  const [chatList, setChatList] = useState({});

  // socket.on("chatting", data => {
  //   // setChatList(data);
  //   console.log(data);
  // });
  return <Wrapper>{/* <ol>
        <li>{chatList}</li>
      </ol> */}</Wrapper>;
};

export default ChatContent;

const Wrapper = styled.div`
  width: calc(100%-10px);
  height: 70%;
  padding: 10px;
  background-color: #9bbbd4;
`;
