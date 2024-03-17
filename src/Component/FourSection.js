import React, { useRef, useState, useEffect } from 'react';
import { styled } from 'styled-components';
import "../style/FourSection.css";

function FourSection(props) {
    const scrollableWrapperRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (e) => {
        if (scrollableWrapperRef.current) {
            scrollableWrapperRef.current.scrollLeft += e.deltaY;
            setScrollPosition(scrollableWrapperRef.current.scrollLeft);
        }
    };

    useEffect(() => {
        const handleScrollEnd = () => {
            const wrapper = scrollableWrapperRef.current;
            if (wrapper) {
                const scrollThreshold = wrapper.clientWidth / 2;
                if (scrollPosition <= scrollThreshold) {
                    wrapper.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('scroll', handleScrollEnd);

        return () => {
            window.removeEventListener('scroll', handleScrollEnd);
        };
    }, [scrollPosition]);

    return (
        <Container onWheel={handleScroll}>
            {/* <HeaderText>Skill</HeaderText> */}
            <ScrollableWrapper ref={scrollableWrapperRef}>
                <Wrapper className='Slide'>
                    <Card style={{ marginTop: '50px' }}>
                        <CardText>R</CardText>
                        <CardTitle>리액트를 사용</CardTitle>
                        <CardSub>상태관리에 대하여 작성하였습니다.</CardSub>
                    </Card>

                    <Card style={{ marginTop: '30px' }}>
                        <CardText>T</CardText>
                        <CardTitle>타입스크립트를 사용</CardTitle>
                        <CardSub>상태관리에 대하여 작성하였습니다.</CardSub>
                    </Card>

                    <Card style={{ marginTop: '70px' }}>
                        <CardText>S</CardText>
                        <CardTitle>스타일컴포넌트 사용</CardTitle>
                        <CardSub>상태관리에 대하여 작성하였습니다.</CardSub>
                    </Card>

                    <Card style={{ marginTop: '20px' }}>
                        <CardText>S</CardText>
                        <CardTitle>스타일컴포넌트 사용</CardTitle>
                        <CardSub>상태관리에 대하여 작성하였습니다.</CardSub>
                    </Card>
                </Wrapper>
            </ScrollableWrapper>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #090FC1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
`;

const HeaderText = styled.div`
    position: absolute;
    top: 20px;
    left: 20%;
    transform: translateX(-50%);
    font-size: 100px;
    color: white;
    font-family: "Poppins";
`;

const ScrollableWrapper = styled.div`
    width: 100%;
    overflow-x: auto; 
    padding: 20px;
    
    .Slide::-webkit-scrollbar{
        display: none;
    }
`;

const Wrapper = styled.div`
    width: 300vw; 
    display: flex;
    align-items: flex-start;
    flex-direction: row;
`;

const Card = styled.div`
    width: 400px;
    height: 600px;
    border-radius: 34px;
    background-color: white;
    display: flex;
    flex-direction: column; 
    margin-right: 20px; 
`;

const CardText = styled.span`
    font-family: 'Anticva';
    font-size: 140px;
    margin: 20px;
`;

const CardTitle = styled.span`
    font-family: "Poppins", "Pretendard";
    font-size: 34px;
    border: 1px solid red;
    margin: 20px;
`;

const CardSub = styled.span`
    font-family: "Poppins";
    font-size: 20px;
    margin: 20px;
    border: 1px solid red;

`;

export default FourSection;
