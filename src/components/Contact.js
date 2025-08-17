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

const ContactSection = styled.section`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  animation: ${fadeInUp} 0.8s ease-out;
`;

const ContactCard = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
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
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const ContactIcon = styled.div`
  font-size: 3rem;
  color: #60a5fa;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  ${ContactCard}:hover & {
    transform: scale(1.1);
  }
`;

const ContactTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ContactInfo = styled.p`
  color: #d1d5db;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ContactLink = styled.a`
  color: #60a5fa;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #93c5fd;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const SocialSection = styled.div`
  text-align: center;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
`;

const SocialTitle = styled.h3`
  color: #60a5fa;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const SocialGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(147, 197, 253, 0.05) 100%);
  border: 1px solid rgba(96, 165, 250, 0.2);
  color: #60a5fa;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.2) 0%, rgba(147, 197, 253, 0.1) 100%);
    border-color: rgba(96, 165, 250, 0.4);
    box-shadow: 0 10px 25px rgba(96, 165, 250, 0.2);
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #9ca3af;
  font-size: 0.9rem;
`;

const Contact = () => (
  <ContactSection id="contact">
    <Title>Get In Touch</Title>
    <Subtitle>
      I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
    </Subtitle>
    
    <ContactGrid>
      <ContactCard>
        <ContactIcon>📧</ContactIcon>
        <ContactTitle>Email</ContactTitle>
        <ContactInfo>Drop me a line anytime</ContactInfo>
        <ContactLink href="mailto:nikhiltej99@gmail.com">
          nikhiltej99@gmail.com
        </ContactLink>
      </ContactCard>
      
      <ContactCard>
        <ContactIcon>💼</ContactIcon>
        <ContactTitle>LinkedIn</ContactTitle>
        <ContactInfo>Connect with me professionally</ContactInfo>
        <ContactLink 
          href="https://www.linkedin.com/in/b-nikhil-tej-5911322a1/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          b-nikhil-tej
        </ContactLink>
      </ContactCard>
      
      <ContactCard>
        <ContactIcon>🏆</ContactIcon>
        <ContactTitle>LeetCode</ContactTitle>
        <ContactInfo>Check out my coding progress</ContactInfo>
        <ContactLink 
          href="https://leetcode.com/u/nikhiltej99/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          nikhiltej99
        </ContactLink>
      </ContactCard>
      
      <ContactCard>
        <ContactIcon>🐙</ContactIcon>
        <ContactTitle>GitHub</ContactTitle>
        <ContactInfo>Explore my projects and code</ContactInfo>
        <ContactLink 
          href="https://github.com/Nikhil-tej108" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Nikhil-tej108
        </ContactLink>
      </ContactCard>
      
      <ContactCard>
        <ContactIcon>🌐</ContactIcon>
        <ContactTitle>Portfolio</ContactTitle>
        <ContactInfo>Check out my latest work</ContactInfo>
        <ContactLink href="#projects">
          View Projects
        </ContactLink>
      </ContactCard>
      
      <ContactCard>
        <ContactIcon>📍</ContactIcon>
        <ContactTitle>Location</ContactTitle>
        <ContactInfo>Based in Bengaluru, India</ContactInfo>
        <ContactLink href="#about">
          Learn More
        </ContactLink>
      </ContactCard>
    </ContactGrid>
    
    <SocialSection>
      <SocialTitle>Let's Connect</SocialTitle>
      <SocialGrid>
        <SocialButton 
          href="https://github.com/Nikhil-tej108" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>🐙</span>
          GitHub
        </SocialButton>
        
        <SocialButton 
          href="https://www.linkedin.com/in/b-nikhil-tej-5911322a1/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>🔗</span>
          LinkedIn
        </SocialButton>
        
        <SocialButton 
          href="https://leetcode.com/u/nikhiltej99/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span>🏆</span>
          LeetCode
        </SocialButton>
        
        <SocialButton href="mailto:nikhiltej99@gmail.com">
          <span>📧</span>
          Email
        </SocialButton>
      </SocialGrid>
    </SocialSection>
    
    <Footer>
      <p>© 2024 Nikhil Tej. Built with ❤️ using React & Styled-Components</p>
      <p>"Success is the sum of small efforts, repeated day in and day out"</p>
    </Footer>
  </ContactSection>
);

export default Contact;