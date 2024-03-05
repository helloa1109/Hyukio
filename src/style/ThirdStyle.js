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
    justify-content: space-around;
  }
`;

export const BoxWrapper = styled.div`
    display: flex;

    @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    top: -20%;
    width: 100vw;
    font-style: normal;     
    font-stretch: normal;

    span:first-child{ 
        font-family: "Poppins";
        font-weight: 600;
        font-size: 60px;
        letter-spacing: 30px;
    }
    
    span:nth-child(2){
        font-family: "Poppins";
        letter-spacing: 2px;
        font-size: 24px;
    }

    @media (max-width: 990px) {
    top: 0;
    margin-left: 10px;
  }
`;

export const ProjectBox = styled.div`
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 400px;
    border: 1px solid black;
    ${({ color }) =>
        color &&
        `
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        `}
    backdrop-filter: blur(300px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-family: "Poppins";
    color: white;
    text-align: center;
    font-size: 40px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.2px;
    transition: all 0.3s ease; 
  img {
    opacity: 0;
    transition: opacity 0.3s ease;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 50vw;
    height: 50vw;
  }
`;


export const HoveredImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
