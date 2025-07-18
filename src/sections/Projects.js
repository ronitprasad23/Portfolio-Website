import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background: #f5f7fa;
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
const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;
const FilterButton = styled.button`
  background: ${props => (props.active ? '#0a1931' : '#e6ecf8')};
  color: ${props => (props.active ? '#fff' : '#0a1931')};
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #64ffda;
    color: #0a1931;
  }
`;
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 6px 24px rgba(100,255,218,0.10);
    transform: translateY(-6px) scale(1.03);
  }
`;
const CardImage = styled.div`
  background: #e6ecf8;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: #b0b8c1;
`;
const CardContent = styled.div`
  padding: 1.5rem;
`;
const CardTitle = styled.h3`
  color: #0a1931;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
const CardDesc = styled.p`
  color: #4b587c;
  font-size: 1rem;
  margin-bottom: 1rem;
`;
const TechStack = styled.div`
  font-size: 0.95rem;
  color: #112240;
  margin-bottom: 1rem;
`;
const CardLinks = styled.div`
  display: flex;
  gap: 1rem;
  a {
    color: #0a1931;
    font-size: 1.2rem;
    transition: color 0.2s;
    &:hover {
      color: #64ffda;
    }
  }
`;

const categories = ['All', 'Python', 'R', 'Visualization', 'SQL'];

const projects = [
  {
    title: 'Cricket Analysis Dashboard',
    image: '/Cricket_Analysis_Dashboard.jpg', 
    description: 'Interactive dashboard for sales data analysis using Power BI.',
    tech: 'Power BI, DAX, Excel',
    category: 'Visualization',
    demo: '#',
    github: '#',
  },
  {
    title: 'Customer Churn Prediction',
    image: '/Customer_charm.png',
    description: 'Machine learning model to predict customer churn using Python.',
    tech: 'Python, scikit-learn, Pandas',
    category: 'Python',
    demo: '#',
    github: '#',
  },
  {
    title: 'Survey Data Analysis',
    image: '/survey_analysis.png',
    description: 'Statistical analysis of survey data using R.',
    tech: 'R, ggplot2, dplyr',
    category: 'R',
    demo: '#',
    github: '#',
  },
  {
    title: 'SQL Data Pipeline',
    image: '/ETL_pipeline.jpg',
    description: 'Automated ETL pipeline for data warehousing.',
    tech: 'SQL, Python, ETL',
    category: 'SQL',
    demo: '#',
    github: '#',
  },
  {
    title: 'Travel Landing Website',
    image: '/Travel_landing.png',
    description: 'Book your faviourate destination from here....',
    tech: 'HTML,CSS,JAVASCRIPT,PYTHON,BOOTSTRAP',
    category: 'Full-Stack website',
    demo: '#',
    github: '#',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title>Projects</Title>
        <FilterBar>
          {categories.map(cat => (
            <FilterButton key={cat} active={activeCategory === cat} onClick={() => setActiveCategory(cat)}>
              {cat}
            </FilterButton>
          ))}
        </FilterBar>
        <ProjectsGrid>
          {filtered.map((project, idx) => (
            <Card key={idx}>
              <CardImage>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <span role="img" aria-label="Project">📊</span>
                )}
              </CardImage>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDesc>{project.description}</CardDesc>
                <TechStack>{project.tech}</TechStack>
                <CardLinks>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><FaExternalLinkAlt /></a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 