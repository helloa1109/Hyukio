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
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    @media (max-width: 1330px) {
        justify-content: space-evenly;
    }
`;

export const BoxWrapper = styled.div`
    display: flex;
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -20%;
    width: 100%;

    span{ 
        font-family: "Poppins";
        font-weight: 600;
        font-style: normal;     
        font-stretch: normal;
        font-size: 60px;
        letter-spacing: 40px;
    }
`;

export const ProjectBox = styled.div`
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 400px;
    border: 1px solid black;
    ${({ color }) => color && `
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
    `}
    backdrop-filter: blur(300px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

    /*
        폰트 설정
    */
    font-family: "Poppins";
    color: white; 
    text-align: center;
    font-size: 40px; 
    font-weight: 600;
    font-style: normal; 
    font-stretch: normal;
    letter-spacing: 0.2px;

    @media (max-width: 768px) {
        width: 50vw;
        height: 50vw;
    }
`;
