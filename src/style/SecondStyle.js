import { styled } from "styled-components";

export const SecondContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  scroll-snap-align: center;

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

    .HoverImg {
      height: 100vh;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: 15vh;        
    width: 100%;
    .FirstText,
    .SecondText {
      display: none;
    }

    &:hover {
      flex: 0;

    }

    &:not(:hover) {
      flex: 1;
    }
}
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(10%) blur(1px);
  transition: filter 0.3s ease, transform 0.5s ease;

  ${Object}:hover & {
    filter: brightness(100%) blur(0);
  }

  @media (max-width: 768px) {
    height: 100%;
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
`;

export const SecondText = styled.div`
  font-size: 16px;
  margin-left: 40px;
  margin-top: 7px;
  width: 80%;

  &:hover {
    display: none;
  }
`;

export const StyledSecondText = styled(SecondText)`

    color: #ccc;

  .highlighted {
    color: black;
    font-weight: 600;
  }
`;
