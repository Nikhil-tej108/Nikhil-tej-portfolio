import React, { useEffect, useState } from "react";
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

const blink = keyframes`
  0%, 50% {
    border-color: transparent;
  }
  51%, 100% {
    border-color: #60a5fa;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
  background: transparent;
  padding-top: 80px; /* Add padding to account for fixed navigation */
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(147, 197, 253, 0.03) 100%);
  border: 1px solid rgba(96, 165, 250, 0.15);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  max-width: 800px;
  width: 100%;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(147, 197, 253, 0.1) 100%);
  border: 3px solid rgba(96, 165, 250, 0.3);
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
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    font-size: 2.5rem;
  }
`;

const ProfileInfo = styled.div`
  text-align: left;
  flex: 1;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ProfileTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProfileText = styled.p`
  color: #d1d5db;
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileHighlights = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const HighlightTag = styled.span`
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(147, 197, 253, 0.08) 100%);
  border: 1px solid rgba(96, 165, 250, 0.3);
  color: #60a5fa;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.25) 0%, rgba(147, 197, 253, 0.15) 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(96, 165, 250, 0.3);
  }
`;

const SpaceParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const Particle = styled.div`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #ffffff;
  border-radius: 50%;
  animation: floatParticle 8s linear infinite;
  left: ${props => props.left}%;
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  animation: ${fadeInUp} 1s ease-out;
`;

const Greeting = styled.div`
  font-size: 1.2rem;
  color: #60a5fa;
  margin-bottom: 1rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #60a5fa 0%, #93c5fd 50%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
  animation: ${float} 3s ease-in-out infinite;
`;

const SubTitle = styled.h2`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  color: #e5e7eb;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Tagline = styled.p`
  font-size: clamp(1rem, 3vw, 1.3rem);
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  position: relative;
  
  &::after {
    content: '|';
    animation: ${blink} 1s infinite;
    color: #60a5fa;
    font-weight: bold;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.3);
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  margin-bottom: 5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(96, 165, 250, 0.4);
  }

  &:hover::before {
    left: 100%;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${float} 2s ease-in-out infinite;
  cursor: pointer;
  z-index: 1;
  
  &::before {
    content: '↓';
    font-size: 2rem;
    color: #60a5fa;
    opacity: 0.7;
  }
`;

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 15;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 6 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="home">
      <SpaceParticles>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            left={particle.left}
            delay={particle.delay}
            duration={particle.duration}
          />
        ))}
      </SpaceParticles>
      
      <HeroContent>
        <TopSection>
          <Greeting>Hello, I'm</Greeting>
          <Name>Nikhil Tej</Name>
          <Tagline>
            Turning sci-fi ideas into real-world solutions — it's for real, believe me :)
          </Tagline>
        </TopSection>

        <ProfileSection>
          <ProfileImage>
            <span>NT</span>
          </ProfileImage>
          <ProfileInfo>
            <ProfileTitle>About Me</ProfileTitle>
            <ProfileText>
              I'm pursuing B.E in Artificial Intelligence and Machine Learning at Dayananda Sagar College of Engineering.
              My passion lies in backend development, AI/ML, and creating innovative solutions.
              I'm dedicated to building robust and scalable systems.
            </ProfileText>
            <ProfileHighlights>
              <HighlightTag>Backend Development</HighlightTag>
              <HighlightTag>AI/ML</HighlightTag>
              <HighlightTag>Problem Solving</HighlightTag>
              <HighlightTag>Full Stack</HighlightTag>
            </ProfileHighlights>
          </ProfileInfo>
        </ProfileSection>

        <CTAButton onClick={scrollToAbout}>
          Explore My Work
        </CTAButton>
      </HeroContent>
      
      <ScrollIndicator onClick={scrollToAbout} />
    </HeroContainer>
  );
};

export default Hero;