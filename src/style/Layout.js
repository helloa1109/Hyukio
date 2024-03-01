import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    scroll-behavior: smooth;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-snap-align: center;
`;

export const Wrapper = styled.div`
    width: 50%;
    height: 100vh;
`;

export const Navbar = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin: 40px;
    z-index: 2;
    color: white;
    font-size: 22px;
    font-weight: 600;
    
    & span {
        cursor: pointer;
        margin-left: 60px;
        font-size: 22px;
        font-family: Pretendard;
    }
`;

export const NavMenu = styled.div`
    width: 30vw;
`;