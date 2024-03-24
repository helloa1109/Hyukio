import React, { useEffect, useState, useRef } from 'react';
import { Power1, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';
import '../style/FirstSection.css';
import { Container1, Text } from '../style/FirstStyle';

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.split').forEach((desc) => {
      const splitText = desc.innerText;
      const splitWrap = splitText
        .split('')
        .map((char) => `<span aria-hidden="true">${char}</span>`)
        .join('');
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

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <Container1 className='SectionOne'>
      <Text className='StyledText'>
        <div className='text__inner'>
          <span className='ActionText2'>Hi! I'm Sang Hyuk Lee</span>
          <div className='splitStar'>
            <span className='ti2 split'>Front End</span>
            <span className='star' >*</span>
          </div>
        </div>
      </Text>
    </Container1>
  );
}

export default FirstSection;
