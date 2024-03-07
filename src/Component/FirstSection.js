import React, { useEffect, useState } from 'react';
import { Wrapper } from '../style/Layout';
import { Power1, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from 'styled-components';
import "../App.css";
import "../style/FirstSection.css";
import Slide from './Slide';

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {

    const [isAnimationRunning, setIsAnimationRunning] = useState(false);

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

        /*
            애니메이션 종료 후 
            스크롤 가능하게
        */
        tl.to(ti2Span, {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1,
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
        <Container1 className='OneSection'>
            <Wrapper className='one section'>
                <Text>
                    <div className='text__inner'>
                        <span className='ActionText2'>New FrontEnd Developer</span>
                        <div className='ti2 split'>Front End Developer</div>
                    </div>
                </Text>
            </Wrapper>
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

  div {
    font-size: 70px;
    font-family: "Noto Serif", serif;
    font-weight: 500;
  }
`;

const Container1 = styled.div`
    width: 100vw;
    height: 100vh;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default FirstSection;
