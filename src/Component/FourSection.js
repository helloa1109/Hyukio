import React from 'react';
import { styled } from 'styled-components';

function FourSection(props) {
    return (
        <Container>
            4
        </Container>
    );
}

const Container = styled.div`
    overflow: hidden;
    scroll-behavior: smooth;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-align: center;  
    width: 100vw;
    height: 100vh;
`;

export default FourSection;