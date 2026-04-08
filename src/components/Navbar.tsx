import { useState, useEffect } from 'react';
import { Compass, User, Swords, Briefcase, Award, Mail, Menu, X, Anchor } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Compass },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Swords },
    { name: 'Experience', href: '#experience', icon: Anchor },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Certs', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-ocean-dark/90 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gold/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#home" className="flex items-center gap-2 group">
          {/* Skull & Crossbones SVG */}
          <svg className="w-8 h-8 text-gold group-hover:text-straw transition-colors" viewBox="0 0 64 64" fill="currentColor">
            <circle cx="32" cy="24" r="16" />
            <circle cx="25" cy="21" r="4" fill="#070d1f" />
            <circle cx="39" cy="21" r="4" fill="#070d1f" />
            <path d="M26 30 Q32 36 38 30" stroke="#070d1f" strokeWidth="2" fill="none" />
            <rect x="4" y="40" width="56" height="6" rx="3" />
            <rect x="29" y="36" width="6" height="24" rx="3" />
          </svg>
          <span className="text-xl md:text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-sunset">
            Rawhan
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1.5 text-sm font-bold tracking-wide transition-all duration-300 relative
                  ${isActive ? 'text-gold' : 'text-white/60 hover:text-white'}
                `}
              >
                <Icon size={14} />
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-sunset rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-ocean-dark/95 backdrop-blur-xl border-b border-gold/10 lg:hidden flex flex-col px-6 py-4 gap-3 shadow-2xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 font-bold py-2 transition-colors
                  ${isActive ? 'text-gold' : 'text-white/60 hover:text-white'}
                `}
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
