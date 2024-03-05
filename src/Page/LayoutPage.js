import React from 'react';
import { Container } from '../style/Layout';
import FirstSection from '../Component/FirstSection';
import SecondSection from "../Component/SecondSection";
import ThirdSection from '../Component/ThirdSection';
import FourSection from '../Component/FourSection';
function LayoutPage(props) {
    return (
        <Container>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourSection/>
        </Container>
    );
}

export default LayoutPage;