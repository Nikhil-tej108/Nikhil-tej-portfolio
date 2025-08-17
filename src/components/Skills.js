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

const SkillsSection = styled.section`
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

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background: ${props => props.active ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.active ? 'white' : '#9ca3af'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(96, 165, 250, 0.2);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const SkillCategory = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const SkillItem = styled.div`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  color: #e5e7eb;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(147, 197, 253, 0.1) 100%);
    border-color: rgba(96, 165, 250, 0.4);
    box-shadow: 0 5px 15px rgba(96, 165, 250, 0.2);
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin-top: 0.5rem;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #60a5fa, #93c5fd);
  border-radius: 3px;
  width: ${props => props.percentage}%;
  transition: width 1s ease;
`;

const SkillWithProgress = styled.div`
  margin-bottom: 1rem;
  animation: ${slideIn} 0.5s ease-out;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`;

const SkillLabel = styled.span`
  color: #e5e7eb;
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  color: #60a5fa;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    'Programming Languages': ['Python', 'JavaScript','C','C++','JavaScript'],
    // 'AI & Machine Learning': ['AI/ML', 'Natural Language Processing', 'Data Analysis', 'scikit-learn'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'React','MySql'],
    'Frameworks & Libraries': ['React','Numpy','Pandas','matplotlib','Flask'],
    'Tools & Platforms': ['GitHub','VS Code','Figma','Uipath','Autocad']
  };

  const skillProgress = {
    'Python': 85,
    'JavaScript': 80,
    'Kotlin': 75,
    'HTML/CSS': 90,
    'AI/ML': 80,
    'React': 70,
    'Android': 75,
    'Git': 85,
    'Algorithms': 80,
    'Data Analysis': 75
  };

  const categories = ['all', ...Object.keys(skillCategories)];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skillCategories).flat();
    }
    return skillCategories[activeCategory] || [];
  };

  return (
    <SkillsSection id="skills">
      <Title>Skills & Expertise</Title>
      <Subtitle>
        A comprehensive toolkit of technologies and frameworks I use to bring ideas to life, based on my actual projects
      </Subtitle>
      
      <CategoryTabs>
        {categories.map(category => (
          <Tab
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category === 'all' ? 'All Skills' : category}
          </Tab>
        ))}
      </CategoryTabs>

      {activeCategory === 'all' ? (
        <SkillsGrid>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <SkillCategory key={category}>
              <CategoryTitle>
                {category === 'Programming Languages' && '💻'}
                {category === 'AI & Machine Learning' && '🤖'}
                {category === 'Web Technologies' && '🌐'}
                {category === 'Mobile Development' && '📱'}
                {category === 'Tools & Others' && '🛠️'}
                {category}
              </CategoryTitle>
              <SkillList>
                {skills.map(skill => (
                  <SkillItem key={skill}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      ) : (
        <SkillsGrid>
          <SkillCategory>
            <CategoryTitle>
              {activeCategory === 'Programming Languages' && '💻'}
              {activeCategory === 'AI & Machine Learning' && '🤖'}
              {activeCategory === 'Web Technologies' && '🌐'}
              {activeCategory === 'Mobile Development' && '📱'}
              {activeCategory === 'Tools & Others' && '🛠️'}
              {activeCategory}
            </CategoryTitle>
            <div>
              {skillCategories[activeCategory]?.map(skill => (
                skillProgress[skill] ? (
                  <SkillWithProgress key={skill}>
                    <SkillName>
                      <SkillLabel>{skill}</SkillLabel>
                      <SkillPercentage>{skillProgress[skill]}%</SkillPercentage>
                    </SkillName>
                    <ProgressBar>
                      <Progress percentage={skillProgress[skill]} />
                    </ProgressBar>
                  </SkillWithProgress>
                ) : (
                  <SkillItem key={skill}>{skill}</SkillItem>
                )
              ))}
            </div>
          </SkillCategory>
        </SkillsGrid>
      )}
    </SkillsSection>
  );
};

export default Skills;