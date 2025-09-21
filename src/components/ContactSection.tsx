import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Clock,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    t('services.metaAds.title'),
    t('services.shopify.title'),
    t('services.website.title'),
    t('services.pinterest.title'),
    t('services.adsStrategy.title'),
    'Full Digital Marketing Package'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.contactMethods.email'),
      content: 'Gideonmedia@hotmail.com',
      action: 'mailto:Gideonmedia@hotmail.com',
      subtitle: 'For fast response'
    },
    {
      icon: Phone,
      title: t('contact.contactMethods.phone'),
      content: '+234 706 713 3828',
      action: 'tel:+2347067133828'
    },
    {
      icon: MessageCircle,
      title: t('contact.contactMethods.whatsapp'),
      content: t('contact.contactMethods.whatsappDesc'),
      action: 'https://wa.me/2347067133828?text=Hi, I\'m interested in your digital marketing services'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: t('contact.success'),
        description: t('contact.successDesc'),
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: t('contact.error'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Gideon Media! I'm interested in your digital marketing services. I'd like to discuss: ${formData.service || 'various services'}`
    );
    window.open(`https://wa.me/2347067133828?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {t('contact.formTitle')}
                </CardTitle>
                <p className="text-muted-foreground">
                  {t('contact.formSubtitle')}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.fullName')} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.email')} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.phone')}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.company')}
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">{t('contact.selectService')}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.projectDetails')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full"
                      placeholder={t('contact.projectPlaceholder')}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t('contact.sending')}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t('contact.send')}
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={openWhatsApp}
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {t('contact.whatsapp')}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <a 
                      href={info.action}
                      className="flex items-center group"
                      {...(info.title === 'WhatsApp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.title}
                        </div>
                        <div className="text-muted-foreground">
                          {info.content}
                          {info.subtitle && (
                            <div className="text-xs text-primary mt-1 font-medium">{info.subtitle}</div>
                          )}
                        </div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t('contact.businessHours.title')}</div>
                    <div className="text-muted-foreground">{t('contact.businessHours.subtitle')}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{t('contact.businessHours.monday')}</span>
                    <span>{t('contact.businessHours.mondayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.businessHours.saturday')}</span>
                    <span>{t('contact.businessHours.saturdayTime')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.businessHours.sunday')}</span>
                    <span>{t('contact.businessHours.sundayTime')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Guarantee */}
            <Card className="shadow-md bg-green-50/50 border-green-200/50 dark:bg-green-950/20 dark:border-green-800/30">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="text-green-600 dark:text-green-400 mr-2" size={24} />
                  <div className="font-semibold text-green-800 dark:text-green-300">{t('contact.guarantee.title')}</div>
                </div>
                <p className="text-green-700 dark:text-green-400 text-sm">
                  {t('contact.guarantee.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
