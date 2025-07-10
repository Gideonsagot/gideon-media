
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Gideon Media offer?",
      answer: "We offer comprehensive digital marketing and web development services including Meta Ads setup, Shopify development, website creation, Pinterest marketing, and strategic advertising campaigns. Our goal is to help businesses establish a strong online presence and drive growth."
    },
    {
      question: "How long does it take to set up Meta Ads campaigns?",
      answer: "Meta Ads setup typically takes 3-5 business days. This includes campaign strategy development, ad creative design, audience targeting setup, and initial optimization. We provide ongoing monitoring and optimization to ensure maximum ROI."
    },
    {
      question: "Do you provide ongoing support after website launch?",
      answer: "Yes! We offer comprehensive post-launch support including regular updates, security monitoring, performance optimization, and technical assistance. Our support packages are tailored to meet your specific needs and budget."
    },
    {
      question: "Can you help migrate my existing store to Shopify?",
      answer: "Absolutely! We specialize in Shopify migrations from various platforms including WooCommerce, Magento, and other e-commerce solutions. We ensure data integrity, SEO preservation, and minimal downtime during the migration process."
    },
    {
      question: "What makes your advertising strategy different?",
      answer: "Our advertising approach is data-driven and tailored to each business. We conduct thorough market research, create compelling ad creatives, and use advanced targeting techniques. We focus on ROI optimization and provide detailed performance reports."
    },
    {
      question: "How do you measure the success of marketing campaigns?",
      answer: "We track key performance indicators (KPIs) including conversion rates, click-through rates, cost per acquisition, return on ad spend (ROAS), and overall ROI. We provide regular reports with actionable insights and recommendations."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes - from startups to established enterprises. Our services are scalable and can be customized to fit different budgets and requirements."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-based and depends on the scope of work. We offer transparent pricing with no hidden fees. Contact us for a free consultation and custom quote based on your specific needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our digital marketing and web development services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4 border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardHeader 
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </CardTitle>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              {openFAQ === index && (
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="https://wa.me/2347067133828?text=Hi, I have a question about your services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-block"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
