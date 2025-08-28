
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: t('header.home'), href: '/' },
    { label: t('header.about'), href: '/about' },
    { label: t('header.services'), href: '/services' },
    { label: t('header.portfolio'), href: '/portfolio' },
    { label: t('header.testimonials'), href: '/testimonials' },
    { label: t('header.contact'), href: '/contact' },
    { label: t('header.help'), href: '/help' },
  ];

  const navigateToPage = (href: string) => {
    window.location.href = href;
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Gideon Media
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigateToPage(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageSelector />
            <Button 
              onClick={() => navigateToPage('/contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              {t('header.getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <div className="flex items-center gap-2">
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
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigateToPage(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => navigateToPage('/contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4"
              >
                {t('header.getQuote')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
