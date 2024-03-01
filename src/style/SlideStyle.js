import { styled } from "styled-components";

export const SlideContainer = styled.div`
    width: 50%;
    height: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
