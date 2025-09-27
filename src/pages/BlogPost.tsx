import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Blog post data - in a real app, this would come from a CMS or API
  const blogPost = {
    id: '5-signs-you-need-seo',
    title: '5 Signs Your Business Needs SEO',
    description: 'Is your website invisible to customers? Learn the 5 signs your business is losing money by ignoring SEO and how to fix it.',
    author: 'Gideon Media',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'SEO',
    content: `
      <article>
        <p>In today's digital landscape, having a website isn't enough. If your potential customers can't find you on Google, you're missing out on countless opportunities. Here are five clear signs that your business desperately needs SEO.</p>

        <h2>1. Your Website Traffic Has Plateaued or Declined</h2>
        <p>If your Google Analytics shows flat or declining organic traffic, it's a red flag. Search engines are constantly evolving, and what worked last year might not work today. Without ongoing SEO efforts, your rankings will inevitably slip as competitors optimize their sites.</p>

        <h2>2. Your Competitors Appear Above You in Search Results</h2>
        <p>When you search for your own products or services, do competitors consistently appear above you? This means they're capturing customers who should be finding you first. Every click they get is potential revenue you're losing.</p>

        <h2>3. You're Not Ranking for Your Target Keywords</h2>
        <p>If you're not appearing on the first page of Google for terms your customers are searching for, you're invisible to most potential clients. Studies show that 75% of users never scroll past the first page of search results.</p>

        <h2>4. Your Local Business Isn't Showing Up in "Near Me" Searches</h2>
        <p>For local businesses, appearing in local search results is crucial. If you're not optimized for local SEO, you're missing out on customers who are ready to buy and just looking for a nearby provider.</p>

        <h2>5. Your Website Isn't Mobile-Friendly or Fast</h2>
        <p>Google prioritizes mobile-friendly, fast-loading websites. If your site takes more than 3 seconds to load or doesn't work well on phones, Google will rank you lower, and users will leave before they even see what you offer.</p>

        <h2>The Cost of Ignoring SEO</h2>
        <p>Every day without proper SEO is money left on the table. Your competitors are actively working to outrank you, capture your potential customers, and grow their market share at your expense.</p>

        <h2>What You Can Do Right Now</h2>
        <p>Start with these immediate actions:</p>
        <ul>
          <li>Audit your current keyword rankings</li>
          <li>Optimize your Google Business Profile</li>
          <li>Ensure your website is mobile-responsive</li>
          <li>Create valuable, keyword-rich content</li>
          <li>Build quality backlinks from reputable sites</li>
        </ul>

        <h2>Ready to Take Action?</h2>
        <p>Don't let another day pass while your competitors capture your potential customers. At Gideon Media, we specialize in helping businesses like yours dominate search results and grow their online presence.</p>
      </article>
    `
  };

  // 404 handling
  if (slug !== '5-signs-you-need-seo') {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  useSEO({
    title: `${blogPost.title} | Gideon Media`,
    description: blogPost.description,
    canonical: `https://gideonmedia.netlify.app/blog/${blogPost.id}`,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": blogPost.title,
          "description": blogPost.description,
          "author": {
            "@type": "Organization",
            "name": "Gideon Media"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Gideon Media",
            "logo": {
              "@type": "ImageObject",
              "url": "https://gideonmedia.netlify.app/path/to/your/logo.png"
            }
          },
          "datePublished": blogPost.publishDate,
          "dateModified": blogPost.publishDate,
          "url": `https://gideonmedia.netlify.app/blog/${blogPost.id}`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://gideonmedia.netlify.app/blog/${blogPost.id}`
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://gideonmedia.netlify.app/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://gideonmedia.netlify.app/blog"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": blogPost.title
            }
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I know if my business needs SEO?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Your business needs SEO if you're experiencing declining website traffic, competitors outrank you in search results, you're not visible for target keywords, local searches don't show your business, or your website isn't mobile-friendly and fast."
              }
            },
            {
              "@type": "Question",
              "name": "What happens if I ignore SEO for my business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ignoring SEO means losing potential customers to competitors, decreased website visibility, missed revenue opportunities, and falling behind in search rankings while competitors capture your market share."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can SEO improve my search rankings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "SEO results typically take 3-6 months to show significant improvements. However, some changes like technical fixes and local SEO optimizations can show results faster, while competitive keyword rankings may take longer."
              }
            }
          ]
        }
      ]
    }
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogPost.title,
        text: blogPost.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The blog post link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {blogPost.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {blogPost.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {blogPost.description}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-t border-b">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(blogPost.publishDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Boost Your SEO?</h3>
            <p className="text-muted-foreground mb-6">
              Don't let your competitors capture your potential customers. Get expert SEO help today.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90"
            >
              Get Your Free SEO Consultation
            </Button>
          </div>
        </article>

        {/* Related Articles Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 mt-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Related Articles</h2>
            <div className="text-center">
              <p className="text-muted-foreground mb-6">More SEO insights coming soon!</p>
              <Button variant="outline" onClick={() => navigate('/blog')}>
                View All Blog Posts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;