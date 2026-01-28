import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Calendar, HelpCircle, Calculator, MapPin } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Itinerary', href: '#itinerary' },
    { label: 'Contact', href: '#contact' },
  ];

  const planYourTripLinks = [
    { label: 'Wildlife Calendar', href: '/calendar', icon: Calendar, description: 'Best times to see wildlife' },
    { label: 'Safari Quiz', href: '/quiz', icon: HelpCircle, description: 'Find your perfect safari' },
    { label: 'Instant Quote', href: '/quote', icon: Calculator, description: 'Get pricing instantly' },
    { label: 'Destinations Guide', href: '/destinations', icon: MapPin, description: 'Explore all destinations' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    setIsMobileMenuOpen(false);

    // If on homepage, scroll directly
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate('/' + href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 shadow-soft'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">A</span>
            </div>
            <span className={`font-display text-2xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Awili<span className="text-primary">Safaris</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Plan Your Trip Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  Plan Your Trip
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-background border border-border shadow-lg z-50">
                {planYourTripLinks.map((link) => (
                  <DropdownMenuItem key={link.label} asChild>
                    <Link 
                      to={link.href}
                      className="flex items-start gap-3 p-3 cursor-pointer"
                    >
                      <link.icon className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <div className="font-medium">{link.label}</div>
                        <div className="text-xs text-muted-foreground">{link.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+254700000000"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              +254 700 000 000
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-gold text-sm py-3 px-6"
            >
              Book Safari
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-border animate-fade-in-up">
            <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3 text-foreground font-medium hover:text-primary transition-colors border-b border-border/50"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Plan Your Trip Section - Mobile */}
              <div className="py-3 border-b border-border/50">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Plan Your Trip</span>
              </div>
              {planYourTripLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-3 py-3 text-foreground font-medium hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4 text-primary" />
                  {link.label}
                </Link>
              ))}
              
              <a
                href="tel:+254700000000"
                className="flex items-center gap-2 py-3 text-foreground font-medium"
              >
                <Phone className="w-4 h-4" />
                +254 700 000 000
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-gold text-center mt-4 py-3"
              >
                Book Safari
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
