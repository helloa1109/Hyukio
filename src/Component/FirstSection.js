import React, { useEffect } from 'react';
import { Wrapper } from '../style/Layout';
import { Power1, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { styled } from 'styled-components';
import "../App.css";
import "../style/FirstSection.css";

gsap.registerPlugin(ScrollTrigger);

function FirstSection() {

    useEffect(() => {

        /* 첫번째 영역 */
        document.querySelectorAll('.split').forEach((desc) => {
            let splitText = desc.innerText;
            let splitWrap = splitText.split('').join('</span><span aria-hidden="true">');
            splitWrap = `<span aria-hidden="true">${splitWrap}</span>`;
            desc.innerHTML = splitWrap;
            desc.setAttribute('aria-label', splitText);
        });

        gsap.set('.text__inner .ti2 span', { opacity: 0, xPercent: 0, scale: 5});

        // gsap.set('.ActionText1', { opacity: 0, xPercent: 0 });
        gsap.set('.ActionText2', { opacity: 0, xPercent: 0 });
        // gsap.set('.ActionText3', { opacity: 0, xPercent: 0 });
        
        // gsap.set(".WrapperOne",{opacity: 0});


        const tl = gsap.timeline();

        tl.to('.text__inner .ti2 span', {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 1,
            stagger: 0.1,
            ease: Power1.easeInOut,
        });

        tl.to('.ActionText2', {
            opacity: 1,
            duration: 0.6,
            ease: Power1.easeInOut,
        });

        tl.to('.video-container', { opacity: 1, duration: 0.5, ease: Power1.easeIn }, '+=0.5');
        tl.to('.video', {opacity:1 ,duration: 0.5, ease: Power1.easeIn, width: '100vw', height: '100vh' }, '+=0.5');

        tl.to(".ti2 span", {color: 'white'}, '-=1');

        let panels = gsap.utils.toArray(".one");

        let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: 'top top' }));

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom btoom",
                pin: true,
                pinSpacing: true,
            });
        });

        ScrollTrigger.create({
            snap: {
                snapTo: (progress, self) => {
                    let panelStarts = tops.map(st => st.start),
                        snapScroll = gsap.utils.snap(panelStarts, self.scroll());
                    return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
                },
                duration: 0.5
            }
        });
        
    }, []);

    return (
        <Container1 className='OneSection'>
            <Wrapper className='one section'>
                <Text>
                    <div className='text__inner'>
                        <span className='ActionText2'>New FrontEnd Developer</span>
                        <div className='ti2 split'>프론트엔드 텍스트 추가</div>
                    </div>
                </Text>
            </Wrapper>
             
        </Container1>
    );
}

const Text = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    z-index: 2;
    font-size: 70px;
    font-family: Pretendard-Regular;
  }
`;

const Container1 = styled.div`
    width: 100vw;
    height: 100vh;
    scroll-behavior: smooth;
    scroll-snap-align: center;
    overflow-y: scroll;
`;

export default FirstSection;
