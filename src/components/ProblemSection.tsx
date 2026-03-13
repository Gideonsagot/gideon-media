
import { AlertTriangle, X } from 'lucide-react';

const problems = [
  {
    title: 'Your Website Looks Outdated',
    description: "First impressions matter. An old, clunky website makes visitors leave in seconds — and they won't come back.",
  },
  {
    title: "Your Website Doesn't Convert",
    description: "You're getting traffic but no leads, no sales, no inquiries. Your website isn't doing its job.",
  },
  {
    title: 'You Have Zero Online Visibility',
    description: "Potential customers can't find you on Google. Your competitors are showing up — and you're invisible.",
  },
  {
    title: "You're Struggling to Get Customers Online",
    description: "You know digital marketing works, but you don't have the time, skills, or strategy to make it happen.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <AlertTriangle className="h-4 w-4" />
            Sound Familiar?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Is Your Business Losing Customers Online?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses struggle with these problems — and they're costing you money every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-destructive/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 rounded-lg p-2 flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <X className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-foreground">
            If any of this sounds like you — <span className="text-primary">we can fix it.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
