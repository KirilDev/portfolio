import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container-custom section-padding">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-slide-up">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className="bg-card p-6 md:p-8 rounded-xl shadow-lg card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-display font-semibold text-primary mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-medium text-foreground mb-3">
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm text-muted-foreground">
                    <div className="flex items-center gap-1 mb-1">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="text-muted-foreground flex">
                        <span className="text-primary mr-3">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;