import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, Box, TextField, Button, IconButton } from '@mui/material';
import { Email, LinkedIn, Twitter, GitHub, Send, LocationOn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const GlowTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'hsl(var(--card))',
    borderColor: 'hsl(var(--border))',
    '&:hover fieldset': {
      borderColor: 'hsl(var(--primary))',
      boxShadow: 'var(--glow-primary)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'hsl(var(--primary))',
      boxShadow: 'var(--glow-primary)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'hsl(var(--muted-foreground))',
    fontFamily: 'JetBrains Mono',
  },
  '& .MuiOutlinedInput-input': {
    color: 'hsl(var(--foreground))',
    fontFamily: 'JetBrains Mono',
  },
}));

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Email className="text-primary text-2xl" />,
      title: 'Email',
      value: 'hussainmubashir445@gmail.com',
      link: 'mailto:hussainmubashir445@gmail.com'
    },
    {
      icon: <LocationOn className="text-secondary text-2xl" />,
      title: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: <GitHub className="text-accent text-2xl" />,
      title: 'GitHub',
      value: '@Mubashir2611',
      link: 'https://github.com/Mubashir2611'
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedIn className="text-2xl" />,
      href: 'https://www.linkedin.com/in/mubashir26/',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="text-2xl" />,
      href: 'https://x.com/mubahossain',
      label: 'Twitter'
    },
    {
      icon: <GitHub className="text-2xl" />,
      href: 'https://github.com/Mubashir2611',
      label: 'GitHub'
    },
    {
      icon: <Email className="text-2xl" />,
      href: 'mailto:hussainmubashir445@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="contact" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-card">
      <Container maxWidth="lg" className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <Box className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <Typography
            variant="h2"
            className="section-title font-orbitron font-bold text-foreground mb-3 xs:mb-4 sm:mb-6 animate-fade-in px-2 sm:px-0 glitch"
            data-text="<Contact/>"
          >
            {'<Contact/>'}
          </Typography>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 bg-gradient-secondary mx-auto mb-4 xs:mb-6 sm:mb-8"></div>
          <Typography
            variant="body1"
            className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-mono max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto px-4 xs:px-2 sm:px-0"
          >
            Let's connect and build something amazing together
          </Typography>
        </Box>

        <div className="grid lg:grid-cols-12 gap-6 xs:gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Card className="bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary animate-slide-in-left">
              <CardContent className="p-4 xs:p-5 sm:p-6 md:p-8">
                <Typography
                  variant="h4"
                  className="section-title font-rajdhani font-bold text-secondary mb-3 xs:mb-4 sm:mb-6"
                >
                  Send Message
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                    <GlowTextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      size="small"
                    />
                    <GlowTextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      size="small"
                    />
                  </div>

                  <GlowTextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    size="small"
                  />

                  <GlowTextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 font-rajdhani font-bold text-sm xs:text-base sm:text-lg px-4 xs:px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <Box className="animate-slide-in-right">
              <Typography
                variant="h4"
                className="section-title font-rajdhani font-bold text-secondary mb-4 xs:mb-6 sm:mb-8 px-2 sm:px-0"
              >
                Get In Touch
              </Typography>

              <Box className="space-y-3 xs:space-y-4 sm:space-y-6 mb-4 xs:mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-3 xs:p-4">
                      <Box className="flex items-center space-x-3 xs:space-x-4">
                        <Box className="animate-float flex-shrink-0" style={{ animationDelay: `${index * 0.2}s` }}>
                          <div className="text-xl xs:text-2xl">
                            {info.icon}
                          </div>
                        </Box>
                        <Box className="min-w-0 flex-1">
                          <Typography className="font-rajdhani font-bold text-foreground text-xs xs:text-sm sm:text-base">
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground font-mono hover:text-primary transition-colors text-xs break-all"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <Typography className="text-muted-foreground font-mono text-xs">
                              {info.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              <Box className="mb-4 xs:mb-6 sm:mb-8 px-2 sm:px-0">
                <Typography
                  variant="h6"
                  className="section-title font-rajdhani font-bold text-foreground mb-2 xs:mb-3 sm:mb-4"
                >
                  Follow Me
                </Typography>
                <Box className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110 bg-background border border-border hover:border-primary animate-fade-in p-2 xs:p-3"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-lg xs:text-xl sm:text-2xl">
                        {social.icon}
                      </div>
                    </IconButton>
                  ))}
                </Box>
              </Box>

              <Box className="p-3 xs:p-4 sm:p-6 bg-background border border-border rounded-lg mx-2 sm:mx-0">
                <Typography
                  variant="h6"
                  className="section-title font-rajdhani font-bold text-primary mb-2 xs:mb-3 sm:mb-4"
                >
                  Let's Build Together
                </Typography>
                <Typography className="text-muted-foreground font-mono leading-relaxed text-xs sm:text-sm">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'm always excited to connect with fellow developers and creators. Drop me a message!
                </Typography>
              </Box>
            </Box>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;