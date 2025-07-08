import React from 'react';
import { Container, Typography, Box, LinearProgress, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlowProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'hsl(var(--muted))',
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: 'var(--gradient-primary)',
    boxShadow: 'var(--glow-primary)',
  },
}));

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'Git', level: 90, category: 'Tools' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'AWS', level: 65, category: 'Cloud' },
  ];

  const technologies = [
    'React', 'Node.js', 'TypeScript', 'Python', 'JavaScript', 'MongoDB', 
    'PostgreSQL', 'Express.js', 'Next.js', 'Material-UI', 'Tailwind CSS',
    'Git', 'Docker', 'AWS', 'Redux', 'GraphQL', 'REST APIs', 'Microservices'
  ];

  const categoryColors = {
    Frontend: 'primary',
    Backend: 'secondary',
    Database: 'accent',
    Tools: 'primary',
    DevOps: 'secondary',
    Cloud: 'accent'
  } as const;

  return (
    <section id="skills" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-card">
      <Container maxWidth="lg" className="px-3 xs:px-4 sm:px-6 lg:px-8">
        <Box className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <Typography
            variant="h2"
            className="section-title font-orbitron font-bold text-foreground mb-3 xs:mb-4 sm:mb-6 animate-fade-in px-2 sm:px-0 glitch"
            data-text="<SKILLS/>"
          >
            {'<SKILLS/>'}
          </Typography>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 bg-gradient-secondary mx-auto mb-4 xs:mb-6 sm:mb-8"></div>
          <Typography
            variant="body1"
            className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-mono max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-2xl mx-auto px-4 xs:px-2 sm:px-0"
          >
            Technologies and tools I use to bring ideas to life
          </Typography>
        </Box>

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-16">
          <div className="animate-slide-in-left">
            <Typography
              variant="h4"
              className="text-lg xs:text-xl sm:text-2xl font-rajdhani font-bold text-secondary mb-4 xs:mb-6 sm:mb-8 px-2 sm:px-0"
            >
              Technical Proficiency
            </Typography>
            
            <Box className="space-y-3 xs:space-y-4 sm:space-y-6 px-2 sm:px-0">
              {skills.map((skill, index) => (
                <Box key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Box className="flex justify-between items-center mb-2">
                    <Typography className="font-mono text-foreground font-medium text-xs xs:text-sm sm:text-base">
                      {skill.name}
                    </Typography>
                    <Chip
                      label={skill.category}
                      size="small"
                      className="bg-muted text-muted-foreground font-mono text-xs border border-border"
                    />
                  </Box>
                  <GlowProgress
                    variant="determinate"
                    value={skill.level}
                    className="mb-1 xs:mb-2"
                  />
                  <Typography className="text-muted-foreground font-mono text-xs text-right">
                    {skill.level}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>

          <div className="animate-slide-in-right">
            <Typography
              variant="h4"
              className="text-lg xs:text-xl sm:text-2xl font-rajdhani font-bold text-secondary mb-4 xs:mb-6 sm:mb-8 px-2 sm:px-0"
            >
              Technology Stack
            </Typography>
            
            <Box className="flex flex-wrap gap-1.5 xs:gap-2 sm:gap-3 px-2 sm:px-0">
              {technologies.map((tech, index) => (
                <Chip
                  key={tech}
                  label={tech}
                  className="bg-muted border border-border text-foreground font-mono text-xs hover:border-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              ))}
            </Box>

            <Box className="mt-6 xs:mt-8 sm:mt-12 p-3 xs:p-4 sm:p-6 bg-background border border-border rounded-lg mx-2 sm:mx-0">
              <Typography
                variant="h6"
                className="font-rajdhani font-bold text-primary mb-2 xs:mb-3 sm:mb-4 text-sm xs:text-base sm:text-lg"
              >
                Current Focus
              </Typography>
              <Typography className="text-muted-foreground font-mono leading-relaxed text-xs xs:text-sm sm:text-base">
                Currently diving deep into modern web technologies, exploring AI/ML integration, 
                and contributing to open-source projects. Always learning, always growing.
              </Typography>
            </Box>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;