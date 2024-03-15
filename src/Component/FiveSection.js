import React from 'react';
import { styled } from 'styled-components';

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="20"
    height="20"
  >
    <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6s-.7-1.7-1.5-2.2c-1.3-.6.1-.6.1-.6 1.4.1 2.1 1.5 2.1 1.5 1.2 2 3.1 1.5 3.9 1.1.1-.9.5-1.5.9-1.9-3.2-.4-6.6-1.6-6.6-7.2 0-1.6.6-2.9 1.5-3.9a4.2 4.2 0 0 1 .1-3.1s1-3.1 4-3.2c1.2 0 2.5.2 3.7.3.3-.2.8-.4 1.3-.4s1 .1 1.3.4c1.2-.1 2.5-.3 3.7-.3 3 0 3.9 3.1 4 3.2a4.2 4.2 0 0 1 .1 3.1c.9 1 1.5 2.3 1.5 3.9 0 5.6-3.4 6.8-6.7 7.2.5.5 1 1.4 1 2.9v4.2c0 .3.2.7.8.6A12 12 0 0 0 12 0z" />
  </svg>
);

const Footer = (props) => {
  return (
    <Container>
      <FooterContent>
        <FooterText>
          &copy; 2024 Sang Hyuk | Thank You
        </FooterText>
        <MUIIcon as={GitHubIcon} className='icon'/>
      </FooterContent>
    </Container>
  );
};

const Container = styled.div`
  background-color: #212121; 
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const MUIIcon = styled.div`
    border: 10px solid red;
`;

export default Footer;
