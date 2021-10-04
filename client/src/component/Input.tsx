import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
import styled from "styled-components";

const socket = socketio("http://localhost:5000");
const Input = () => {
  const [inputVal, setInputVal] = useState("");

  const SendMsgToButton = () => {
    socket.emit("chatting", `${inputVal}`);
    setInputVal("");
  };

  const SendMsgToKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key == "Enter") {
      SendMsgToButton();
      e.preventDefault();
      return;
    }
  };

  return (
    <Wrapper>
      <textarea
        onChange={e => {
          setInputVal(e.target.value);
        }}
        onKeyDown={e => SendMsgToKey(e)}
        value={inputVal}
      />
      <Button inputVal={inputVal.length > 0} onClick={SendMsgToButton}>
        전송
      </Button>
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100%-10px);
  height: 100px;
  padding: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  textarea {
    width: 360px;
    height: 94%;
    outline: none;
    border: none;
    resize: none;
    font-size: 14px;
  }
`;

const Button = styled.button<{ inputVal: boolean }>`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  font-size: 16px;
  background-color: ${props => (props.inputVal ? "#f7e600" : "#e0e0e0")};
  color: ${props => (props.inputVal ? "black" : "rgb(200,200,200)")};
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;
