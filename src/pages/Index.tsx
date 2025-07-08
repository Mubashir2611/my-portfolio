import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Create a custom Material-UI theme that works with our design system
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(195, 100%, 50%)',
    },
    secondary: {
      main: 'hsl(283, 100%, 60%)',
    },
    background: {
      default: 'hsl(231, 15%, 7%)',
      paper: 'hsl(240, 8%, 12%)',
    },
    text: {
      primary: 'hsl(189, 100%, 85%)',
      secondary: 'hsl(189, 50%, 65%)',
    },
  },
  typography: {
    fontFamily: '"JetBrains Mono", "Rajdhani", "Orbitron", monospace',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
});

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;