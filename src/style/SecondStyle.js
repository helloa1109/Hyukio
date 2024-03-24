import { styled } from "styled-components";

export const SecondContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Object = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: flex 0.7s ease;

  &:hover {
    flex: 1.4;

    @media (min-width: 769px) {
      .HoverImg {
        height: 100vh;
      }

      .FirstText {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 20vh;
    width: 100%;
  

    .FirstText,
    .SecondText {
      display: block;
      margin-left: 0; 
    }

    .HoverImageWrapper {
      height: 100%;
    }

    &:hover {
      @media (min-width: 769px) {
        flex: 0;
      }
    }

    &:not(:hover) {
      @media (min-width: 769px) {
        flex: 0;
      }
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HoverImageWrapper = styled.div`
  height: 80%;
  border: none;
  margin-right: 5px;
  width: 100%;
  transition: width 0.5s ease;
  display: flex;
  
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const HoverImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(10%) blur(1px);
  transition: filter 0.3s ease, transform 0.5s ease;

  ${Object}:hover & {
    filter: brightness(100%) blur(0);
  }

  @media (max-width: 768px) {
    height: 100%;
    filter: brightness(60%) blur(0); 

    ${Object}:hover & {
      filter: brightness(60%) blur(0); 
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 21px;
  margin-left: 40px;
  z-index: 1; 

  @media (max-width: 768px) {
    position: absolute;
    color: white;
    left: 5%;
  }
`;

export const SecondText = styled.div`
  font-size: 16px;
  margin-left: 40px;
  margin-top: 7px;
  width: 80%;


  @media (max-width: 768px) {
    position: absolute;
    top: 40%;
    left: 5%;
  }
`;

export const StyledSecondText = styled(SecondText)`
  color: #ccc;

  .highlighted {
    color: black;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .highlighted {
      color: white;
    }
  }
`;
