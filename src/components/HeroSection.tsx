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

      <Container maxWidth="lg" className="relative z-10 px-3 sm:px-4 md:px-6 lg:px-8">
        <Box className="flex flex-col items-center justify-center min-h-screen text-center pt-16 sm:pt-20 pb-8 sm:pb-12">
          <div className="animate-fade-in w-full max-w-5xl mx-auto px-4 sm:px-6">
            <Typography
              variant="h6"
              className="text-muted-foreground font-mono mb-3 xs:mb-4 tracking-wider text-xs sm:text-sm md:text-base"
            >
              {'> Welcome to the future'}
            </Typography>
            
            {/* Name container with responsive sizing */}
            <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-8 w-full max-w-full">
              <div className="flex flex-col items-center justify-center space-y-1 xs:space-y-2">
                <Typography
                  variant="h1"
                  className="hero-name font-orbitron font-bold text-foreground animate-slide-in-left hero-text w-full glitch"
                  data-text="MUBERSER"
                >
                  MUBERSER
                </Typography>
                
                <Typography
                  variant="h1"
                  className="hero-name font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent animate-slide-in-right hero-text w-full glitch"
                  data-text="HOSSAIN"
                >
                  HOSSAIN
                </Typography>
              </div>
            </div>

            <div className="min-h-[4rem] md:min-h-[4.5rem] mb-4 xs:mb-5 sm:mb-6 md:mb-8 flex items-center justify-center py-2">
              <Typography
                variant="h3"
                className="role-text font-rajdhani text-secondary px-2 sm:px-0"
              >
                {text}
                {showCursor && <span className="animate-pulse">|</span>}
              </Typography>
            </div>

            <div className="flex flex-col items-center text-center">
              <Typography
                variant="body1"
                className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-mono max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed animate-fade-in px-4 sm:px-0"
                style={{ animationDelay: '0.5s' }}
              >
                EAT, CODE, SLEEP, REPEAT 🔁 
                <br className="hidden xs:block" />
                <span className="xs:hidden"> </span>
                Crafting digital experiences in the cyberpunk era
              </Typography>
            </div>

            <Box className="flex justify-center space-x-3 xs:space-x-4 sm:space-x-6 mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <IconButton
                href="https://github.com/mubashir2611"
                target="_blank"
                className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110 p-2 xs:p-3"
              >
                <GitHub className="text-xl xs:text-2xl sm:text-3xl" />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/mubashir26/"
                target="_blank"
                className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110 p-2 xs:p-3"
              >
                <LinkedIn className="text-xl xs:text-2xl sm:text-3xl" />
              </IconButton>
              <IconButton
                href="https://x.com/mubahossain"
                target="_blank"
                className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110 p-2 xs:p-3"
              >
                <Twitter className="text-xl xs:text-2xl sm:text-3xl" />
              </IconButton>
            </Box>
          </div>

          <IconButton
            onClick={scrollToNext}
            className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 text-primary animate-bounce hover:shadow-glow-primary"
          >
            <KeyboardArrowDown className="text-2xl xs:text-3xl sm:text-4xl" />
          </IconButton>
        </Box>
      </Container>
    </section>
  );
};

export default HeroSection;