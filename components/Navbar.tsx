import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Shop', path: '/shop' },
  { label: 'Events', path: '/events' },
  { label: 'Writing Group', path: '/writing-group' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg py-3' : 'bg-navy py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-brass group-hover:text-white transition-colors">
             <Anchor size={28} className="animate-float" />
          </div>
          <div className="flex flex-col">
            <span className="text-cream font-serif text-xl leading-none font-bold tracking-wide">
              Word on the Water
            </span>
            <span className="text-brass text-xs uppercase tracking-widest opacity-80">
              The London Bookbarge
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-brass ${
                location.pathname === item.path ? 'text-brass' : 'text-cream/90'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-cream hover:text-brass transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-navy z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24 px-6`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-serif text-2xl ${
                location.pathname === item.path ? 'text-brass' : 'text-cream'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 pt-8 border-t border-white/10">
             <p className="text-cream/60 text-sm font-sans">Open daily midday – 7PM</p>
             <p className="text-cream/60 text-sm font-sans mt-1">Granary Square, King's Cross</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;