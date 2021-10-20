import React from 'react'
import styled from 'styled-components'
import heroRight from './images/hero-right-img.png';
import checkMoreCenter from './images/checkmorecenter.png';
import { deviceSize } from './responsive';


const CheckMoreContainer = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${heroRight});
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
   background-color: rgba(0,105,119,0.9);
`;

const CheckMoreContent = styled.div`
   width: 60%;
   height: 60%;
   margin: 150px auto;
   padding: 70px 0;
   padding-right: 10px;
   background-image: url(${checkMoreCenter});
   background-repeat: no-repeat;
   background-size: cover;
   position: relative;

    @media screen and (max-width: ${deviceSize.mobile}px) {
     width: 90%;
  }

  
  @media screen and (max-width: ${deviceSize.tablet}px) {
  width: 80%;
  }
  
  @media screen and (max-width: ${deviceSize.smallMobile}px) {
  width: 90%;
  }
`;


const Details = styled.div`
display: flex;
flex-direction: column;
align-items: center;
line-height:1.1;
width: 62%;
justify-content: center;

@media screen and (max-width: ${deviceSize.mobile}px) {
     width: 100%;
     /* align-items: flex-start; */
  }
`;

const Title = styled.h1`
  font-size: 45px;
  font-family: 'Scheherazade New', sans-serif;
  font-weight: bolder;
`;

const SubTitle = styled(Title)`
   text-align: center;
   margin-bottom: 30px;
   
   @media screen and (max-width: ${deviceSize.mobile}px) {
     margin-bottom: 15px;
  }
`;

const Para = styled.p`
font-size: 22px;
 line-height: 1.5;
 text-align: center;
`;

const Button = styled.button`
  position: absolute;
  top: 140px;
  right: 10px;
  padding: 20px 80px;
  font-size: 20px;
  background-color: #007992;
  color: #fff;
  border: none;
  cursor: pointer;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    top: 75%;
    right: 27%;
  }
`;

const CheckMoreSection = () => {
  return (
    <CheckMoreContainer>
      <Overlay>
       <CheckMoreContent>
          <Details>
            <Title>Check out the rest of our</Title>
            <SubTitle> Partner Programs</SubTitle>
            <Para>Explore insights, tips and inspiration to help your business adapt to changing times.</Para>
          <Button>Learn More</Button>
          </Details>
       </CheckMoreContent>
      </Overlay>
    </CheckMoreContainer>
  )
}

export default CheckMoreSection
