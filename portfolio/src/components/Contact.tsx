
import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const handleScheduleMeeting = () => {
    window.open(personalInfo.calendlyUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container-custom section-padding">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 animate-slide-up">
          Let's Connect
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                Get in Touch
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and creativity. Whether you're looking for a dedicated 
                team member or want to explore innovative ideas together, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail size={20} className="text-primary" />
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={20} className="text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <div className="bg-card p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-display font-semibold mb-6 text-primary">
                  Ready to Start Something Amazing?
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  Let's discuss your next project and bring your ideas to life.
                </p>
                
                <button 
                  onClick={handleScheduleMeeting}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Calendar size={16} />
                  Schedule an appointment
                </button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Usually responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
