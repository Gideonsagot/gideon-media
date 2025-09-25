import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export const useSEO = ({ title, description, canonical, schema }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }
    
    // Add schema markup
    if (schema) {
      const existingSchema = document.querySelector('script[type="application/ld+json"][data-page-schema]');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
    
    // Cleanup function
    return () => {
      const pageSchema = document.querySelector('script[type="application/ld+json"][data-page-schema]');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [title, description, canonical, schema]);
};