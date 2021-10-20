import  Axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SupportersCard from './SupportersCard';
import brand1 from './images/thumbnail/brand1.png';
import brand2 from './images/thumbnail/brand2.png';
import brand3 from './images/thumbnail/brand3.png';
import { deviceSize } from './responsive';
// import brand4 from './images/thumbnail/brand4.png';


const SurppotersContainer = styled.section`
  width: 100%;
  background-color:red;
     position: relative;
    height: auto;
  display: flex;
  flex-direction: column;
      -webkit-box-align: center;
    align-items: center;
    background-color: #FFFFFF;
    padding-top: 1em;
    padding-bottom: 5em;
    `;

const SupportersInfo = styled.div`
    width: 700px;
    text-align: center;
    line-height: 1.5;
    
    @media screen and (max-width: ${deviceSize.smallMobile}px) {
    padding: 0 50px;
  }
    `;

const SupportersTitle = styled.h2`
  font-size: 70px;
  margin-bottom: 20px;
  font-family: 'Scheherazade New', sans-serif;
  font-weight: 600;

  
   @media screen and (max-width: ${deviceSize.mobile}px) {
     font-size: 50px;
    padding: 0 30px;
  }
  `;

const SupportersPara = styled.p`
display: flex;
justify-content: center;
text-indent:20px;
font-size: 20px;
line-height: 2;
font-weight: 400;
font-family: 'Poppins', sans-serif;

   @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0 50px;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    
  }
`;

const SupportersBrand = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  flex-wrap: wrap;
  gap: 1.5rem;
  background-color: #FFFDF5;
  margin-bottom: 80px;
  /* padding-top: 10px; */
`;


// const Warning = styled.h2`
//   font-size: 20px;
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   padding: 20px;
//   background-color: #0A2B36;
//   color: #ffffff;
// `;

// const wait = (num) => new Promise((resolve) => setTimeout(resolve, num))

const Supporters = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [brand, setBrand] = useState([]);

  // const isNoBrandYet = !brand || (brand && brand.length === 0);

  // const fetchCard = async () => {
  //    setIsLoading(true);
  //   const response = await Axios.get("http://localhost:8000/cards").catch((err) => {
  //     console.error("Error: ", err);
  //   });

  //   await wait(3000);

  //    if (response) {
  //      setBrand(response.data)
  //    }
     
  //    setIsLoading(false);
  // }

  // useEffect(() => {
  //   fetchCard();
  // }, [])
  return (
    <>
    <SurppotersContainer>
      <SupportersInfo>
        <SupportersTitle>Corporate Supporters</SupportersTitle>
        <SupportersPara>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</SupportersPara>
      </SupportersInfo>
      </SurppotersContainer>
      <SupportersBrand>
        {/* {isNoBrandYet && !isLoading && <Warning>No Brand Yet!</Warning>}
        {isLoading && <Warning>Loading...</Warning>}
        {!isNoBrandYet && !isLoading && brand.map((card, index) => (
          <SupportersCard key={index} {...card} />
         
        )) } */}
        <SupportersCard heightSize="100" widthSize="100" marginTop="65" thumbnailUrl={brand1} info="United States Black Chambers Incorporated" />
        
        <SupportersCard thumbnailUrl={brand2} info="United States Black Chambers Incorporated" />
        
        <SupportersCard thumbnailUrl={brand3} info="United States Black Chambers Incorporated" />
        
         <SupportersCard thumbnailUrl={brand3} info="United States Black Chambers Incorporated" />
      </SupportersBrand>
      </>
  )
}

export default Supporters;
