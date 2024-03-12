import { styled } from "styled-components";

export const ThirdContainer = styled.div`
  scroll-behavior: smooth;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: "Poppins";
  font-style: normal;
  font-stretch: normal;
  transition: all 0.5s ease;

  span:first-child {
    font-weight: 600;
    font-size: 3.75rem; /* 60px */
    letter-spacing: 1.5rem; /* 30px */
  }

  span:nth-child(2) {
    font-size: 1.5rem; /* 24px */
    letter-spacing: 2px;
  }

  @media (max-width: 990px) {
    position: relative;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 400px) {
    span:first-child {
      font-size: 2.5rem; /* 40px */
    }
  }
`;

export const ProjectBox = styled.div`
  position: relative;
  width: 20rem; /* 320px */
  height: 20rem; /* 320px */
  border-radius: 50%; /* 400px */
  border: 1px solid black;

  ${({ color }) =>
    color &&
    `background: radial-gradient(circle, ${color} 0%, transparent 70%);`}
  
  backdrop-filter: blur(300px);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Poppins";
  color: white;
  text-align: center;
  font-size: 2.5rem; /* 40px */
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

  @media (max-width: 990px) {
    width: 13.75rem; /* 220px */
    height: 13.75rem; /* 220px */
  }

  @media (max-width: 400px) {
    width: 10rem; /* 160px */
    height: 10rem; /* 160px */
  }
`;

export const HoveredImage = styled.img`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
