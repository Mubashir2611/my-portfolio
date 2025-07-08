import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 xs:py-10 sm:py-12">
      <Container maxWidth="lg" className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <Box className="text-center">
          <Typography
            variant="h4"
            className="text-xl xs:text-2xl sm:text-3xl font-orbitron font-bold text-primary mb-3 xs:mb-4 glitch"
            data-text="<MUBERSER/>"
          >
            {'<MUBERSER/>'}
          </Typography>
          
          <Typography
            variant="body1"
            className="text-muted-foreground font-mono mb-6 xs:mb-8 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-4 xs:px-2 sm:px-0"
          >
            Crafting digital experiences with passion, precision, and a touch of cyberpunk aesthetics.
          </Typography>

          <Divider className="border-border mb-6 xs:mb-8" />

          <Box className="flex flex-col space-y-3 xs:space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <Typography
              variant="body2"
              className="text-muted-foreground font-mono text-xs xs:text-sm order-2 md:order-1"
            >
              © {currentYear} Muberser Hossain. All rights reserved.
            </Typography>
            
            <Typography
              variant="body2"
              className="text-muted-foreground font-mono text-xs xs:text-sm order-1 md:order-2"
            >
              EAT, CODE, SLEEP, REPEAT 🔁
            </Typography>
          </Box>

          <Box className="mt-6 xs:mt-8">
            <Typography
              variant="body2"
              className="text-muted-foreground font-mono text-xs leading-relaxed px-4 xs:px-2 sm:px-0"
            >
              Built with React, Material-UI & Tailwind CSS • Designed in the future
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;