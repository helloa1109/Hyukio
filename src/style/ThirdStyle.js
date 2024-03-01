import { styled } from "styled-components"

export const ThirdContainer = styled.div`
    overflow: hidden;
    scroll-behavior: smooth;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-align: center;  
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    @media (max-width: 1330px) {
        justify-content: space-evenly;
    }
`;

export const ProjectBox = styled.div`
    width: 440px;
    height: 440px;
    border-radius: 400px;

    ${({ color }) => color && `
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
    `}

    backdrop-filter: blur(300px);

    @media (max-width: 768px) {
        width: 50vw;
        height: 50vw;
    }
`;