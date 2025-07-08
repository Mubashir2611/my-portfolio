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
    <section id="skills" className="py-20 bg-card">
      <Container maxWidth="lg">
        <Box className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 animate-fade-in"
          >
            {'<SKILLS/>'}
          </Typography>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mb-8"></div>
          <Typography
            variant="body1"
            className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life
          </Typography>
        </Box>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="animate-slide-in-left">
            <Typography
              variant="h4"
              className="text-2xl font-rajdhani font-bold text-secondary mb-8"
            >
              Technical Proficiency
            </Typography>
            
            <Box className="space-y-6">
              {skills.map((skill, index) => (
                <Box key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Box className="flex justify-between items-center mb-2">
                    <Typography className="font-mono text-foreground font-medium">
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
                    className="mb-2"
                  />
                  <Typography className="text-muted-foreground font-mono text-sm text-right">
                    {skill.level}%
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>

          <div className="animate-slide-in-right">
            <Typography
              variant="h4"
              className="text-2xl font-rajdhani font-bold text-secondary mb-8"
            >
              Technology Stack
            </Typography>
            
            <Box className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <Chip
                  key={tech}
                  label={tech}
                  className="bg-muted border border-border text-foreground font-mono hover:border-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              ))}
            </Box>

            <Box className="mt-12 p-6 bg-background border border-border rounded-lg">
              <Typography
                variant="h6"
                className="font-rajdhani font-bold text-primary mb-4"
              >
                Current Focus
              </Typography>
              <Typography className="text-muted-foreground font-mono leading-relaxed">
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