import React from 'react';
import styled from 'styled-components';
import { FaCertificate, FaGraduationCap, FaChartBar, FaDatabase, FaCode } from 'react-icons/fa';

const AboutSection = styled.section`
  background: #f5f7fa;
  padding: 80px 0 40px 0;
  min-height: 60vh;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const Title = styled.h2`
  color: #0a1931;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
const Summary = styled.div`
  color: #4b587c;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;
`;
const Skill = styled.div`
  flex: 1 1 180px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const SkillIcon = styled.div`
  font-size: 2rem;
  color: #0a1931;
`;
const SkillInfo = styled.div``;
const SkillName = styled.div`
  font-weight: 600;
  color: #0a1931;
`;
const SkillBar = styled.div`
  background: #e6ecf8;
  border-radius: 8px;
  height: 8px;
  width: 100%;
  margin-top: 0.3rem;
`;
const SkillProgress = styled.div`
  background: #64ffda;
  height: 8px;
  border-radius: 8px;
  width: ${props => props.percent}%;
`;
const SectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Education = styled.div`
  flex: 1 1 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem;
  margin-bottom: 1rem;
`;
const Certifications = styled.div`
  flex: 1 1 300px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 1.5rem;
  margin-bottom: 1rem;
`;
const CertItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.7rem;
`;

const About = () => (
  <AboutSection id="about">
    <Container>
      <Title>About Me</Title>
      <Summary>
        <p>I'm a passionate Data Analyst student with a strong foundation in statistics, programming, and data visualization. I enjoy uncovering insights from complex datasets and presenting them in a clear, actionable manner.</p>
        <p>My academic journey has equipped me with hands-on experience in Python, R, SQL, and business intelligence tools. I thrive in collaborative environments and am always eager to learn new technologies and analytical methods.</p>
      </Summary>
      <Skills>
        <Skill>
          <SkillIcon><FaChartBar /></SkillIcon>
          <SkillInfo>
            <SkillName>Data Visualization</SkillName>
            <SkillBar><SkillProgress percent={90} /></SkillBar>
          </SkillInfo>
        </Skill>
        <Skill>
          <SkillIcon><FaDatabase /></SkillIcon>
          <SkillInfo>
            <SkillName>Database Management</SkillName>
            <SkillBar><SkillProgress percent={80} /></SkillBar>
          </SkillInfo>
        </Skill>
        <Skill>
          <SkillIcon><FaCode /></SkillIcon>
          <SkillInfo>
            <SkillName>Programming (Python, R, SQL)</SkillName>
            <SkillBar><SkillProgress percent={85} /></SkillBar>
          </SkillInfo>
        </Skill>
      </Skills>
      <SectionRow>
        <Education>
          <h3><FaGraduationCap style={{marginRight: '0.5rem'}} />Education</h3>
          <p><strong>BSC-IT</strong></p>
          <p>Gujarat University, 2021-2024</p>
          <p>Software Development In Bachlore, Main-Subject -  Project Management, Java, Python, Frontend development, Software engineering..... </p>
          <br></br>
          <p><strong>MSC-IT</strong></p>
          <p>GLS University, 2025-2027 - On going</p>
          <p>Data Analytics Specilization....</p>
        </Education>
        <Certifications>
          <h3><FaCertificate style={{marginRight: '0.5rem'}} />Certifications</h3>
          <br></br>
          <CertItem><FaCertificate />Deloitte - Data Analytics Job Simulation</CertItem>
          <CertItem><FaCertificate />Internship Studio - Common Interence Test</CertItem>
        </Certifications>
      </SectionRow>
    </Container>
  </AboutSection>
);

export default About; 