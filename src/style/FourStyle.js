import { styled } from "styled-components";
import backgroundImg from '../img/action.png';

export const Container = styled.div`
  scroll-behavior: smooth;
  width: 100vw;
  height: 200vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;


  span {
    font-family: 'Poppins';
    color: white;
    font-size: 100px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
  }

  @media (max-width: 768px) {
    span{
      font-size: 64px;
    }  

    .FourWrapper{
      margin-left: 40px;
    }
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 200px;
  position: sticky;
  top: 20%;
  height: 100vh;
`;
