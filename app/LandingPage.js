import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <Container>
      <HeroSection>
        <Overlay />
        <Content>
          <Title>Welcome to InterviewApp</Title>
          <Subtitle>Prepare for your dream job with ease</Subtitle>
        <Link href="/dashboard"> <CTAButton>Get Started</CTAButton></Link> 
        </Content>
      </HeroSection>
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const HeroSection = styled.div`
  width: 100%;
  height: 100%;
  background: url('/path/to/your/background.jpg') no-repeat center center/cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
