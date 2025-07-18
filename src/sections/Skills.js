import React from 'react';
import styled from 'styled-components';
import { FaPython, FaRProject, FaDatabase, FaTable, FaChartPie, FaChartLine } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiPowerbi, SiTableau, SiMicrosoftexcel } from 'react-icons/si';

const SkillsSection = styled.section`
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
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;
const SkillCard = styled.div`
  background: #f5f7fa;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 6px 24px rgba(100,255,218,0.10);
  }
`;
const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #0a1931;
  margin-bottom: 1rem;
`;
const SkillName = styled.div`
  font-weight: 600;
  color: #0a1931;
  margin-bottom: 0.5rem;
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

const skills = [
  { name: 'Python', icon: <FaPython />, percent: 90 },
  { name: 'R', icon: <FaRProject />, percent: 80 },
  { name: 'SQL', icon: <SiMicrosoftsqlserver />, percent: 85 },
  { name: 'Excel', icon: <SiMicrosoftexcel />, percent: 88 },
  { name: 'Power BI', icon: <SiPowerbi />, percent: 80 },
  { name: 'Tableau', icon: <SiTableau />, percent: 75 },
  { name: 'Data Visualization', icon: <FaChartPie />, percent: 90 },
  { name: 'Statistical Analysis', icon: <FaChartLine />, percent: 85 },
  { name: 'Database Management', icon: <FaDatabase />, percent: 80 },
  { name: 'Data Tables', icon: <FaTable />, percent: 85 },
];

const Skills = () => (
  <SkillsSection id="skills">
    <Container>
      <Title>Technical Skills</Title>
      <SkillsGrid>
        {skills.map(skill => (
          <SkillCard key={skill.name}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillBar><SkillProgress percent={skill.percent} /></SkillBar>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Container>
  </SkillsSection>
);

export default Skills; 