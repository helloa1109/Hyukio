import React, { useEffect, useState, useRef } from 'react';
import { Power1, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from 'styled-components';
import '../App.css';
import "../style/FirstSection.css";

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const circleGroupRef = useRef(null);

  useEffect(() => {
    /* 첫번째 영역 */
    document.querySelectorAll('.split').forEach((desc) => {
      let splitText = desc.innerText;
      let splitWrap = splitText.split('').join('</span><span aria-hidden="true">');
      splitWrap = `<span aria-hidden="true">${splitWrap}</span>`;
      desc.innerHTML = splitWrap;
      desc.setAttribute('aria-label', splitText);
    });

    const ti2Span = document.querySelectorAll('.text__inner .ti2 span');
    const actionText2 = document.querySelector('.ActionText2');

    gsap.set(ti2Span, { opacity: 0, xPercent: 0, scale: 5 });
    gsap.set(actionText2, { opacity: 0, xPercent: 0 });

    const tl = gsap.timeline();

    tl.to(ti2Span, {
      opacity: 1,
      scale: 2,
      x: 0,
      duration: 2,
      stagger: 0.1,
      ease: Power1.easeInOut,
      onStart: () => {
        setIsAnimationRunning(false);
        document.body.style.overflow = 'hidden';
      },
      onComplete: () => {
        setIsAnimationRunning(true);
        document.body.style.overflow = 'auto';
      },
    });

    tl.to(actionText2, {
      opacity: 1,
      duration: 0.6,
      ease: Power1.easeInOut,
    });

    const tlCircleGroup = gsap.timeline({
      scrollTrigger: {
        trigger: circleGroupRef.current,
        start: 'top center', 
        end: '+=100%',
        scrub: true,
        duration: 1,
      },
    });

    tlCircleGroup.fromTo(circleGroupRef.current, { scale: 1 }, { scale: 7 });

    return () => {
      document.body.style.overflow = 'auto';
      tl.kill(); 
      tlCircleGroup.kill();
    };
  }, []);

  return (
    <Container1 className='SectionOne'>
      <Text>
        <div className='text__inner'>
          <span className='ActionText2'>Hi! I'm Sang Hyuk Lee</span>
          <div className='splitStar'>
            <span className='ti2 split'>Front End</span>
            <span className='star' ref={circleGroupRef}>*</span>
          </div>
        </div>
      </Text>
      <CircleGroup ref={circleGroupRef} />
    </Container1>
  );
}

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  color: white;

  .splitStar {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .split {
    font-family: 'Anticva';
    letter-spacing: 80px;
    font-size: 140px;
    font-weight: lighter;
  }

  .star {
    font-family: 'Raw';
    font-size: 100px;
  }
`;

const Container1 = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CircleGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #4568DC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #B06AB3, #4568DC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #B06AB3, #4568DC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`;

export default FirstSection;
