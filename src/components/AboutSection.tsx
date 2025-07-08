import * as React from "react"
import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const traits = [
    {
      icon: <Code className="text-4xl text-primary" />,
      title: 'Code Craftsman',
      description: 'Passionate about writing clean, efficient, and scalable code that stands the test of time.'
    },
    {
      icon: <Brain className="text-4xl text-secondary" />,
      title: 'Problem Solver',
      description: 'I approach complex challenges with analytical thinking and creative solutions.'
    },
    {
      icon: <Zap className="text-4xl text-accent" />,
      title: 'Fast Learner',
      description: 'Always adapting to new technologies and frameworks in the ever-evolving tech landscape.'
    },
    {
      icon: <Users className="text-4xl text-primary" />,
      title: 'Team Player',
      description: 'Collaborative mindset with excellent communication skills for successful project delivery.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-foreground mb-6 animate-fade-in">
            {'<ABOUT_ME/>'}
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h4 className="text-2xl md:text-3xl font-rajdhani font-bold text-secondary mb-6">
              Hello, I'm Muberser Hossain
            </h4>
            
            <p className="text-lg text-muted-foreground font-mono leading-relaxed mb-6">
              A passionate developer from India who believes in the power of code to transform ideas into reality. 
              My journey in the digital realm spans across various technologies, always with an eye for innovation 
              and excellence.
            </p>
            
            <p className="text-lg text-muted-foreground font-mono leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or thinking about the next big idea. I thrive in collaborative environments and love turning complex 
              problems into elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-primary font-mono">📍 Location:</span>
                <span className="text-foreground ml-2">India</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-primary font-mono">📧 Email:</span>
                <span className="text-foreground ml-2">hossainmuberser445@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid sm:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <Card 
                  key={index}
                  className="bg-card border border-border hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-glow-primary h-full"
                >
                  <CardContent className="p-6 text-center">
                    <div 
                      className="mb-4 animate-float" 
                      style={{ 
                        '--animation-delay': `${index * 0.2}s`,
                        animationDelay: `var(--animation-delay)`,
                      } as React.CSSProperties}
                    >
                      {trait.icon}
                    </div>
                    <h6 className="font-rajdhani font-bold text-foreground mb-3">
                      {trait.title}
                    </h6>
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      {trait.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;