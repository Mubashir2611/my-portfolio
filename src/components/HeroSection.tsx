import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, KeyboardArrowDown } from '@mui/icons-material';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const roles = ['Full Stack Developer', 'Problem Solver', 'Code Enthusiast', 'Tech Explorer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    const interval = setInterval(() => {
      if (index < currentText.length) {
        setText(currentText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText('');
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentRole]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-hero">
      {/* Matrix Rain Background Effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-sm animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <Container maxWidth="lg" className="relative z-10">
        <Box className="flex flex-col items-center justify-center min-h-screen text-center">
          <div className="animate-fade-in">
            <Typography
              variant="h6"
              className="text-muted-foreground font-mono mb-4 tracking-wider"
            >
              {'> Welcome to the future'}
            </Typography>
            
            <Typography
              variant="h1"
              className="text-6xl md:text-8xl font-orbitron font-bold text-foreground mb-6 animate-slide-in-left"
            >
              MUBERSER
            </Typography>
            
            <Typography
              variant="h1"
              className="text-6xl md:text-8xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent mb-8 animate-slide-in-right"
            >
              HOSSAIN
            </Typography>

            <div className="h-16 mb-8">
              <Typography
                variant="h3"
                className="text-2xl md:text-4xl font-rajdhani text-secondary mb-4"
              >
                {text}
                {showCursor && <span className="animate-pulse">|</span>}
              </Typography>
            </div>

            <Typography
              variant="body1"
              className="text-lg text-muted-foreground font-mono max-w-2xl mb-12 leading-relaxed animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              EAT, CODE, SLEEP, REPEAT 🔁 
              <br />
              Crafting digital experiences in the cyberpunk era
            </Typography>

            <Box className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <IconButton
                href="https://github.com/mubashir2611"
                target="_blank"
                className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110"
              >
                <GitHub className="text-3xl" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/mubashir26/"
                target="_blank"
                className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110"
              >
                <LinkedIn className="text-3xl" />
              </IconButton>
              <IconButton
                href="https://x.com/mubahossain"
                target="_blank"
                className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110"
              >
                <Twitter className="text-3xl" />
              </IconButton>
            </Box>
          </div>

          <IconButton
            onClick={scrollToNext}
            className="absolute bottom-8 text-primary animate-bounce hover:shadow-glow-primary"
          >
            <KeyboardArrowDown className="text-4xl" />
          </IconButton>
        </Box>
      </Container>
    </section>
  );
};

export default HeroSection;