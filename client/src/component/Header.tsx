import React from "react";
import styled from "styled-components";

interface Props {
	userName:string,
	setUserName: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({userName,setUserName}:Props) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src="https://source.unsplash.com/random" />
      </ImgWrapper>
      <Title type='text' value={userName} onChange={(e)=>{				
				setUserName(e.target.value)
			}}/>
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

const Title = styled.input`
	border:none;

	:focus{
		outline:none;
		border-bottom: 1px solid gray
	}
`;
