import React, { useEffect, useRef, useState } from 'react';
import '../style/FourSection.css';
import gsap from 'gsap';
import { Container, Wrapper } from '../style/FourStyle';

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
      textContent: (3300 < scrollY && scrollY < 3300) ? '안녕하세요.' :
                   (3400 < scrollY && scrollY < 3500) ? '텍스트 작성하는중' :
                   (3500 < scrollY && scrollY < 3500) ? '텍스트를 테스트' :
                   '변경될 텍스트',
      duration: 0.4,
      ease: 'power4.out',
    });
  }, [scrollY]);

  console.log("스크롤 Y", scrollY);

  return (
    <Container className="FourSection">
      <Wrapper className='FourWrapper'>
        <span className={(3000 < scrollY && scrollY < 3300) ? 'show' : 'hide'}>안녕하세요.</span>
        <span className={(3150 < scrollY && scrollY < 3500) ? 'show' : 'hide'}>텍스트 작성하는중</span>
        <span className={(3300 < scrollY && scrollY < 3600) ? 'show' : 'hide'}>텍스트를 테스트</span>
        <span ref={textRef} className={textRef.current.textContent === '변경될 텍스트' ? 'hide' : 'show'}/>
      </Wrapper>
    </Container>
  );
}

export default FourSection;
