import React, { useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HoverImage, HoverImageWrapper, Object, SecondContainer, StyledSecondText, Text } from '../style/SecondStyle';
import img1 from "../img/meet.jpg";
import img2 from "../img/design.jpg";
import img3 from "../img/challenge.jpg";
import img4 from "../img/trend.jpg";
import img5 from "../img/vision.jpg";
gsap.registerPlugin(ScrollTrigger);

const Project2 = (props) => {
    const projects = useMemo(() => [
        { image: img1, title: 'Communication', description: '다양한 일 경험을 통해 쌓은 커뮤니케이션 방법을 통해 사람들과 소통하는 것을 좋아합니다' },
        { image: img2, title: 'UI/UX', description: '사용자 중심의 디자인과 사용성을 향상시키는 방법을 꾸준히 학습합니다' },
        { image: img3, title: 'Challenge', description: '새로운 일에 도전하는 것을 두려워하지 않습니다' },
        { image: img4, title: 'Trend', description: '끊임없이 변화는 디지털 환경에서 항상 새로운 기술과 디자인 트렌드에 관심을 가집니다' },
        { image: img5, title: 'Vision', description: '가장 기본적인 것에 대해 중요하게 생각합니다. 꾸준함과 성실함을 갖춰 더 나은 사람이 되기위해 나아갑니다' },
    ], []);

    const targetWords = ["사용성", "커뮤니케이션", "소통", "도전", "디자인", "트렌드", "기본", "꾸준", "성실"];

    function extractWord(description, targetWord) {
        const index = description.indexOf(targetWord);
        if (index !== -1) {
            const start = index;
            const end = index + targetWord.length;
            return description.substring(start, end);
        }
        return null;
    }

    const extractedWordsArray = useMemo(() => {
        return targetWords.map(targetWord =>
            projects.map(project => extractWord(project.description, targetWord))
        );
    }, [projects]);

    return (
        <SecondContainer className='ScrollContainer'>
            {projects.map((project, index) => (
                <Object key={index} className='Object'>
                    <HoverImageWrapper>
                        <HoverImage src={project.image} alt='img' className='HoverImg' />
                    </HoverImageWrapper>
                    <Text className='FirstText'>{project.title}</Text>
                    <StyledSecondText className='SecondText'>
                        {project.description.split(' ').map((word, i) => (
                            <span key={i} className={targetWords.some(targetWord => word.includes(targetWord)) ? 'highlighted' : ''}>{word} </span>
                        ))}
                    </StyledSecondText>
                </Object>
            ))}
        </SecondContainer>
    );
};

export default Project2;
