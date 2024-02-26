import React from 'react';
import { Container } from '../style/Layout';
import FirstSection from '../Component/FirstSection';
import SecondSection from "../Component/SecondSection";
import ThirdSection from '../Component/ThirdSection';
function LayoutPage(props) {
    return (
        <Container>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
        </Container>
    );
}

export default LayoutPage;