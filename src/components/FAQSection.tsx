
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 1-3 weeks depending on complexity. Shopify stores typically take 1-2 weeks, and custom business websites take 2-3 weeks. We'll give you a clear timeline before we start."
  },
  {
    question: "How much does a website cost?",
    answer: "Our websites start from $500 for small business sites and $800+ for Shopify stores. We provide transparent, fixed-price quotes based on your specific needs — no hidden fees or surprises."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! Every project includes post-launch support. We also offer monthly maintenance packages for updates, security monitoring, and performance optimization."
  },
  {
    question: "Can you help with both a website and marketing?",
    answer: "Absolutely — that's our sweet spot. We build websites designed to convert, then drive targeted traffic through Meta Ads, Pinterest marketing, and social media. It's the full growth package."
  },
  {
    question: "What if I already have a website but it's not getting results?",
    answer: "We can audit your existing site, identify what's holding it back, and either optimize it or rebuild it for better conversions. Many of our clients come to us with underperforming websites."
  },
  {
    question: "Do you guarantee results?",
    answer: "Yes. We guarantee results — or we continue working until we achieve measurable improvements. We succeed when you succeed, and we stand behind every project we take on."
  },
  {
    question: "What platforms do you build on?",
    answer: "We build on Shopify, WordPress, Squarespace, Wix, Webflow, and custom solutions. We'll recommend the best platform for your business goals and budget."
  },
  {
    question: "How do I get started?",
    answer: "Simply book a free strategy call with us. We'll discuss your business goals, recommend the best approach, and provide a clear quote — no pressure, no obligation."
  }
];

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-3 border border-border hover:border-primary/20 transition-colors duration-300">
              <CardHeader 
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="cursor-pointer hover:bg-muted/50 transition-colors duration-200 py-4"
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground pr-4">
                    {faq.question}
                  </CardTitle>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              {openFAQ === index && (
                <CardContent className="pt-0 pb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
