import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Wrapper = styled.div`
    width: 34%;
    height: 70vh;
    color: white;
    border-top-left-radius: 270px;
    border-top-right-radius: 270px;
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 20px 20px;
    z-index: 2;
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