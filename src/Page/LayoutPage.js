import React from 'react';
import { Container } from '../style/Layout';
import FirstSection from '../Component/FirstSection';
import SecondSection from "../Component/SecondSection";
import ThirdSection from '../Component/ThirdSection';
import FiveSection from '../Component/FiveSection';
function LayoutPage(props) {
    return (
        <Container>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FiveSection/>
        </Container>
    );
}

export default LayoutPage;