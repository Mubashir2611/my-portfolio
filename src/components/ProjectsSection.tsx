import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, Chip, IconButton } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Golden Glimpse',
      description: 'A MERN stack Time Capsule App that allows users to create digital "time capsules" containing messages, photos, or memories, and schedule them to be opened at a future date.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'React', 'Express.js', 'Material-UI', 'Tailwind CSS'],
      github: 'https://github.com/Mubashir2611/Golden_Glimpse',
      live: '#',
      category: 'Web App',
    },
    {
      title: 'PixelGram',
      description: 'A full-stack Realtime Social App built with React, ShadCN, TypeScript, Tailwind CSS, AppWrite.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'AppWrite', 'Tailwind CSS', 'ShadCN'],
      github: 'https://github.com/Mubashir2611/PixelGram',
      live: 'https://pixel-gram.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'CityPulse3D',
      description: 'CityPulse3D is an interactive 3D city simulation built using Three.js. It procedurally generates a vibrant urban landscape, complete with buildings, roads, sidewalks, and street elements like lampposts and traffic lights, offering users an immersive experience of a bustling city environment.',
      image: '/api/placeholder/400/250',
      technologies: ['JavaScript', 'React', 'three.js', 'Gemini API', 'Rest API'],
      github: 'https://github.com/Mubashir2611/CityPulse3D',
      live: 'https://city-pulse3-d.vercel.app/',
      category: 'Web App'
    },
    {
      title: 'Space Shooter Game',
      description: 'A space shooter game built with Java Script,React and Three.js, Node.js,Type Script - featuring 3D graphics, responsive design, real time scoring system',
      image: '/api/placeholder/400/250',
      technologies: ['Java Script','React', 'Node', 'Three.js', 'Type Script'],
      github: 'https://github.com/Muberser2611',
      live: '#',
      category: 'Web App'
    },
  ];

  const categories = ['All', 'Full Stack', 'Web App','AI/ML'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-background">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 animate-fade-in"
          >
            {'<PROJECTS/>'}
          </Typography>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <Typography
            variant="body1"
            className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto mb-12"
          >
            Showcase of my technical expertise and creative problem-solving
          </Typography>

          {/* Category Filter */}
          <Box className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-mono transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow-primary'
                    : 'bg-muted text-muted-foreground hover:bg-card hover:border-primary'
                }`}
              />
            ))}
          </Box>
        </Box>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border border-border hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary h-full animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Box className="relative overflow-hidden">
                <CardMedia
                  component="div"
                  className="h-48 bg-gradient-secondary relative"
                >
                  <Box className="absolute inset-0 flex items-center justify-center">
                    <Code className="text-6xl text-background opacity-20" />
                  </Box>
                  <Box className="absolute top-4 right-4">
                    <Chip
                      label={project.category}
                      size="small"
                      className="bg-primary text-primary-foreground font-mono"
                    />
                  </Box>
                </CardMedia>
                
                {/* Hover Overlay */}
                <Box className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <IconButton
                    href={project.github}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors bg-card border border-border hover:border-primary"
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    href={project.live}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors bg-card border border-border hover:border-primary"
                  >
                    <Launch />
                  </IconButton>
                </Box>
              </Box>

              <CardContent className="p-6">
                <Typography
                  variant="h6"
                  className="font-rajdhani font-bold text-foreground mb-3"
                >
                  {project.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  className="text-muted-foreground font-mono text-sm leading-relaxed mb-4"
                >
                  {project.description}
                </Typography>

                <Box className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      className="bg-muted text-muted-foreground font-mono text-xs border border-border"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>

        <Box className="text-center mt-16">
          <Typography className="text-muted-foreground font-mono mb-4">
            More projects available on
          </Typography>
          <IconButton
            href="https://github.com/Muberser2611"
            target="_blank"
            className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110"
          >
            <GitHub className="text-4xl" />
          </IconButton>
        </Box>
      </Container>
    </section>
  );
};

export default ProjectsSection;