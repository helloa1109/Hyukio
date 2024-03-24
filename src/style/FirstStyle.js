import { styled } from "styled-components"

export const Text = styled.div`
  width: 100%;
  height: 100vh;
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
