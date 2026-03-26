import { Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import UpworkIcon from './UpworkIcon';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    'Shopify E-commerce Websites',
    'Small Business Websites', 
    'Website Optimization',
    'Meta Ads Management',
    'Social Media Marketing',
    'Pinterest Marketing'
  ];

  const quickLinks = [
    { label: t('header.home'), href: '/' },
    { label: t('header.about'), href: '/about' },
    { label: t('header.services'), href: '/services' },
    { label: t('header.portfolio'), href: '/portfolio' },
    { label: t('header.blog'), href: '/blog' },
    { label: t('header.contact'), href: '/contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1CpvVeypZy/', label: 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/elakpa-gideon-0675112b9', label: 'LinkedIn' },
    { icon: UpworkIcon, href: 'https://www.upwork.com/freelancers/~0168e372c5f516c460', label: 'Upwork Profile' }
  ];

  return (
    <footer className="bg-card border-t text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">Gideon Media</div>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{t('footer.description')}</p>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span>Gideonmedia@hotmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span>+234 706 713 3828</span>
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span>{t('footer.worldwide')}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => navigate(link.href)} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">{t('footer.ourServices')}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <button onClick={() => navigate('/services')} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">{t('footer.connectWithUs')}</h3>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
                    social.label === 'Upwork Profile' ? 'bg-green-500 hover:bg-green-600' : 'bg-muted hover:bg-primary'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className={`w-5 h-5 ${
                    social.label === 'Upwork Profile' ? 'text-white' : 'text-muted-foreground group-hover:text-primary-foreground'
                  }`} />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/15485998101?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t('footer.whatsappUs')}
              </a>
              <a
                href="mailto:gideonmedia@hotmail.com"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm transition-all hover:shadow-lg inline-flex items-center justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t('footer.emailUs')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Gideon Media. {t('footer.rights')}
            </div>
            <div className="flex items-center space-x-6 text-muted-foreground text-sm">
              <button className="hover:text-primary transition-colors">{t('footer.privacy')}</button>
              <button className="hover:text-primary transition-colors">{t('footer.terms')}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
