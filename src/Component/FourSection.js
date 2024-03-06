import React, { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import backgroundImg from '../img/action.png';
import '../style/FourSection.css';
import gsap from 'gsap';

function FourSection(props) {
  const [scrollY, setScrollY] = useState(0);
  const textRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.to(textRef.current, {
      textContent: (2800 < scrollY && scrollY < 3300) ? '안녕하세요.' :
                   (3000 < scrollY && scrollY < 3500) ? '텍스트 작성하는중' :
                   (3100 < scrollY && scrollY < 3600) ? '텍스트를 테스트' :
                   '변경될 텍스트',
      duration: 0.4,
      ease: 'power4.out',
    });
  }, [scrollY]);

  console.log("스크롤 Y", scrollY);

  return (
    <Container className="Container1">
      <Wrapper>
        <span className={(2800 < scrollY && scrollY < 3300) ? 'show' : 'hide'}>안녕하세요.</span>
        <span className={(3000 < scrollY && scrollY < 3500) ? 'show' : 'hide'}>텍스트 작성하는중</span>
        <span className={(3100 < scrollY && scrollY < 3600) ? 'show' : 'hide'}>텍스트를 테스트</span>
        <span ref={textRef}>안녕하세요.</span>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  scroll-behavior: smooth;
  width: 100vw;
  height: 200vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;

  span {
    font-family: 'Poppins';
    color: white;
    font-size: 100px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 200px;
  position: sticky;
  top: 0;
  height: 100vh;
`;

export default FourSection;
