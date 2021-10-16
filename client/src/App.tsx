import React, { useState } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import ChatContent from "./component/ChatContent";
import styled from "styled-components";
import socketio from "socket.io-client";

const socket = socketio("http://localhost:5000");

const App = () => {
	const [userName, setUserName] = useState(`Noname${Math.floor(Math.random()*100+1)}`);

  return (
    <Wrapper>
      <Header userName={userName} setUserName={setUserName}/>
      <ChatContent userName={userName}/>
      <Input userName={userName}/>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  width: 500px;
  height: 800px;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;
