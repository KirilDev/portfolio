
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { certificates } from '../data/portfolio';

const Certificates = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...Array.from(new Set(certificates.map(p => p.category)))];
  const filteredProjects = filter === 'all' 
    ? certificates
    : certificates.filter(p => p.category === filter);

  return (
    <section id="certificates" className="py-20 bg-card/50">
      <div className="container-custom section-padding">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-slide-up">
          Certificates
        </h2>
        {/*  <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div> */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((certificates, index) => (
            <div 
              key={certificates.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={certificates.imageUrl} 
                  alt={certificates.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-display font-semibold text-primary">
                  {certificates.title}
                </h3>
                <h3 className="text-xl font-display font-semibold text-primary">
                  {certificates.issuer}
                </h3>
                     <h3 className="text-xl font-display font-semibold text-primary">
                  {certificates.issueDate}
                </h3>
              </div>
                
              {/* <p className="text-muted-foreground mb-4 line-clamp-3">
                  {certificates.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificatest.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {certificates.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      +{certificates.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {certificates.demoUrl && (
                    <a
                      href={certificates.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {certificates.githubUrl && (
                    <a
                      href={certificates.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>*/} 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
