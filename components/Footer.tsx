import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t-4 border-oxblood">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-brass mb-2">Word on the Water</h3>
            <p className="text-cream/80 text-sm leading-relaxed">
              London’s floating bookshop. Books, music, and community on the Regent's Canal.
              Step aboard Dianti and get lost in a story.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-cream/60 hover:text-brass transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-cream/60 hover:text-brass transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-cream/60 hover:text-brass transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white mb-2">Visit Us</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-brass shrink-0" />
                <span>Regent’s Canal Towpath,<br/>Granary Square, King’s Cross,<br/>London N1C 4AA</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-brass shrink-0" />
                <span>Midday – 7PM Daily<br/><span className="text-xs opacity-70">(Closed Christmas Day)</span></span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white mb-2">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brass shrink-0" />
                <a href="tel:+447976886982" className="hover:text-white transition-colors">+44 7976 886 982</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brass shrink-0" />
                <a href="mailto:hello@wordonthewater.co.uk" className="hover:text-white transition-colors">hello@wordonthewater.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg text-white mb-2">Explore</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><Link to="/shop" className="hover:text-brass transition-colors">Shop Online</Link></li>
              <li><Link to="/events" className="hover:text-brass transition-colors">Events Calendar</Link></li>
              <li><Link to="/writing-group" className="hover:text-brass transition-colors">Writing Group</Link></li>
              <li><Link to="/about" className="hover:text-brass transition-colors">Our Story</Link></li>
              <li><a href="#" className="hover:text-brass transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h4 className="font-serif text-xl text-white">Join the Captain's Log</h4>
            <p className="text-sm text-cream/70">Subscribe for event updates, new arrivals, and tales from the towpath.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white/10 border border-white/20 rounded px-4 py-2 text-cream placeholder-cream/40 focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass"
              />
              <button className="bg-brass hover:bg-brass/90 text-navy font-bold px-6 py-2 rounded transition-colors">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-cream/40 pt-8">
          <p>&copy; {currentYear} Word on the Water. All rights reserved. | Built with AI Vibing.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;