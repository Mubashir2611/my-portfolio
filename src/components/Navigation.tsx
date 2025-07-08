import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="h-full bg-card border-r border-border">
      <div className="flex justify-end p-3 xs:p-4">
        <IconButton className="p-2">
          <CloseIcon className="text-foreground text-xl xs:text-2xl" />
        </IconButton>
      </div>
      <List className="px-2">
        {navItems.map((item) => (
          <ListItem
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className="cursor-pointer hover:bg-muted transition-colors rounded-lg mb-2 py-3"
          >
            <ListItemText 
              primary={item.label} 
              className="text-foreground font-rajdhani text-lg xs:text-xl"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        className={`transition-all duration-300 ${
          scrolled ? 'bg-card/90 backdrop-blur-md shadow-glow-primary' : 'bg-transparent'
        }`}
        elevation={0}
      >
        <Toolbar className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="flex-1">
            <h1 
              className="text-lg xs:text-xl sm:text-2xl font-orbitron font-bold text-primary glitch"
              data-text="<MUBERSER/>"
            >
              {'<MUBERSER/>'}
            </h1>
          </div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="p-2"
            >
              <MenuIcon className="text-primary text-xl xs:text-2xl" />
            </IconButton>
          ) : (
            <Box className="flex space-x-4 md:space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground font-rajdhani text-base lg:text-lg hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: { xs: 280, sm: 320 },
            backgroundColor: 'transparent',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;