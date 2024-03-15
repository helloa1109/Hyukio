import React from 'react';
import { styled } from 'styled-components';

function FourSection(props) {
    return (
        <Container>
            <Card>
                <CardText>R</CardText>
                <CardTitle>리액트를 사용하여 프로젝트</CardTitle>
                <CardSub>상태관리에 대하여 작성하였습니다.</CardSub>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #090FC1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = styled.div`
    width: 500px;
    height: 700px;
    border-radius: 34px;
    background-color: white;
    display: flex;
    flex-direction: column;
    
`;

const CardText =styled.span`
    font-family: 'Anticva';
    font-size: 140px;
    margin: 20px;
`;

const CardTitle =styled.span`
    font-family: "Poppins", "Pretendard";
    font-size: 34px;
    border: 1px solid red;
    margin: 20px;
`;

const CardSub = styled.span`
    font-family: "Poppins";
    font-size: 20px;
    margin-left: 20px;
`;

export default FourSection;