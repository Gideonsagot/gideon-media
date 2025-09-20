import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import UpworkIcon from './UpworkIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Meta Ads Setup',
    'Shopify Development', 
    'Website Development',
    'Pinterest Setup',
    'Ads Strategy',
    'Digital Marketing'
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/share/1CpvVeypZy/', 
      label: 'Facebook' 
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/pegotgideon', 
      label: 'Instagram' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/elakpa-gideon-0675112b9', 
      label: 'LinkedIn' 
    },
    { 
      icon: UpworkIcon, 
      href: 'https://www.upwork.com/freelancers/~0168e372c5f516c460', 
      label: 'Upwork Profile' 
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t text-card-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-primary mb-4">
              Gideon Media
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We Build. We Advertise. You Grow. Your trusted partner for digital 
              marketing and web development solutions that drive real results.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>Gideonmedia@hotmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+234 706 713 3828</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-primary" />
                <span>Digital Marketing Hub, Online</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-4">
              Follow us on social media for digital marketing tips and updates.
            </p>
            
            {/* Social Links with Upwork Highlight */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group ${
                    social.label === 'Upwork Profile' 
                      ? 'bg-green-500 hover:bg-green-600 ring-2 ring-green-300' 
                      : 'bg-muted hover:bg-primary'
                  }`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className={`w-5 h-5 ${
                    social.label === 'Upwork Profile'
                      ? 'text-white'
                      : 'text-muted-foreground group-hover:text-primary-foreground'
                  }`} />
                </a>
              ))}
            </div>

            {/* Featured Upwork CTA */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200 mb-4">
              <div className="flex items-center mb-2">
                <UpworkIcon className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-semibold text-green-800">Hire me on Upwork</span>
              </div>
              <p className="text-sm text-green-700 mb-3">
                Top-rated freelancer with 100% Job Success Score
              </p>
              <a
                href="https://www.upwork.com/freelancers/~0168e372c5f516c460"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center"
              >
                <UpworkIcon className="w-4 h-4 mr-2" />
                View Upwork Profile
              </a>
            </div>

            {/* Additional Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/2347067133828?text=Hi, I'm interested in your digital marketing services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
              <a
                href="mailto:gideonmedia@hotmail.com"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Gideon Media. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-muted-foreground text-sm">
              <button className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-primary transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
