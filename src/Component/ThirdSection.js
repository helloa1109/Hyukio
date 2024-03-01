import React, { useRef, useEffect } from 'react';
import { BoxWrapper, ProjectBox, TextWrapper, ThirdContainer } from '../style/ThirdStyle';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ThirdSection(props) {
    const BoxRef = useRef(null);
    const TextRef = useRef(null);
    const ContainerRef = useRef(null);

    // useEffect(() => {
    //     // Animation for the text
    //     gsap.fromTo(
    //         TextRef.current,
    //         { opacity: 0, y: 50 },
    //         { opacity: 1, y: 0, duration: 1, ease: 'power1.in', scrollTrigger: {
    //             trigger: ContainerRef.current,
    //             start: 'top 70% center',
    //             end: 'top 40% center',
    //             scrub: 1,
    //             markers: true,
    //         }}
    //     );

    //     gsap.fromTo(
    //         BoxRef.current,
    //         { opacity: 0, x: -100 },
    //         { opacity: 1, x: 0, duration: 1, ease: 'power1.in', scrollTrigger: {
    //             trigger: '.ThirdContainer', 
    //             start: 'top top',
    //             end: 'top 40% center',
    //             scrub: 1,
    //         }}
    //     );
    // }, []);

    return (
        <ThirdContainer ref={ContainerRef} className='ThirdContainer'>
            <TextWrapper ref={TextRef}>
                <span>Tasodkofa</span>
            </TextWrapper>
            <BoxWrapper>
                <ProjectBox color="#FEACBF" className='Back' ref={BoxRef}>
                    GoodSeul
                </ProjectBox>
                <ProjectBox color="#FEBF5B">Wepli</ProjectBox>
                <ProjectBox color="#A0E57E">DreamStay</ProjectBox>
            </BoxWrapper>
        </ThirdContainer>
    );
}

export default ThirdSection;
