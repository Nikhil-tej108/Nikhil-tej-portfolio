import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
    color: #f4f4f5;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    line-height: 1.6;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    background: #1a1a2e;
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