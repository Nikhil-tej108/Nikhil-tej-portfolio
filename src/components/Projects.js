import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProjectsSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  background: transparent;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    border-radius: 2px;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #60a5fa;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #9ca3af;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeaturedProject = styled.div`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(147, 197, 253, 0.03) 100%);
  border: 1px solid rgba(96, 165, 250, 0.15);
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.4s ease;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #60a5fa, #93c5fd, #60a5fa);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    box-shadow: 0 0 20px rgba(96, 165, 250, 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-12px);
    border-color: rgba(96, 165, 250, 0.4);
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(96, 165, 250, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
  text-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
  }
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-weight: 400;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(147, 197, 253, 0.08) 100%);
  border: 1px solid rgba(96, 165, 250, 0.3);
  color: #60a5fa;
  padding: 0.5rem 1rem;
  border-radius: 18px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.25) 0%, rgba(147, 197, 253, 0.15) 100%);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(96, 165, 250, 0.3);
    border-color: rgba(96, 165, 250, 0.5);
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: auto;
`;

const ProjectButton = styled.a`
  background: ${props => props.primary ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#60a5fa'};
  border: 2px solid ${props => props.primary ? 'transparent' : '#60a5fa'};
  padding: 0.7rem 1.3rem;
  border-radius: 12px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(96, 165, 250, 0.4);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  span {
    font-size: 1rem;
  }
`;

const ShowMoreSection = styled.div`
  grid-column: 1 / -1;
  margin: 2rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ShowMoreButton = styled.button`
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(96, 165, 250, 0.4);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(96, 165, 250, 0.6);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    font-size: 1.2rem;
  }
`;

const ComingSoonSection = styled.div`
  grid-column: 1 / -1;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

const ComingSoonCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 2px dashed rgba(96, 165, 250, 0.3);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(20px);
  max-width: 600px;
  width: 100%;
  
  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(96, 165, 250, 0.1);
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1.5rem 1rem;
  }
`;

const ComingSoonIcon = styled.div`
  font-size: 2.5rem;
  color: #60a5fa;
  margin-bottom: 0.8rem;
  opacity: 0.7;
`;

const ComingSoonTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
`;

const ComingSoonText = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 500px;
  margin: 0 auto;
`;

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const [featuredProject] = useState({
    id: 1,
    title: "AI-Powered Code Explainer",
    description: "An intelligent application that explains code using AI technology, making complex programming concepts accessible to developers of all levels. This project demonstrates advanced natural language processing and code analysis capabilities.",
    tech: ["Python", "AI/ML", "Natural Language Processing", "OpenAI API"],
    demo: "https://github.com/Nikhil-tej108/Ai-Powered-Code-Explainer-",
    code: "https://github.com/Nikhil-tej108/Ai-Powered-Code-Explainer-"
  });

  const regularProjects = [
    {
      id: 2,
      title: "Expense Tracker",
      description: "A comprehensive expense tracking application built with Python, helping users manage their finances efficiently with detailed analytics and reporting features.",
      tech: ["Python", "Data Analysis", "User Interface", "SQLite"],
      demo: "https://github.com/Nikhil-tej108/Expense-Tracker",
      code: "https://github.com/Nikhil-tej108/Expense-Tracker"
    },
    {
      id: 3,
      title: "Round Robin Scheduling",
      description: "Implementation of the Round Robin CPU scheduling algorithm in Python, demonstrating operating system concepts and algorithm efficiency.",
      tech: ["Python", "Algorithms", "Operating Systems", "Data Structures"],
      demo: "https://github.com/Nikhil-tej108/Round_robin_scheduling",
      code: "https://github.com/Nikhil-tej108/Round_robin_scheduling"
    },
    {
      id: 4,
      title: "Meme Generator",
      description: "A creative meme generator application built with Kotlin, allowing users to create and customize memes with various templates and text overlays.",
      tech: ["Kotlin", "Android", "UI/UX", "Image Processing"],
      demo: "https://github.com/Nikhil-tej108/Meme-generator",
      code: "https://github.com/Nikhil-tej108/Meme-generator"
    },
    {
      id: 5,
      title: "Basic Calculator",
      description: "A clean and functional calculator application built with HTML, CSS, and JavaScript, providing essential mathematical operations with a modern interface.",
      tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      demo: "https://github.com/Nikhil-tej108/Basic---Calculator",
      code: "https://github.com/Nikhil-tej108/Basic---Calculator"
    }
  ];

  const displayedProjects = showAllProjects ? regularProjects : regularProjects.slice(0, 3);
  const hasMoreProjects = regularProjects.length > 3;

  return (
    <ProjectsSection id="projects">
      <Title>Featured Projects</Title>
      <Subtitle>
        A showcase of my latest work from GitHub, demonstrating my skills in AI, ML, web development, and mobile applications
      </Subtitle>
      
      <ProjectsContainer>
        <FeaturedProject>
          <ProjectTitle>{featuredProject.title}</ProjectTitle>
          <ProjectDescription>{featuredProject.description}</ProjectDescription>
          <ProjectTech>
            {featuredProject.tech.map(tech => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </ProjectTech>
          <ProjectLinks>
            <ProjectButton href={featuredProject.demo} target="_blank" primary>
              <span>🚀</span>
              Live Demo
            </ProjectButton>
            <ProjectButton href={featuredProject.code} target="_blank">
              <span>📁</span>
              Source Code
            </ProjectButton>
          </ProjectLinks>
        </FeaturedProject>
        
        {displayedProjects.map(project => (
          <FeaturedProject key={project.id}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.tech.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </ProjectTech>
            <ProjectLinks>
              <ProjectButton href={project.demo} target="_blank" primary>
                <span>🚀</span>
                View Project
              </ProjectButton>
              <ProjectButton href={project.code} target="_blank">
                <span>📁</span>
                Source Code
              </ProjectButton>
            </ProjectLinks>
          </FeaturedProject>
        ))}
        
        {hasMoreProjects && (
          <ShowMoreSection>
            <ShowMoreButton onClick={() => setShowAllProjects(!showAllProjects)}>
              <span>{showAllProjects ? '👆' : '👇'}</span>
              {showAllProjects ? 'Show Less' : 'Show More Projects'}
            </ShowMoreButton>
          </ShowMoreSection>
        )}
        
        <ComingSoonSection>
          <ComingSoonCard>
            <ComingSoonIcon>🚀</ComingSoonIcon>
            <ComingSoonTitle>More Projects Coming Soon</ComingSoonTitle>
            <ComingSoonText>
              I'm constantly working on new projects and learning new technologies. 
              Stay tuned for more exciting AI & ML projects! Check out my GitHub for the latest updates.
            </ComingSoonText>
          </ComingSoonCard>
        </ComingSoonSection>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;