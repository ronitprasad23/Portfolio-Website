import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FooterContainer = styled.footer`
  background: #112240;
  color: #fff;
  padding: 3.5rem 0 1.5rem 0;
  text-align: center;
  position: relative;
  animation: ${fadeIn} 1s;
  border-top: 4px solid #64ffda;
  font-family: 'Montserrat', 'Segoe UI', 'Roboto', Arial, sans-serif;
`;
const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #64ffda;
  background: #fff;
  margin-bottom: 1rem;
  box-shadow: 0 4px 24px rgba(10,25,49,0.10);
`;
const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
  color: #64ffda;
  font-family: 'Montserrat', 'Segoe UI', 'Roboto', Arial, sans-serif;
`;
const SocialLinks = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  a {
    color: #fff;
    font-size: 2.1rem;
    background: rgba(100,255,218,0.10);
    border-radius: 50%;
    padding: 0.5rem 0.7rem;
    transition: background 0.2s, color 0.2s, transform 0.2s;
    box-shadow: 0 2px 8px rgba(100,255,218,0.10);
    &:hover {
      background: #64ffda;
      color: #112240;
      transform: translateY(-3px) scale(1.12);
    }
  }
`;
const Copyright = styled.div`
  font-size: 1.05rem;
  color: #b0b8c1;
  margin-top: 1.2rem;
  letter-spacing: 1px;
  font-family: 'Montserrat', 'Segoe UI', 'Roboto', Arial, sans-serif;
`;
const BackToTop = styled.button`
  position: fixed;
  right: 2.2rem;
  bottom: 2.2rem;
  background: #64ffda;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #112240;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(10,25,49,0.18);
  transition: background 0.2s, color 0.2s, transform 0.2s;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1.2s;
  &:hover {
    background: #112240;
    color: #64ffda;
    transform: translateY(-4px) scale(1.08);
  }
  @media (max-width: 768px) {
    right: 1rem;
    bottom: 1rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Avatar src="/Self_image.jpg" alt="Ronit Prasad" />
    <Name>Ronit Prasad</Name>
    <SocialLinks>
      <a href="https://www.linkedin.com/in/ronit-prasad-aaa0122a2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/ronitprasad23" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href="mailto:ronitprasad127@gmail.com" aria-label="Email"><FaEnvelope /></a>
    </SocialLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} Ronit Prasad. All rights reserved.
    </Copyright>
    <BackToTop onClick={() => scroll.scrollToTop()} aria-label="Back to top">
      <FaArrowUp />
    </BackToTop>
  </FooterContainer>
);

export default Footer; 