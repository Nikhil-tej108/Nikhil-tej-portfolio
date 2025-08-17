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
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
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
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${float} 2s ease-in-out infinite;
  cursor: pointer;
  
  &::before {
    content: '↓';
    font-size: 2rem;
    color: #60a5fa;
    opacity: 0.7;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #60a5fa;
  border-radius: 50%;
  opacity: 0.6;
  animation: ${float} ${props => props.duration || 3}s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
`;

const Hero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 20;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 2,
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
    <HeroContainer>
      {particles.map(particle => (
        <Particle
          key={particle.id}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          duration={particle.duration}
          delay={particle.delay}
        />
      ))}
      
      <Content>
        <Greeting>Hello, I'm</Greeting>
        <Name>Nikhil Tej</Name>
        <SubTitle>AI & ML Engineer • Full Stack Developer • Problem Solver</SubTitle>
        <Tagline>
          Turning sci-fi ideas into real-world solutions — it's for real, believe me :)
        </Tagline>
        <CTAButton onClick={scrollToAbout}>
          Explore My Work
        </CTAButton>
      </Content>
      
      <ScrollIndicator onClick={scrollToAbout} />
    </HeroContainer>
  );
};

export default Hero;