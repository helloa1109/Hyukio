import React from 'react';
import { styled } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../img/hand.jpg";
import img3 from "../img/post.jpg";

gsap.registerPlugin(ScrollTrigger);

const Project2 = (props) => {
  return (
    <Container className='ScrollContainer'>
      {projects.map((project, index) => (
        <Object key={index}>
          <HoverImageWrapper>
            <HoverImage src={project.image} alt='img' className='HoverImg'/>
          </HoverImageWrapper>
          <Text className='FirstText'>{project.title}</Text>
          <SecondText className='SecondText'>{project.description}</SecondText>
        </Object>
      ))}
    </Container>
  );
};

const projects = [
  { image: img1, title: 'Communication', description: '설명이 들어가요' },
  { image: img3, title: 'UI/UX', description: '설명이 들어가요' },
  { image: img1, title: 'Challenge', description: '설명이 들어가요' },
  { image: img3, title: 'Trend', description: '설명이 들어가요' },
  { image: img1, title: 'Vision', description: '설명이 들어가요' },
];

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  scroll-snap-align: center;
`;

const Object = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: flex 0.7s ease;

  &:hover{
    flex: 1.4;

    /*
      이미지를 크게 보이게 하는 것
    */
    /* .FirstText,
    .SecondText{
      display: none;
    } */

    .HoverImg{
      height: 100vh;
    }
  }
`;

const HoverImageWrapper = styled.div`
  height: 80%;
  border: none;
  margin-right: 5px;
  width: 100%;
  transition: width 0.5s ease;
  display: flex;
`;

const HoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(10%) blur(1px);
  transition: filter 0.3s ease, transform 0.5s ease;

  ${Object}:hover & {
    filter: brightness(100%) blur(0);
  }
`;

const Text = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
  margin-left: 40px;

`;

const SecondText = styled.div`
  font-size: 16px;
  margin-left: 40px;
  margin-top: 12px;

   &:hover{
     display: none;
   }
`;

export default Project2;
