import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
import styled from "styled-components";
import usePrevious from "../hooks/usePrevious";

const socket = socketio("http://localhost:5000");

const ChatContent = () => {
  const [chatList, setChatList] = useState<any>([]);
  const PreChatList: any = usePrevious(chatList);

  useEffect(() => {
    console.log(PreChatList, 11, chatList);
    if (PreChatList) {
      console.log(PreChatList.length, chatList.length, ")))");
      if (PreChatList.length + 1 !== chatList.length) return;
    }
    // if (chatList.length === 1 || PreChatList.length !== chatList.length) {
    socket.on("chatting", data => {
      const pushData = [...chatList];
      pushData.push(data);
      console.log(pushData, "---");
      setChatList(pushData);
    });
    // }
    // }
  }, [chatList]);

  return (
    <Wrapper>
      <UlContainer>
        {chatList.map((e: any, i: number) => {
          return (
            <li key={i}>
              <span>{e}</span>
            </li>
          );
        })}
      </UlContainer>
    </Wrapper>
  );
};

export default React.memo(ChatContent);

const Wrapper = styled.div`
  width: calc(100%-10px);
  height: 70%;
  padding: 10px;
  background-color: #9bbbd4;
  overflow: auto;
`;

const UlContainer = styled.ul`
  list-style: none;

  li {
    width: fit-content;
    padding: 10px;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 10px;
  }
`;
