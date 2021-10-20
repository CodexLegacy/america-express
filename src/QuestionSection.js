import React, { useState } from 'react'
import styled from 'styled-components'
import { data } from './data';
import QuestionAnswer from './QuestionAnswer';
import questionBg from './images/herobg.png'
import { deviceSize } from './responsive';


const SectionContainer = styled.section`
 width: 100%;
 background-image: url(${questionBg});
 background-size: cover;
 padding:100px 0;
`;


const SectionContent = styled.div`
  width: 70%;
  margin: 10px auto;

  
    @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #fff;
  width: 755px;
  margin: 0 auto;
  margin-bottom:10px;
  font-weight: bold;
  font-size: 2.6rem;
  text-align: center;
  font-family: "Scheherazade New", sans-serif;
  line-height:1.3;
  padding: 10px;

     @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }

   @media screen and (max-width: ${deviceSize.tablet}px) {
    width:  80%;
  }
`;


const DetailsRole = styled.div`
  padding: 10px 15px;
  width: 85%;
  margin: 0 auto;
  background-color: #fff;
   margin-bottom: 20px;
`;


const QuestionSection = () => {

  const [questions, setQuestions] = useState(data);

   
  return (
    <SectionContainer>
      <SectionContent>
        <Title>You may have questions, so we've got answers</Title>
        
          {
            questions.map((items) => {
              return(
              <DetailsRole>
                 <QuestionAnswer key={items.id} {...items} />
              </DetailsRole>
              )})
          }
        
      </SectionContent>
    </SectionContainer>
  )
}

export default QuestionSection
