
import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const handleScheduleMeeting = () => {
    window.open(personalInfo.calendlyUrl, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
         {/*} <div className="mb-8">
            <h3 className="text-2xl font-display font-semibold text-primary mb-4">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your next project and bring your ideas to life.
            </p>
            <button 
              onClick={handleScheduleMeeting}
              className="btn-primary flex items-center gap-2 mx-auto"
            >
              <Calendar size={16} />
              Schedule Free Meeting
            </button>
          </div>
          */}
          {/*<div className="border-t border-border pt-8">*/}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xl font-display font-semibold text-primary">
                it's Kirill
              </div>
              <iframe src="https://webring.hackclub.com/embed.html" width="90px" height="60px" frameborder="0"></iframe>
              <a href="https://strava.com/athletes/131777085" class="strava-badge- strava-badge-follow" target="_blank"><img src="//badges.strava.com/echelon-sprite-48.png" alt="Strava" /></a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 fill-current" />
                <span>and lots of coffee</span>
              </div>
              
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved
              </div>
            </div>
          </div>
        </div>
     {/*</footer> */}
    </footer>
  );
};

export default Footer;
