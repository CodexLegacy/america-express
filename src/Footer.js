import React from 'react'
import styled from 'styled-components'
import footerBg from './images/footerbg.png'
import logo from './images/footerlogo.svg';
import brand from './images/thumbnail/brand1.png';
import { deviceSize } from './responsive';



const FooterContainer = styled.footer`
  width: 100%;
  background-image: url(${footerBg});
  background-position: 10px -0px;
  position: absolute;
  text-align: center;
  color: #fff;
  `;

const ContentContainer = styled.div`
   width: 80%;
   margin: 50px auto;
   padding: 50px 80px 60px 40px;
   display: flex;
   border: 1px solid red;
   color: white;
   display: flex;
   justify-content:space-between;

 @media screen and (max-width: ${deviceSize.mobile}px) {
 flex-direction: column-reverse;
 /* width: 90%; */
  }
`;

const TitleContainer = styled.div`
display: flex;
flex-direction: column;

`;

const LogoContainer = styled.div`
  width: 170px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;

const SubTitle = styled.div`
display: flex;
color: #fff;
align-items: center;
font-size: 10px;
margin-left: 25px;


img {
  width: 55px;
  margin-left: 10px;
}

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: 0;
  }
`;

const TitlePara = styled.p``;

const BrandLogo = styled.div`
    width: 50px;
    height: 50px;
`;

const Terms = styled.div`
  font-size: 10px;
  margin-top: 80px;

    @media screen and (max-width: ${deviceSize.mobile}px) {
       margin-top: 40px;
       text-align: start;
  }
`;

const LinkContainer = styled.div`
display: flex;
justify-content: space-between;

  @media screen and (max-width: ${deviceSize.mobile}px) {
 flex-direction: column;
  }
`;

const LinkContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;

     @media screen and (max-width: ${deviceSize.mobile}px) {
       margin-bottom: 40px;
  }
`;

const LinkTitle = styled.h6`
  font-size: 10px;
  margin-bottom: 15px;
  text-align: start;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 15px;
  text-align: start;
  /* line-height: 3; */
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContentContainer>
        <TitleContainer>
          <LogoContainer>
            <img src={logo} alt="LOGO" />
          </LogoContainer>
          <SubTitle>
            <TitlePara>powered by</TitlePara>
            <BrandLogo>
              <img src={brand} alt="" />
            </BrandLogo>
          </SubTitle>
          <Terms>Terms ans conditions * Privacy Policy</Terms>
        </TitleContainer>
        <LinkContainer>
          <LinkContainerContent>
            <LinkTitle>Platform</LinkTitle>
            <Link>Search</Link>
            <Link>List your Business</Link>
            <Link>Certify your Business</Link>
            <Link>Refer a Business</Link>
          </LinkContainerContent>
          <LinkContainerContent>
            <LinkTitle>About</LinkTitle>
            <Link>Benefits</Link>
            <Link>Qualifications</Link>
            <Link>About us</Link>
          </LinkContainerContent>
          <LinkContainerContent>
            <LinkTitle>Help</LinkTitle>
            <Link>Contact us</Link>
            <Link>FAQs</Link>
          </LinkContainerContent>
        </LinkContainer>
      </ContentContainer>
    </FooterContainer>
  )
}

export default Footer
