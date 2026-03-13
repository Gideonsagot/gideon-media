
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const navigateToPage = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => navigate('/')} className="text-2xl font-bold text-primary">
              Gideon Media
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateToPage(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <Button 
              onClick={() => window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-lg font-semibold text-sm"
            >
              <Phone className="mr-2 h-4 w-4" />
              Free Strategy Call
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
            <nav className="flex flex-col p-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigateToPage(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left text-sm"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
              >
                <Phone className="mr-2 h-4 w-4" />
                Free Strategy Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
