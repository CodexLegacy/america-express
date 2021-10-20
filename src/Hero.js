import React from 'react';
import styled from 'styled-components';
import heroBg from './images/herobg.png';
import heroCenter from './images/Hero-center-img.svg';
import heroRightImg from './images/hero-right-img.png';
import americaExpress from './images/america-express.png';
import emptySectionImg from './images/emptysectionbg.png';
import { deviceSize } from './responsive';
import { useMediaQuery } from 'react-responsive';




const HeroContainer = styled.section`
display: flex;
justify-content: center;
  width: 100%;
  height: 1000px;
  background-image: url(${heroBg});
  background-position: -50px -110px;
  background-repeat: no-repeat;
  color: #fff;
  position: relative;
  z-index: 1;
  height: 100vh;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column;
    height: 900px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${deviceSize.smallMobile}px) {
    padding-left: 50px;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    padding: 0px 50px;
  }
`;

const HeroInfoContainer = styled.div`
  width: 50%;
  margin-right: 15em;
  margin-top: 5.2em;
  line-height: 1.1;
  z-index: -2;

   @media screen and (max-width: ${deviceSize.mobile}px) {
   width: 100%;
   margin-right: 0;
   margin-top: 10px;
   padding: 0 15px;
   padding-left: 25px;
  }

   @media screen and (max-width: ${deviceSize.tablet}px) {
   width: 80%;
   margin-right: 0;
   margin-top: 10px;
   padding: 0;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
   margin-top: 0;
  }

  
  `;

const HeroTitle = styled.h4`
  align-items: center; 
  font-size: 5.5em;
  margin-bottom: 3.5rem;
  font-family: 'Scheherazade New', sans-serif;
  font-weight: 600;
  word-spacing: -10px;

   @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-bottom: 20px;
  }

   @media screen and (max-width: ${deviceSize.tablet}px) {
   margin-bottom: 5px;
   margin-top: 1em;
   font-size: 3.5em;
  }
`;

const HeroTitleExtras = styled.p`
  line-height: 2.5em;
  display: block;
  font-size: .7em;
  width: 400px;
`;

const HeroLeftImg = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  left: 7%;
  /* top: 50%; */
  bottom: 0;
  z-index:2;

  img {
    width: 100%;
    height: 100%;
  }


   @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
    height: 400px;
    left: 0;
    top: 930px;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
  left: 2%;
  top: 60%;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    width: 250px;
    height: 250px;
    top: 65%;
    left: 0;
  }
`;

const HeroCenterImg = styled.div`
  width: 750px;
  height: 350px;
  background-image: url(${heroCenter});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 20%;
  bottom: -150px;
  z-index: 1;

  
   @media screen and (max-width: ${deviceSize.mobile}px) {
     position: relative;
    width: 100%;
    /* height: 200px; */
    left: 0;
    top: 80px;
    /* top: 700px; */
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
  left: 2%;
  top: 60%;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    width: 400px;
    height: 250px;
    padding-left: 60px;
    left: 30%;
    top: 6%;
  }
`;

const HeroCenterImgInfo = styled.div`
  width: 500px;
  font-size: 23px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
  line-height: 2;
  margin: 0 auto;
  margin-right: 1px;

  
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 400px;
    line-height: 1.8;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    width: 300px;
    line-height: 1.4;
  }
  
`;

const HeroCenterImgPara = styled.p`
  margin-bottom: 40px;
  color: #000000;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  font-weight: 400;
  margin-left: 10px;

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    margin-bottom: 20px;
    font-size: 16px;
    padding-right: 20px;
  }
`;

const HeroCenterImgLink = styled.a`
  text-decoration: none;
  background-color: #007992;
  padding: 10px 85px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  z-index: 1;



  &:hover {
    background-color: #0A2B36;
  }

     @media screen and (max-width: ${deviceSize.tablet}px) {
    padding: 10px 50px;
    margin-left: 50px;
  }

   @media screen and (max-width: ${deviceSize.smallMobile}px) {
    margin-left: 15px;
  }
`;

const HeroRightImg = styled.div`
  z-index:-3;
  width: 30%;
  height: 600px;
  background-image: url(${heroRightImg});
  background-size: cover;
  position: right top;
  background-repeat: no-repeat;
  position: absolute;
  right: 0px;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    height: 800px;
    width: 30%;
  }
`;

const EmptySection = styled.section`
  width: 100%;
  height: 300px;
  background-image: url(${emptySectionImg});

    @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-bottom: 50px;
    width: 100%;
  }
`;

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isSmallMobile = useMediaQuery({ maxWidth: deviceSize.smallMobile });


  return (
    <>
    <HeroContainer>
      <HeroInfoContainer>
        <HeroTitle>Who we work with</HeroTitle>
        <HeroTitleExtras>
          An extensive national block Business directory developed by
          the US black Chambers. And now, with the support of American
          Express, the only national certification exclusively for
          Black-owned businesses. ByBlack is designed to provide
        </HeroTitleExtras>
      </HeroInfoContainer>
      <HeroLeftImg>
        <img src={americaExpress} alt="American Express Logo" />
      </HeroLeftImg>
      <HeroCenterImg>
        <HeroCenterImgInfo>
        <HeroCenterImgPara>
          American Express is committed to backing
          the success of Black-owned businesses by
          providing funding, resources, and tools to help you further your growth.
        </HeroCenterImgPara>
        <HeroCenterImgLink>Learn More</HeroCenterImgLink>
        </HeroCenterImgInfo>
        </HeroCenterImg>
        {!isMobile && (<HeroRightImg />)}
      </HeroContainer>
      {!isSmallMobile && (<EmptySection />)}
    </>
  )
}

export default Hero
