import { styled } from "styled-components"

export const Text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
  color: white;

  .splitStar {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .split {
    font-family: 'Anticva';
    letter-spacing: 80px;
    font-size: 140px;
    font-weight: lighter;
  }

  .star {
    font-family: 'Raw';
    font-size: 100px;
  }
`;

export const Container1 = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CircleGroup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: #4568DC;  
  will-change: transform;
/* background: -webkit-linear-gradient(to right, #B06AB3, #4568DC); 
background: linear-gradient(to right, #B06AB3, #4568DC); */
`; 
