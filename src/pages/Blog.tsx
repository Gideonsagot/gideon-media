import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '@/hooks/useSEO';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useSEO({
    title: 'Gideon Media Blog | Digital Marketing Insights & Tips',
    description: 'Stay updated with the latest digital marketing trends, SEO tips, and business growth strategies from Gideon Media experts.',
    canonical: 'https://gideonmedia.netlify.app/blog',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "name": "Gideon Media Blog",
          "description": "Stay updated with the latest digital marketing trends, SEO tips, and business growth strategies from Gideon Media experts.",
          "url": "https://gideonmedia.netlify.app/blog"
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
              "name": "Blog"
            }
          ]
        }
      ]
    }
  });

  const blogPosts = [
    {
      id: '5-signs-you-need-seo',
      title: '5 Signs Your Business Needs SEO',
      description: 'Is your website invisible to customers? Learn the 5 signs your business is losing money by ignoring SEO and how to fix it.',
      author: 'Gideon Media',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'SEO',
      excerpt: 'Discover the critical warning signs that indicate your business needs immediate SEO attention. From declining website traffic to poor search rankings, learn how to identify and fix these issues before they impact your bottom line.',
    }
  ];

  const handleReadMore = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Digital Marketing Insights
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay ahead of the curve with expert tips, strategies, and insights from our digital marketing specialists.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <Button 
                        onClick={() => handleReadMore(post.id)}
                        className="w-full mt-4"
                        variant="outline"
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert digital marketing advice tailored to your business needs.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;