
import React from 'react';
import { ArrowDown, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScheduleMeeting = () => {
    window.open(personalInfo.calendlyUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-warm-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cozy-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
            Hello, I'm <span className="text-primary">Kirill</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.title}
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToAbout}
              className="btn-secondary flex items-center gap-2"
            >
              Learn More
              <ArrowDown size={16} />
            </button>
            {/*<button
              onClick={handleScheduleMeeting}
              className="btn-primary flex items-center gap-2"
            >
              <Calendar size={16} />
              Schedule a Meeting
            </button>*/}
          </div>

          <div className="animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
