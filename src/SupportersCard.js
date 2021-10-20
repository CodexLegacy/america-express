import React from 'react'
import styled from 'styled-components'
import brandCard from './images/Brand-card.png'

const CardContainer = styled.div`
width: 300px;
height: 300px;
  background-image: url(${brandCard});
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  /* justify-content: center; */
   
  `;

const BrandImg = styled.div`
 width: ${({width}) => width ? width + "px" : "200px"};
 height: ${({ height }) => height ? height + "px" : "170px"};
 margin: 30px auto;
 margin-top: ${({top }) => top ? top + "px" : "30px"};

 img {
  width: 100%;
     height: 100%;
 }
`;



     
   

const BrandInfo = styled.p`
  line-height: 1.3;
  margin-top: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`;


const SupportersCard = (props) => {
  const { id, thumbnailUrl, info, heightSize, widthSize, marginTop } = props;
 

  return (
    <CardContainer>
      
      <BrandImg height={heightSize} width={widthSize} top={marginTop} key={id}>
      <img src={thumbnailUrl} alt="Brand" />
      </BrandImg>
      <BrandInfo>{info}</BrandInfo>
{/*       
      <BrandImg key={id}>
      <img src={thumbnailUrl} alt="Brand" />
      </BrandImg>
      <BrandInfo>{info}</BrandInfo> */}
    </CardContainer>
  )
}

export default SupportersCard
