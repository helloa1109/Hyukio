import React from 'react';
import { Container } from '../style/Layout';
import FirstSection from '../Component/FirstSection';
import SecondSection from "../Component/SecondSection";
function LayoutPage(props) {
    return (
        <Container>
            <FirstSection/>
            <SecondSection/>
        </Container>
    );
}

export default LayoutPage;