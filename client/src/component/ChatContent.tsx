import React, { useState, useEffect, useRef } from "react";
import socketio from "socket.io-client";
import styled from "styled-components";

const socket = socketio("http://localhost:5000");

const ChatContent = () => {
	const [chatList, setChatList] = useState<any>([]);
	const elementScroll = useRef<HTMLDivElement | null>(null)

  useEffect(()=> {		
		if(elementScroll.current)
		elementScroll.current.scrollTop = elementScroll.current.scrollHeight;
  	socket.on("chatting", data => {								
			setChatList([...chatList, data]);
		});
		return(()=>{
			socket.off('chatting')
		})
	})
	
  return (
    <Wrapper ref={elementScroll}>
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

export default ChatContent;

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
