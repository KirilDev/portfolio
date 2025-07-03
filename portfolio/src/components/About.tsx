
import React from 'react';
import { skills } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-slide-up">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate computer science student who believes technology can be a powerful force for creativity and positive change. My journey in tech started with curiosity and has evolved into a deep appreciation for crafting elegant solutions to complex problems.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI, experimenting with new frameworks, or collaborating on projects that bridge the gap between technology and human creativity.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always excited to connect with fellow creators, learn from experienced professionals, and contribute to meaningful projects that make a difference.
              </p>
            </div>
            
            <div className="animate-slide-up">
              <div className="bg-card p-6 rounded-xl shadow-lg card-hover">
                <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                  Skills & Technologies
                </h3>
                
                <div className="space-y-6">
                  {skills.map((skillCategory, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-foreground mb-3">
                        {skillCategory.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
