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
      value: 'hossainmuberser445@gmail.com',
      link: 'mailto:hossainmuberser445@gmail.com'
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
      value: '@Muberser2611',
      link: 'https://github.com/Muberser2611'
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
    <section id="contact" className="py-20 bg-card">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 animate-fade-in"
          >
            {'<CONTACT/>'}
          </Typography>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <Typography
            variant="body1"
            className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto"
          >
            Let's connect and build something amazing together
          </Typography>
        </Box>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-7">
            <Card className="bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary animate-slide-in-left">
              <CardContent className="p-8">
                <Typography
                  variant="h4"
                  className="text-2xl font-rajdhani font-bold text-secondary mb-6"
                >
                  Send Message
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <GlowTextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <GlowTextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <GlowTextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />

                  <GlowTextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 font-rajdhani font-bold text-lg px-8 py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <Box className="animate-slide-in-right">
              <Typography
                variant="h4"
                className="text-2xl font-rajdhani font-bold text-secondary mb-8"
              >
                Get In Touch
              </Typography>

              <Box className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-background border border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <Box className="flex items-center space-x-4">
                        <Box className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography className="font-rajdhani font-bold text-foreground">
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground font-mono hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <Typography className="text-muted-foreground font-mono">
                              {info.value}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  className="font-rajdhani font-bold text-foreground mb-4"
                >
                  Follow Me
                </Typography>
                <Box className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.href}
                      target="_blank"
                      aria-label={social.label}
                      className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110 bg-background border border-border hover:border-primary animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>

              <Box className="mt-8 p-6 bg-background border border-border rounded-lg">
                <Typography
                  variant="h6"
                  className="font-rajdhani font-bold text-primary mb-4"
                >
                  Let's Build Together
                </Typography>
                <Typography className="text-muted-foreground font-mono leading-relaxed">
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