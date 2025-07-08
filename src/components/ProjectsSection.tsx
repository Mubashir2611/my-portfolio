import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Box, Chip, IconButton } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Golden Glimpse',
      description: 'A MERN stack Time Capsule App that allows users to create digital "time capsules" containing messages, photos, or memories, and schedule them to be opened at a future date.',
      image: '/assests/GitHubEmoji.jpg',
      technologies: ['JavaScript', 'Node.js', 'MongoDB', 'React', 'Express.js', 'Material-UI', 'Tailwind CSS'],
      github: 'https://github.com/Mubashir2611/Golden_Glimpse',
      live: '#',
      category: 'Web App',
    },
    {
      title: 'PixelGram',
      description: 'A full-stack Realtime Social App built with React, ShadCN, TypeScript, Tailwind CSS, AppWrite.',
      image: '/assests/GoodMonster.jpg',
      technologies: ['React', 'Node.js', 'AppWrite', 'Tailwind CSS', 'ShadCN'],
      github: 'https://github.com/Mubashir2611/PixelGram',
      live: 'https://pixel-gram.vercel.app',
      category: 'Full Stack'
    },
    {
      title: 'CityPulse3D',
      description: 'CityPulse3D is an interactive 3D city simulation built using Three.js. It procedurally generates a vibrant urban landscape, complete with buildings, roads, sidewalks, and street elements like lampposts and traffic lights, offering users an immersive experience of a bustling city environment.',
      image: '/assests/GithubMoji.jpg',
      technologies: ['JavaScript', 'React', 'three.js', 'Gemini API', 'Rest API'],
      github: 'https://github.com/Mubashir2611/CityPulse3D',
      live: 'https://city-pulse3-d.vercel.app/',
      category: 'Web App'
    },
    {
      title: 'Space Shooter Game',
      description: 'A space shooter game built with Java Script,React and Three.js, Node.js,Type Script - featuring 3D graphics, responsive design, real time scoring system',
      image: '/assests/GoodMonster.jpg',
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
    <section id="projects" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-background">
      <Container maxWidth="lg" className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <Box className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <Typography
            variant="h2"
            className="section-title font-orbitron font-bold text-foreground mb-3 xs:mb-4 sm:mb-6 animate-fade-in px-2 sm:px-0 glitch"
            data-text="<PROJECTS/>"
          >
            {'<PROJECTS/>'}
          </Typography>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 bg-gradient-primary mx-auto mb-4 xs:mb-6 sm:mb-8"></div>
          <Typography
            variant="body1"
            className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-mono max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto mb-6 xs:mb-8 sm:mb-12 px-4 xs:px-2 sm:px-0"
          >
            Showcase of my technical expertise and creative problem-solving
          </Typography>

          {/* Category Filter */}
          <Box className="flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 mb-6 xs:mb-8 sm:mb-12 px-2 sm:px-0">
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-mono transition-all duration-300 cursor-pointer text-xs ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-glow-primary'
                    : 'bg-muted text-muted-foreground hover:bg-card hover:border-primary'
                }`}
              />
            ))}
          </Box>
        </Box>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border border-border hover:border-primary transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary h-full animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Box className="relative overflow-hidden">
                <CardMedia
                  component="img"
                  className="h-32 xs:h-36 sm:h-40 md:h-48 w-full object-cover"
                  image={project.image}
                  alt={project.title}
                />
                
                {/* Hover Overlay */}
                <Box className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 xs:space-x-4">
                  <IconButton
                    href={project.github}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors bg-card border border-border hover:border-primary p-2 xs:p-3"
                  >
                    <GitHub className="text-lg xs:text-xl" />
                  </IconButton>
                  <IconButton
                    href={project.live}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors bg-card border border-border hover:border-primary p-2 xs:p-3"
                  >
                    <Launch className="text-lg xs:text-xl" />
                  </IconButton>
                </Box>
              </Box>

              <CardContent className="p-3 xs:p-4 sm:p-6">
                <Typography
                  variant="h6"
                  className="font-rajdhani font-bold text-foreground mb-2 sm:mb-3 text-sm xs:text-base sm:text-lg"
                >
                  {project.title}
                </Typography>
                
                <Typography
                  variant="body2"
                  className="text-muted-foreground font-mono text-xs leading-relaxed mb-3 sm:mb-4 line-clamp-3 min-h-[3rem] xs:min-h-[3.5rem]"
                >
                  {project.description}
                </Typography>

                <Box className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      className="bg-muted text-muted-foreground font-mono text-xs border border-border"
                    />
                  ))}
                  {project.technologies.length > 4 && (
                    <Chip
                      label={`+${project.technologies.length - 4}`}
                      size="small"
                      className="bg-muted text-muted-foreground font-mono text-xs border border-border"
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>

        <Box className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-16">
          <Typography className="text-muted-foreground font-mono mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base px-4 xs:px-2 sm:px-0">
            More projects available on
          </Typography>
          <IconButton
            href="https://github.com/Muberser2611"
            target="_blank"
            className="text-foreground hover:text-primary transition-all duration-300 hover:shadow-glow-primary transform hover:scale-110 p-2 xs:p-3"
          >
            <GitHub className="text-2xl xs:text-3xl sm:text-4xl" />
          </IconButton>
        </Box>
      </Container>
    </section>
  );
};

export default ProjectsSection;