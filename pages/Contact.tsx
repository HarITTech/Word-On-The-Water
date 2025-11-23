import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-navy py-20 text-center text-cream">
        <h1 className="font-serif text-5xl mb-4">Get in Touch</h1>
        <p className="text-lg opacity-80">Prefer human contact? We do too.</p>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl text-navy mb-6">Find Us</h2>
              <p className="text-navy/80 mb-4 leading-relaxed">
                We’re moored on the Regent's Canal Towpath, just steps from Granary Square and Coal Drops Yard in King's Cross. Look for the low blue barge with the jazz playing.
              </p>
              <div className="flex items-start gap-3 text-navy font-medium">
                <MapPin className="text-oxblood mt-1" />
                <span>Regent’s Canal Towpath,<br/>Granary Square, King’s Cross,<br/>London N1C 4AA</span>
              </div>
            </div>

            <div className="h-px bg-navy/10 w-full"></div>

            <div>
              <h3 className="font-serif text-2xl text-navy mb-4">Contact Details</h3>
              <div className="space-y-4">
                 <a href="tel:+447976886982" className="flex items-center gap-3 text-navy/80 hover:text-oxblood transition-colors">
                   <Phone size={20} className="text-brass" />
                   <span>+44 7976 886 982 (Call Paddy)</span>
                 </a>
                 <a href="mailto:hello@wordonthewater.co.uk" className="flex items-center gap-3 text-navy/80 hover:text-oxblood transition-colors">
                   <Mail size={20} className="text-brass" />
                   <span>hello@wordonthewater.co.uk</span>
                 </a>
              </div>
            </div>

            <div className="h-px bg-navy/10 w-full"></div>

            <div>
              <h3 className="font-serif text-2xl text-navy mb-4">Socials</h3>
              <div className="flex gap-6">
                 <a href="#" className="p-3 bg-paper rounded-full text-navy hover:text-white hover:bg-navy transition-all"><Instagram /></a>
                 <a href="#" className="p-3 bg-paper rounded-full text-navy hover:text-white hover:bg-navy transition-all"><Facebook /></a>
                 <a href="#" className="p-3 bg-paper rounded-full text-navy hover:text-white hover:bg-navy transition-all"><Twitter /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border-t-4 border-brass">
            <h2 className="font-serif text-3xl text-navy mb-6">Send a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded text-center animate-fade-in">
                <h3 className="font-serif text-xl text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll get back to you as soon as we dock (usually within 48 hours).</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Name</label>
                  <input required type="text" className="w-full bg-paper border border-navy/10 rounded p-3 focus:outline-none focus:border-brass focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Email</label>
                  <input required type="email" className="w-full bg-paper border border-navy/10 rounded p-3 focus:outline-none focus:border-brass focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm uppercase tracking-wide text-navy/50 mb-2">Message</label>
                  <textarea required rows={5} className="w-full bg-paper border border-navy/10 rounded p-3 focus:outline-none focus:border-brass focus:bg-white transition-colors"></textarea>
                </div>
                
                <div className="pt-2">
                  <button type="submit" className="w-full bg-oxblood text-cream font-bold py-4 rounded hover:bg-red-900 transition-colors shadow-lg">
                    Send Message
                  </button>
                  <p className="text-center text-xs text-navy/40 mt-4">
                    This site is protected by reCAPTCHA and the Google Privacy Policy.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;