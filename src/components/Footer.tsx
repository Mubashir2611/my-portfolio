import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <Container maxWidth="lg">
        <Box className="text-center">
          <Typography
            variant="h4"
            className="text-3xl font-orbitron font-bold text-primary mb-4 animate-neon-pulse"
          >
            {'<MUBERSER/>'}
          </Typography>
          
          <Typography
            variant="body1"
            className="text-muted-foreground font-mono mb-8 max-w-2xl mx-auto"
          >
            Crafting digital experiences with passion, precision, and a touch of cyberpunk aesthetics.
          </Typography>

          <Divider className="border-border mb-8" />

          <Box className="flex flex-col md:flex-row justify-between items-center">
            <Typography
              variant="body2"
              className="text-muted-foreground font-mono mb-4 md:mb-0"
            >
              © {currentYear} Muberser Hossain. All rights reserved.
            </Typography>
            
            <Typography
              variant="body2"
              className="text-muted-foreground font-mono"
            >
              EAT, CODE, SLEEP, REPEAT 🔁
            </Typography>
          </Box>

          <Box className="mt-8">
            <Typography
              variant="body2"
              className="text-muted-foreground font-mono text-sm"
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