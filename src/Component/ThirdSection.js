import React, { useEffect, useRef } from 'react';
import { BoxWrapper, HoveredImage, ProjectBox, TextWrapper, ThirdContainer } from '../style/ThirdStyle';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from "../img/background.jpg";
gsap.registerPlugin(ScrollTrigger);

function ThirdSection(props) {

    const handleProjectClick = (url) => {
        window.open(url, '_blank');
      };

    return (
        <ThirdContainer className='ThirdContainer' id="section3">
            <TextWrapper>
                <span>About Project</span>
                <span>Click the Object!</span>
            </TextWrapper>
            <BoxWrapper>
                <ProjectBox color="#FEACBF" className='project-box' onClick={()=> handleProjectClick('https://github.com/helloa1109/goodseul')}>
                    <span>GoodSeul</span>
                    <HoveredImage src={img1} />
                </ProjectBox>
                <ProjectBox color="#FEBF5B" className='project-box' onClick={()=> handleProjectClick('https://github.com/helloa1109/wepli')}>
                    <span>Wepli</span>
                    <HoveredImage src={img1} />
                </ProjectBox>
                <ProjectBox color="#A0E57E" className='project-box' onClick={()=> handleProjectClick('https://github.com/helloa1109/Dreamstay')}>
                    <span>DreamStay</span>
                    <HoveredImage src={img1} />
                </ProjectBox>
            </BoxWrapper>
        </ThirdContainer>
    );
}

export default ThirdSection;
