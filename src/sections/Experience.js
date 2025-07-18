import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaUniversity, FaProjectDiagram } from 'react-icons/fa';

const ExperienceSection = styled.section`
  background: #fff;
  padding: 80px 0 40px 0;
`;
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;
const Title = styled.h2`
  color: #0a1931;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const Timeline = styled.div`
  position: relative;
  margin-left: 1rem;
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #e6ecf8;
    border-radius: 2px;
  }
`;
const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 60px;
`;
const Dot = styled.div`
  position: absolute;
  left: 10px;
  top: 8px;
  width: 20px;
  height: 20px;
  background: #64ffda;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a1931;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;
const Role = styled.h3`
  color: #0a1931;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;
const Company = styled.div`
  color: #112240;
  font-weight: 500;
  margin-bottom: 0.2rem;
`;
const Duration = styled.div`
  color: #4b587c;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
`;
const Achievements = styled.ul`
  color: #4b587c;
  font-size: 1rem;
  margin: 0;
  padding-left: 1.2rem;
`;

const experiences = [
  {
    icon: <FaBriefcase />,
    role: 'Data Analyst Intern',
    company: 'Zidio Internship',
    duration: 'March 2025 - May 2025',
    achievements: [
      'Developed interactive dashboards for client reporting',
      'Automated data cleaning processes using Python',
    ],
  },
  {
    icon: <FaBriefcase />,
    role: 'Virtual AWS Internship',
    company: 'Internship Studio',
    duration: 'May 2025 - August 2025',
    achievements: [
      'Core AWS Services Experience:',
      'Security & Compliance:',
      'Cloud Architecture & Design:',
    ],
  },
  {
    icon: <FaProjectDiagram />,
    role: 'Academic Project: E-commerce Website',
    company: 'Gujarat University',
    duration: 'Dec 2023 - March 2024',
    achievements: [
      'Technical Skills Gained',
      'Proficient in PHP programming with object-oriented design principles',
      'Implemented complex SQL queries for reporting and analytics',
      'RESTful API design and development',
    ],
  },
];

const Experience = () => (
  <ExperienceSection id="experience">
    <Container>
      <Title>Experience</Title>
      <Timeline>
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx}>
            <Dot>{exp.icon}</Dot>
            <Role>{exp.role}</Role>
            <Company>{exp.company}</Company>
            <Duration>{exp.duration}</Duration>
            <Achievements>
              {exp.achievements.map((ach, i) => (
                <li key={i}>{ach}</li>
              ))}
            </Achievements>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  </ExperienceSection>
);

export default Experience; 