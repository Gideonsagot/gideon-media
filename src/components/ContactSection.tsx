import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
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
    'Shopify E-commerce Website',
    'Small Business Website',
    'Website Redesign / Optimization',
    'Meta Ads (Facebook & Instagram)',
    'Social Media Marketing',
    'Pinterest Marketing',
    'Full Website + Marketing Package'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'Gideonmedia@hotmail.com',
      action: 'mailto:Gideonmedia@hotmail.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 706 713 3828',
      action: 'tel:+2347067133828'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: 'Chat with us instantly',
      action: 'https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Gideon%20Media'
    }
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
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Gideon Media! I'm interested in: ${formData.service || 'your services'}. ${formData.message || ''}`
    );
    window.open(`https://wa.me/2347067133828?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Let's Talk
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book a free strategy call and let's discuss how we can build you a website and marketing strategy that drives real results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-border">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  Tell Us About Your Project
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your company name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">What do you need?</label>
                    <select
                      id="service" name="service" value={formData.service} onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Project Details *</label>
                    <Textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} rows={4} placeholder="Tell us about your project, goals, and timeline..." />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" disabled={isSubmitting} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      {isSubmitting ? (
                        <><div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>Sending...</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" />Send Message</>
                      )}
                    </Button>
                    <Button type="button" variant="outline" onClick={openWhatsApp} className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Instead
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
                    {...(info.title === 'WhatsApp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <info.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{info.title}</div>
                      <div className="text-muted-foreground text-sm">{info.content}</div>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </CardContent>
              </Card>
            ))}

            {/* Quick CTA card */}
            <Card className="bg-primary text-primary-foreground border-0 mt-6">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Prefer to talk?</h3>
                <p className="text-sm text-primary-foreground/80 mb-4">Book a free 15-min strategy call. No commitment, no pressure.</p>
                <Button
                  onClick={() => window.open('https://wa.me/2347067133828?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20strategy%20call', '_blank')}
                  className="bg-white text-primary hover:bg-white/90 font-semibold w-full"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Book Free Call
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
