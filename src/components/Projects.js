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

const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ProjectCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #60a5fa;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(96, 165, 250, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const ProjectTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectButton = styled.a`
  background: ${props => props.primary ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#60a5fa'};
  border: 1px solid ${props => props.primary ? 'transparent' : '#60a5fa'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(96, 165, 250, 0.3);
  }
`;

const ComingSoonCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 2px dashed rgba(96, 165, 250, 0.3);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: rgba(96, 165, 250, 0.5);
    transform: translateY(-5px);
  }
`;

const ComingSoonIcon = styled.div`
  font-size: 4rem;
  color: #60a5fa;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const ComingSoonTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ComingSoonText = styled.p`
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.6;
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Code Explainer",
      description: "An intelligent application that explains code using AI technology, making complex programming concepts accessible to developers of all levels.",
      tech: ["Python", "AI/ML", "Natural Language Processing"],
      icon: "🤖",
      demo: "https://github.com/Nikhil-tej108/Ai-Powered-Code-Explainer-",
      code: "https://github.com/Nikhil-tej108/Ai-Powered-Code-Explainer-"
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "A comprehensive expense tracking application built with Python, helping users manage their finances efficiently with detailed analytics.",
      tech: ["Python", "Data Analysis", "User Interface"],
      icon: "💰",
      demo: "https://github.com/Nikhil-tej108/Expense-Tracker",
      code: "https://github.com/Nikhil-tej108/Expense-Tracker"
    },
    {
      id: 3,
      title: "Round Robin Scheduling",
      description: "Implementation of the Round Robin CPU scheduling algorithm in Python, demonstrating operating system concepts and algorithm efficiency.",
      tech: ["Python", "Algorithms", "Operating Systems"],
      icon: "⚙️",
      demo: "https://github.com/Nikhil-tej108/Round_robin_scheduling",
      code: "https://github.com/Nikhil-tej108/Round_robin_scheduling"
    },
    {
      id: 4,
      title: "Meme Generator",
      description: "A creative meme generator application built with Kotlin, allowing users to create and customize memes with various templates and text overlays.",
      tech: ["Kotlin", "Android", "UI/UX"],
      icon: "😂",
      demo: "https://github.com/Nikhil-tej108/Meme-generator",
      code: "https://github.com/Nikhil-tej108/Meme-generator"
    },
    {
      id: 5,
      title: "Basic Calculator",
      description: "A clean and functional calculator application built with HTML, CSS, and JavaScript, providing essential mathematical operations.",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "🧮",
      demo: "https://github.com/Nikhil-tej108/Basic---Calculator",
      code: "https://github.com/Nikhil-tej108/Basic---Calculator"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Title>Featured Projects</Title>
      <Subtitle>
        A showcase of my latest work from GitHub, demonstrating my skills in AI, ML, web development, and mobile applications
      </Subtitle>
      
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectImage>
              {project.icon}
            </ProjectImage>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectTech>
              {project.tech.map(tech => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </ProjectTech>
            <ProjectLinks>
              <ProjectButton href={project.demo} target="_blank" primary>
                View Project
              </ProjectButton>
              <ProjectButton href={project.code} target="_blank">
                Source Code
              </ProjectButton>
            </ProjectLinks>
          </ProjectCard>
        ))}
        
        <ComingSoonCard>
          <ComingSoonIcon>🚀</ComingSoonIcon>
          <ComingSoonTitle>More Projects Coming Soon</ComingSoonTitle>
          <ComingSoonText>
            I'm constantly working on new projects and learning new technologies. 
            Stay tuned for more exciting AI & ML projects! Check out my GitHub for the latest updates.
          </ComingSoonText>
        </ComingSoonCard>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;