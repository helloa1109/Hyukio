import React  from 'react';
import { Grid } from '@mui/material';
import { BoxWrapper, HoveredImage, ProjectBox, TextWrapper, ThirdContainer } from '../style/ThirdStyle';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import DreamStay from "../img/dreamstay.webp";
import GoodSeul from "../img/goodseullogo.webp";
import Wepli from "../img/wplieonlylogo.webp";
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
                <Grid container spacing={1} justifyContent="center" >
                        <ProjectBox color="#FEACBF" className='project-box' onClick={() => handleProjectClick('https://github.com/helloa1109/goodseul')}>
                            <span>GoodSeul</span>
                            <HoveredImage src={GoodSeul} alt='img1' />
                        </ProjectBox>
                        <ProjectBox color="#FEBF5B" className='project-box' onClick={() => handleProjectClick('https://github.com/helloa1109/wepli')}>
                            <span>Wepli</span>
                            <HoveredImage src={Wepli} alt='img2' />
                        </ProjectBox>
                        <ProjectBox color="#A0E57E" className='project-box' onClick={() => handleProjectClick('https://github.com/helloa1109/Dreamstay')}>
                            <span>DreamStay</span>
                            <HoveredImage src={DreamStay} alt='img13' />
                        </ProjectBox>
                </Grid>
            </BoxWrapper>
        </ThirdContainer>
    );
}

export default ThirdSection;
