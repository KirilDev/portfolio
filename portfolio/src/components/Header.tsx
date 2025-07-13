
import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleScheduleMeeting = () => {
    window.open(personalInfo.calendlyUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-display font-semibold text-primary">
            it's Kirill
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
           {/**  <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Experience
            </button>*/}
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
              <button 
              onClick={() => window.open('https://www.youtube.com/@kirill_akita', '_blank')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              YouTube
            </button>
               <button 
              onClick={() => window.open('https://www.linkedin.com/in/kirils-luscins/', '_blank')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </button>
            <button 
              onClick={() => window.open('https://strava.app.link/a2OLVYY1WUb', '_blank')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              Strava
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
            <button 
              onClick={handleScheduleMeeting}
              className="btn-primary flex items-center gap-2"
            >
              <Calendar size={16} />
              Schedule Meeting
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
          {/*   <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </button>*/}
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>

            <button 
              onClick={() => window.open('https://www.youtube.com/@kirill_akita', '_blank')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              YouTube
            </button>
               <button 
              onClick={() => window.open('https://www.linkedin.com/in/kirils-luscins/', '_blank')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              LinkedIn
            </button>
            <button 
              onClick={() => window.open('https://strava.app.link/a2OLVYY1WUb', '_blank')}
              className="text-left text-foreground hover:text-primary transition-colors duration-200"
            >
              Strava
            </button>

            <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
              <button 
                onClick={handleScheduleMeeting}
                className="btn-primary flex items-center gap-2 justify-center mt-4"
              >
                <Calendar size={16} />
                Schedule Meeting
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
