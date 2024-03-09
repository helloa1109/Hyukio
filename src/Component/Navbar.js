import React, { useEffect } from 'react';
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
            <NavbarWrapper>
                <sapn>상혁</sapn>
                <NavMenu>
                    <span data-key='1' onClick={handlePage} className='navBar'>Intro</span>
                    <span data-key='2' onClick={handlePage} className='navBar'>About</span>
                    <span data-key='3' onClick={handlePage} className='navBar'>Project</span>
                    <span data-key='4' onClick={handlePage} className='navBar'>Skill</span>
                </NavMenu>
            </NavbarWrapper>
        </NavbarContainer>
    );
}

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    z-index: 2;
    color: white;
    font-size: 22px;
    font-weight: 400;

    & span {
        cursor: pointer;
        margin-left: 60px;
        font-size: 22px;
        font-family: Pretendard;
    }
`;

const NavbarWrapper = styled.div`
    width: 100vw;
    margin: 50px;
    display: flex;
    justify-content: space-between;
    z-index: 9;
`;

const NavMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30vw;
`;

export default NavbarLayout;