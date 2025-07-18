import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const blurIn = keyframes`
  from { opacity: 0; filter: blur(8px); }
  to { opacity: 1; filter: blur(0); }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 25, 49, 0.85);
  color: #fff;
  z-index: 1000;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  backdrop-filter: blur(8px);
  animation: ${blurIn} 0.7s ease;
`;
const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
`;
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;
const LogoImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #64ffda;
  background: #fff;
`;
const LogoText = styled.div`
  font-size: 1.35rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #fff;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
`;
const Menu = styled.ul`
  display: flex;
  gap: 2.2rem;
  list-style: none;
  align-items: center;
  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: rgba(10, 25, 49, 0.97);
    width: 220px;
    padding: 1.5rem 0;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    z-index: 1001;
    border-radius: 0 0 0 18px;
    animation: ${blurIn} 0.5s;
  }
`;
const MenuItem = styled.li`
  font-size: 1.08rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
  padding: 0.2rem 0.5rem;
  &:hover {
    color: #64ffda;
  }
  & .nav-link {
    color: inherit;
    text-decoration: none;
    position: relative;
    padding: 0.2rem 0.5rem;
    transition: color 0.2s;
  }
  & .nav-link::after {
    content: '';
    display: block;
    height: 2.5px;
    width: 0;
    background: #64ffda;
    border-radius: 2px;
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: -2px;
  }
  &:hover .nav-link::after, & .nav-link.active::after {
    width: 100%;
  }
`;
const Hamburger = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 2.2rem;
    cursor: pointer;
    color: #64ffda;
    background: #112240;
    border-radius: 50%;
    padding: 0.3rem 0.5rem;
    box-shadow: 0 2px 8px rgba(100,255,218,0.10);
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: #64ffda;
      color: #0a1931;
    }
  }
`;

const menuLinks = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'experience', label: 'Experience' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <Nav>
      <NavContainer>
        <LogoWrap>
          <LogoImg src="/Self_image.jpg" alt="Ronit Prasad" />
          <LogoText>Ronit Prasad</LogoText>
        </LogoWrap>
        <Hamburger onClick={handleMenuToggle} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </Hamburger>
        <Menu open={menuOpen}>
          {menuLinks.map(link => (
            <MenuItem key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                onClick={handleLinkClick}
                spy={true}
                activeClass="active"
                className="nav-link"
              >
                {link.label}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </NavContainer>
    </Nav>
  );
};

export default Header; 