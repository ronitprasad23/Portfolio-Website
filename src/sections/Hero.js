import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
const HeroContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;
const Headshot = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #e6ecf8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #0a1931;
  box-shadow: 0 4px 24px rgba(10,25,49,0.08);
  margin-bottom: 1rem;
`;
const Name = styled.h1`
  font-size: 2.5rem;
  color: #0a1931;
  margin: 0;
`;
const Title = styled.h2`
  font-size: 1.5rem;
  color: #112240;
  font-weight: 400;
  margin: 0;
`;
const Tagline = styled.p`
  font-size: 1.1rem;
  color: #4b587c;
  max-width: 500px;
  margin: 0 auto 1.5rem auto;
`;
const ResumeButton = styled.a`
  display: inline-block;
  background: #0a1931;
  color: #fff;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #64ffda;
    color: #0a1931;
  }
`;
const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  a {
    color: #0a1931;
    font-size: 2rem;
    transition: color 0.2s;
    &:hover {
      color: #64ffda;
    }
  }
`;

const Hero = () => (
  <HeroSection id="hero">
    <HeroContainer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Headshot>
        <img
          src="/Self_image.jpg"
          alt="Ronit prasad headshot"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
          }}
        />
      </Headshot>
      <Name>Ronit prasad</Name>
      <Title>Data Analyst Student</Title>
      <Tagline>
        Passionate about transforming data into actionable insights. Seeking opportunities to leverage analytical skills and drive data-driven decision making.
      </Tagline>
      <ResumeButton href="/ronit_prasad_cv.pdf" download>Download Resume</ResumeButton>
      <SocialLinks>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="mailto:email@example.com" aria-label="Email"><FaEnvelope /></a>
      </SocialLinks>
    </HeroContainer>
  </HeroSection>
);

export default Hero; 