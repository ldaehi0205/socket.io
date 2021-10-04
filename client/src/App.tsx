import React, { useEffect } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import ChatContent from "./component/ChatContent";
import styled from "styled-components";
import socketio from "socket.io-client";

const socket = socketio("http://localhost:5000");

const App = () => {
  console.log(socketio, "---");
  return (
    <Wrapper>
      <Header />
      <ChatContent />
      <Input />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 500px;
  height: 800px;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  /* box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
`;
