import React, { useState, useEffect, useRef } from "react";
import socketio from "socket.io-client";
import styled from "styled-components";

interface Props {
	userName:string
}

interface ChatListType {
	userName:string,
	content:string
}

const socket = socketio("http://localhost:5000");

const ChatContent = ({userName}:Props) => {
	const [chatList, setChatList] = useState<ChatListType[]>([]);
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
        {chatList.map((e: ChatListType, i: number) => {
          return (
            <ChatList key={i} isOwn={userName===e.userName}>
              <User>{e.userName}</User>
              <ChatText isOwn={userName===e.userName}>{e.content}</ChatText>
            </ChatList>
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
`;

const ChatList = styled.li<{isOwn:boolean}>`
	display: flex;
	flex-direction: column;
	align-items: ${props => props.isOwn ?'flex-end' : 'flex-start'};
	margin-bottom: 15px;
	list-style: none;
`

const User = styled.div`
	margin-bottom: 5px;
`

const ChatText = styled.div<{isOwn:boolean}>`
  width: fit-content;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.isOwn ?'#fef01b':'white'};
  border-radius: 10px;

`