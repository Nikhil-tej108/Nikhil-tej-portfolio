import React from "react";
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

const AboutSection = styled.section`
  max-width: 1200px;
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  animation: ${fadeInUp} 0.8s ease-out;
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #60a5fa;
  margin-bottom: 1.5rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    border-radius: 2px;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #e5e7eb;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.4);
    box-shadow: 0 10px 30px rgba(96, 165, 250, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #60a5fa;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const InfoCards = styled.div`
  display: grid;
  gap: 1.5rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateX(5px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardContent = styled.p`
  color: #d1d5db;
  line-height: 1.6;
  margin: 0;
`;

const About = () => (
  <AboutSection id="about">
    <Container>
      <Content>
        <Title>About Me</Title>
        <Description>
          I'm a passionate AI & ML engineer and full-stack developer based in Bengaluru, India. 
          Currently pursuing my B.E. in AI & ML at Dayananda Sagar College of Engineering, I specialize in 
          creating intelligent solutions that bridge the gap between science fiction and practical applications.
          I'm actively learning AI/ML, building modern web applications, and contributing to open-source projects.
        </Description>
        
        {/* <StatsGrid>
          <StatCard>
            <StatNumber>7</StatNumber>
            <StatLabel>Repositories</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>6</StatNumber>
            <StatLabel>Stars Earned</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>3</StatNumber>
            <StatLabel>Following</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>2</StatNumber>
            <StatLabel>Followers</StatLabel>
          </StatCard>
        </StatsGrid> */}
      </Content>
      
      <InfoCards>
        <InfoCard>
          <CardTitle>
            🎓 Education
          </CardTitle>
          <CardContent>
            B.E. in AI & ML at Dayananda Sagar College of Engineering (DSCE)
          </CardContent>
        </InfoCard>
        
        <InfoCard>
          <CardTitle>
            🎯 Current Mission
          </CardTitle>
          <CardContent>
            Learning AI/ML to build intelligent solutions, building modern web applications, and contributing to open-source projects
          </CardContent>
        </InfoCard>
        
        <InfoCard>
          <CardTitle>
            🚀 Vision
          </CardTitle>
          <CardContent>
            Turning sci-fi ideas into real-world solutions — it's for real, believe me :)
          </CardContent>
        </InfoCard>
        
        <InfoCard>
          <CardTitle>
            📍 Location
          </CardTitle>
          <CardContent>
            Bengaluru, India (UTC +05:30)
          </CardContent>
        </InfoCard>
        
        <InfoCard>
          <CardTitle>
            💡 Quote I Live By
          </CardTitle>
          <CardContent>
            "Success is the sum of small efforts, repeated day in and day out"
          </CardContent>
        </InfoCard>
        
        <InfoCard>
          <CardTitle>
            👨‍💻 Pronouns
          </CardTitle>
          <CardContent>
            He/Him
          </CardContent>
        </InfoCard>
      </InfoCards>
    </Container>
  </AboutSection>
);

export default About;