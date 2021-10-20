import React, { useState } from 'react'
import styled from 'styled-components';



const QuestionRole = styled.div`
 display: flex;
 justify-content:space-between;
 align-items: center;
`;

const Question = styled.h3`
  font-size: 24px;
  font-weight: 500;
  padding: 15px 0;
`;

const ToggleBtn = styled.span`
  font-size: 30px;
  cursor: pointer;
`;

const Answer = styled.p`
  border-top: 1px solid #000;
  padding: 5px 0;
  padding-top: 13px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
`;

const QuestionAnswer = ({ question, answer }) => {
   const [showPara, setShowPara] = useState(false);
  return (
       <>
          <QuestionRole>
        <Question>{question}</Question>
            <ToggleBtn onClick={() => setShowPara(!showPara)}>
              {showPara ? "x" : "+"}
          </ToggleBtn>
          </QuestionRole>
      {showPara &&   <Answer>{answer}</Answer>}
        </>
  )
}

export default QuestionAnswer
