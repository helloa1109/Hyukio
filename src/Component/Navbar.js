import React from 'react';
import { styled } from 'styled-components';

function NavbarLayout(props) {

    const handlePage = (e) => {
        const key = e.currentTarget.getAttribute('data-key');
        const one = document.querySelector('.OneSection');
        const two = document.querySelector('.ScrollContainer');
        const three = document.querySelector('.ThirdContainer');
        const four = document.querySelector('.FourSection');

        if (key === '1') {
            one.scrollIntoView({ behavior: 'smooth' });
        }

        if (key === '2') {
            two.scrollIntoView({ behavior: 'smooth' });
        }

        if (key === '3') {
            three.scrollIntoView({ behavior: 'smooth' });
        }

        if (key === '4') {
            four.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <NavbarContainer>
            <sapn>상혁</sapn>
            <NavMenu>
                <span data-key='1' onClick={handlePage} className='navBar'>Main</span>
                <span data-key='2' onClick={handlePage} className='navBar'>Project</span>
                <span data-key='3' onClick={handlePage} className='navBar'>Test</span>
                <span data-key='4' onClick={handlePage} className='navBar'>Object</span>
            </NavMenu>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
    margin-top: 50px;
    color: black;
    font-size: 22px;
    font-weight: 400;
    
    
    & span {
        cursor: pointer;
        margin-left: 60px;
        font-size: 22px;
        font-family: Pretendard;
    }
`;

const NavMenu = styled.div`
    width: 30vw;
`;

export default NavbarLayout;