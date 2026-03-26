
import { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceKeys = ['shopify', 'smallBiz', 'redesign', 'metaAds', 'socialMedia', 'pinterest', 'fullPackage'];

  const contactInfo = [
    { icon: Mail, titleKey: 'contact.info.email', content: 'Gideonmedia@hotmail.com', action: 'mailto:Gideonmedia@hotmail.com' },
    { icon: Phone, titleKey: 'contact.info.call', content: '+1 (548) 599-8101', action: 'tel:+15485998101' },
    { icon: MessageCircle, titleKey: 'contact.info.whatsapp', content: t('contact.info.whatsappDesc'), action: 'https://wa.me/15485998101?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Gideon%20Media', external: true },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({ title: t('contact.success'), description: t('contact.successDesc') });
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      toast({ title: "Error", description: t('contact.error'), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Gideon Media! I'm interested in: ${formData.service || 'your services'}. ${formData.message || ''}`
    );
    window.open(`https://wa.me/15485998101?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className="text-center mb-14 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            {t('contact.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div 
          ref={formRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto transition-all duration-700"
          style={{ opacity: formVisible ? 1 : 0, transform: formVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">{t('contact.formTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">{t('contact.fullName')} *</label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder={t('contact.fullName')} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">{t('contact.email')} *</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">{t('contact.phone')}</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">{t('contact.company')}</label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder={t('contact.company')} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">{t('contact.service')}</label>
                    <select
                      id="service" name="service" value={formData.service} onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">{t('contact.selectService')}</option>
                      {serviceKeys.map((key) => (
                        <option key={key} value={t(`contact.services.${key}`)}>{t(`contact.services.${key}`)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">{t('contact.projectDetails')} *</label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} rows={4} placeholder={t('contact.projectPlaceholder')} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" disabled={isSubmitting} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      {isSubmitting ? (
                        <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>{t('contact.sending')}</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" />{t('contact.send')}</>
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={openWhatsApp} className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t('contact.whatsappInstead')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border hover:border-primary/20 hover:shadow-md transition-all duration-300">
                <CardContent className="p-5">
                  <a 
                    href={info.action}
                    className="flex items-center group"
                    {...(info.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{t(info.titleKey)}</div>
                      <div className="text-muted-foreground text-sm">{info.content}</div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary text-primary-foreground border-0 mt-6">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">{t('contact.preferTalk')}</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">{t('contact.preferTalkDesc')}</p>
                <Button
                  onClick={() => window.open('https://wa.me/15485998101?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call', '_blank')}
                  className="bg-white text-primary hover:bg-white/90 font-semibold w-full"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t('contact.bookFreeCall')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
