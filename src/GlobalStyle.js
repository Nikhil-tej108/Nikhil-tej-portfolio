import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #000000;
    color: #f4f4f5;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    line-height: 1.6;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    overflow-x: hidden;
  }

  /* Animated background with moving dots */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(2px 2px at 20px 30px, #ffffff, transparent),
                radial-gradient(2px 2px at 40px 70px, #ffffff, transparent),
                radial-gradient(1px 1px at 90px 40px, #ffffff, transparent),
                radial-gradient(1px 1px at 130px 80px, #ffffff, transparent),
                radial-gradient(2px 2px at 160px 30px, #ffffff, transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    animation: moveStars 20s linear infinite;
    z-index: -1;
  }

  body::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(1px 1px at 50px 50px, #ffffff, transparent),
                radial-gradient(1px 1px at 100px 100px, #ffffff, transparent),
                radial-gradient(1px 1px at 150px 150px, #ffffff, transparent),
                radial-gradient(1px 1px at 200px 200px, #ffffff, transparent),
                radial-gradient(1px 1px at 250px 250px, #ffffff, transparent);
    background-repeat: repeat;
    background-size: 300px 300px;
    animation: moveStars 15s linear infinite reverse;
    z-index: -1;
  }

  @keyframes moveStars {
    0% {
      transform: translateZ(0) scale(1);
      opacity: 0.8;
    }
    50% {
      transform: translateZ(100px) scale(1.5);
      opacity: 1;
    }
    100% {
      transform: translateZ(200px) scale(2);
      opacity: 0.6;
    }
  }

  /* Additional floating particles */
  .space-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }

  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ffffff;
    border-radius: 50%;
    animation: floatParticle 8s linear infinite;
  }

  .particle:nth-child(1) {
    left: 10%;
    animation-delay: 0s;
    animation-duration: 6s;
  }

  .particle:nth-child(2) {
    left: 20%;
    animation-delay: 1s;
    animation-duration: 8s;
  }

  .particle:nth-child(3) {
    left: 30%;
    animation-delay: 2s;
    animation-duration: 7s;
  }

  .particle:nth-child(4) {
    left: 40%;
    animation-delay: 3s;
    animation-duration: 9s;
  }

  .particle:nth-child(5) {
    left: 50%;
    animation-delay: 4s;
    animation-duration: 6s;
  }

  .particle:nth-child(6) {
    left: 60%;
    animation-delay: 5s;
    animation-duration: 8s;
  }

  .particle:nth-child(7) {
    left: 70%;
    animation-delay: 6s;
    animation-duration: 7s;
  }

  .particle:nth-child(8) {
    left: 80%;
    animation-delay: 7s;
    animation-duration: 9s;
  }

  .particle:nth-child(9) {
    left: 90%;
    animation-delay: 8s;
    animation-duration: 6s;
  }

  .particle:nth-child(10) {
    left: 95%;
    animation-delay: 9s;
    animation-duration: 8s;
  }

  @keyframes floatParticle {
    0% {
      transform: translateY(100vh) translateZ(0) scale(0.5);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100px) translateZ(200px) scale(2);
      opacity: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 1rem 0;
  }

  a {
    color: #60a5fa;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }

  a:hover {
    color: #93c5fd;
    text-decoration: none;
  }

  a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  ::selection {
    background: rgba(96, 165, 250, 0.3);
    color: #f4f4f5;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #60a5fa, #93c5fd);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #93c5fd, #60a5fa);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .fade-in-up {
    animation: fadeInUp 0.8s ease-out;
  }

  .fade-in {
    animation: fadeIn 1s ease-out;
  }

  .slide-in-left {
    animation: slideInLeft 0.8s ease-out;
  }

  .slide-in-right {
    animation: slideInRight 0.8s ease-out;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .float {
    animation: float 3s ease-in-out infinite;
  }
`;

export default GlobalStyle;