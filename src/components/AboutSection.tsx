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
    <section id="about" className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="section-title font-orbitron font-bold text-foreground mb-3 xs:mb-4 sm:mb-6 animate-fade-in px-2 sm:px-0 glitch"
            data-text="<ABOUT_ME/>"
          >
            {'<ABOUT_ME/>'}
          </h2>
          <div className="w-12 xs:w-16 sm:w-20 md:w-24 h-1 bg-gradient-primary mx-auto mb-4 xs:mb-6 sm:mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="animate-slide-in-left order-2 lg:order-1">
            <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-rajdhani font-bold text-secondary mb-3 xs:mb-4 sm:mb-6 px-2 sm:px-0">
              Hello, I'm Muberser Hossain
            </h4>
            
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-mono leading-relaxed mb-3 xs:mb-4 sm:mb-6 px-2 sm:px-0">
              A passionate developer from India who believes in the power of code to transform ideas into reality. 
              My journey in the digital realm spans across various technologies, always with an eye for innovation 
              and excellence.
            </p>
            
            <p className="text-xs xs:text-sm sm:text-base md:text-lg text-muted-foreground font-mono leading-relaxed mb-4 xs:mb-5 sm:mb-6 px-2 sm:px-0">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or thinking about the next big idea. I thrive in collaborative environments and love turning complex 
              problems into elegant solutions.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 px-2 sm:px-0">
              <div className="bg-card border border-border rounded-lg px-3 sm:px-4 py-2 flex items-center overflow-hidden">
                <span className="text-primary font-mono text-xs xs:text-sm flex-shrink-0">📍 Location:</span>
                <span className="text-foreground ml-2 text-xs xs:text-sm truncate">India</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-3 sm:px-4 py-2 flex items-center overflow-hidden">
                <span className="text-primary font-mono text-xs xs:text-sm flex-shrink-0">📧 Email:</span>
                <span className="text-foreground ml-2 text-xs xs:text-sm truncate">hussainmubashir445@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 xs:gap-4 sm:gap-4 px-2 xs:px-0">
              {traits.map((trait, index) => (
                <Card 
                  key={index}
                  className="bg-card border border-border hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-glow-primary h-full"
                >
                  <CardContent className="p-3 xs:p-4 sm:p-6 text-center">
                    <div 
                      className="mb-2 xs:mb-3 sm:mb-4 animate-float flex justify-center" 
                      style={{ 
                        '--animation-delay': `${index * 0.2}s`,
                        animationDelay: `var(--animation-delay)`,
                      } as React.CSSProperties}
                    >
                      <div className="text-2xl xs:text-3xl sm:text-4xl">
                        {trait.icon}
                      </div>
                    </div>
                    <h6 className="font-rajdhani font-bold text-foreground mb-2 sm:mb-3 text-xs xs:text-sm sm:text-base">
                      {trait.title}
                    </h6>
                    <p className="text-muted-foreground font-mono text-xs leading-relaxed">
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