import React from 'react';
import { ProjectBox, ThirdContainer } from '../style/ThirdStyle';

function ThirdSection(props) {
    return (
        <ThirdContainer>
            <ProjectBox color="#FEACBF"></ProjectBox>
            <ProjectBox color="#FEBF5B"></ProjectBox>
            <ProjectBox color="#A0E57E"></ProjectBox>
        </ThirdContainer>
    );
}

export default ThirdSection;