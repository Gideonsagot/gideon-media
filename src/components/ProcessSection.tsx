
import { ClipboardList, PenTool, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Strategy & Planning',
    description: 'We start by understanding your business, goals, and target audience. Then we create a clear roadmap for your website and marketing.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Development',
    description: 'We design and build your website (or marketing campaign) with conversion in mind — fast, mobile-friendly, and built to perform.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch & Growth',
    description: 'We launch your project, monitor performance, and continuously optimize to drive more traffic, leads, and revenue for your business.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            Simple & Transparent
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. We handle everything so you can focus on running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-border z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2 tracking-widest uppercase">Step {step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
