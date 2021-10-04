import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src="https://cdn.pixabay.com/photo/2016/10/11/21/43/geometric-1732847__340.jpg" />
      </ImgWrapper>
      <Title>채팅창</Title>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(100%-40px);
  height: 100px;
  padding: 0px 20px;
  background-color: rgb(252, 252, 252);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const ImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Title = styled.div``;
