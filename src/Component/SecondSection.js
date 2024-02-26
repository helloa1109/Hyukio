import React from 'react';
import { styled } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../img/hand.jpg";
import img3 from "../img/post.jpg";
import { HoverImage, HoverImageWrapper, Object, SecondContainer, SecondText, Text } from '../style/SecondStyle';

gsap.registerPlugin(ScrollTrigger);

const Project2 = (props) => {
    return (
        <SecondContainer className='ScrollContainer'>
            {projects.map((project, index) => (
                <Object key={index}>
                    <HoverImageWrapper>
                        <HoverImage src={project.image} alt='img' className='HoverImg' />
                    </HoverImageWrapper>
                    <Text className='FirstText'>{project.title}</Text>
                    <SecondText className='SecondText'>{project.description}</SecondText>
                </Object>
            ))}
        </SecondContainer>
    );
};

const projects = [
    { image: img1, title: 'Communication', description: '설명이 들어가요' },
    { image: img3, title: 'UI/UX', description: '설명이 들어가요설명이 들어가요' },
    { image: img1, title: 'Challenge', description: '설명이 들어가요설명이 들어가요설명이 들어가요설명이 들어가요' },
    { image: img3, title: 'Trend', description: '설명이 들어가요' },
    { image: img1, title: 'Vision', description: '설명이 들어가요' },
];

export default Project2;
