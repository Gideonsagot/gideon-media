export interface BlogPost {
  id: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '5-website-mistakes',
    title: '5 Common Website Mistakes That Are Costing Your Small Business Customers',
    description: 'Is your website turning customers away? Learn the 5 most common mistakes small businesses make and how to fix them, from slow speed to poor SEO.',
    author: 'Gideon Media',
    publishDate: '2025-01-10',
    readTime: '9 min read',
    category: 'Web Design',
    content: `
      <article>
        <p>Your website is your digital storefront, but is it quietly turning customers away? Many small businesses invest in a beautiful design but overlook critical mistakes that hurt user trust and kill conversions. At Gideon Media, we've seen it all. Here are five of the most common website mistakes and how to fix them.</p>

        <h2>1. No Clear Call to Action (CTA)</h2>
        <p><strong>The Mistake:</strong> A visitor lands on your site, likes what they see, but has no idea what to do next. There are no clear buttons or links guiding them to "Contact Us," "Buy Now," or "Learn More."</p>
        <p><strong>The Fix:</strong> Every page should guide the user toward a next step. A prominent "Contact Us" button is essential. If you're unsure how to guide your visitors, a professional review can make all the difference. You can <a href="https://gideonmedia.netlify.app/contact" style="color: hsl(var(--primary)); text-decoration: underline;">get in touch with us</a> for a free consultation.</p>

        <h2>2. Ignoring Search Engine Optimization (SEO)</h2>
        <p><strong>The Mistake:</strong> You have a great website, but no one can find it on Google. You're invisible to potential customers who are actively searching for your services.</p>
        <p><strong>The Fix:</strong> SEO is the process of making your site visible on search engines. It's the single best way to attract high-quality traffic. As we explained in our guide on <a href="https://gideonmedia.netlify.app/blog/why-seo-matters" style="color: hsl(var(--primary)); text-decoration: underline;">why SEO is the best investment for small businesses</a>, it's a long-term asset that builds trust and credibility.</p>

        <h2>3. Slow Page Load Speed</h2>
        <p><strong>The Mistake:</strong> Your pages take more than a few seconds to load. In 2025, users expect instant results. A slow website leads to frustration and high bounce rates.</p>
        <p><strong>The Fix:</strong> Optimizing images, leveraging browser caching, and using a modern web host are key. A fast website is a core part of the <a href="https://gideonmedia.netlify.app/services" style="color: hsl(var(--primary)); text-decoration: underline;">professional digital marketing services</a> we provide to ensure a great user experience.</p>

        <h2>4. Not Being Mobile-Friendly</h2>
        <p><strong>The Mistake:</strong> Your website looks great on a desktop but is difficult to navigate on a phone. Text is tiny, buttons are hard to press, and users have to pinch and zoom constantly.</p>
        <p><strong>The Fix:</strong> With over half of all web traffic coming from mobile devices, a responsive, mobile-first design is non-negotiable. Every element must be easily accessible on a small screen.</p>

        <h2>5. Lack of Trust Signals</h2>
        <p><strong>The Mistake:</strong> Your site has no testimonials, case studies, or a clear "About Us" page. Visitors have no reason to trust you over a competitor.</p>
        <p><strong>The Fix:</strong> Build trust by being transparent. Showcase reviews from happy clients and tell your story. Let people know who is behind the business. At <a href="https://gideonmedia.netlify.app/" style="color: hsl(var(--primary)); text-decoration: underline;">Gideon Media</a>, we believe trust is the foundation of any successful business relationship.</p>

        <h2>Ready to Fix These Mistakes?</h2>
        <p>Don't let these common errors cost you another customer. A professional website audit can identify exactly what's holding your site back and provide a clear roadmap to fix it. Your website should be your best salesperson—let's make sure it's working for you, not against you.</p>
      </article>
    `
  },
  {
    id: '5-signs-you-need-seo',
    title: '5 Signs Your Business Needs SEO',
    description: 'Is your website invisible to customers? Learn the 5 signs your business is losing money by ignoring SEO and how to fix it.',
    author: 'Gideon Media',
    publishDate: '2025-01-15',
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
  },
  {
    id: 'why-seo-matters',
    title: 'Why SEO is the Best Investment for Small Businesses in 2025',
    description: 'Learn why SEO is a crucial long-term investment for small businesses. Drive traffic, build trust, and get a better ROI than paid ads.',
    author: 'Gideon Media',
    publishDate: '2025-01-20',
    readTime: '7 min read',
    category: 'SEO',
    content: `
      <article>
        <p>Tired of paying for ads that don't deliver? If you're a small business owner watching your advertising budget disappear with little to show for it, you're not alone. But what if there was a way to attract customers that compounds over time, building value with every passing month? That's the power of SEO—and in 2025, it's more important than ever.</p>

        <h2>SEO Builds Trust and Credibility</h2>
        <p>When someone searches for "plumber near me" or "best accounting software," they're actively looking for a solution. They have intent. Unlike paid ads that interrupt, SEO brings in people who are already interested in what you offer.</p>
        <p>Here's what makes this powerful: appearing at the top of organic search results signals to customers that you're established, credible, and trusted by Google. Studies show that users trust organic results far more than paid ads. When your business consistently appears in search results, you're not just getting traffic—you're building brand authority in your industry.</p>
        <p>Think of SEO as your 24/7 sales representative. While you sleep, while you're with other customers, while you're closed for the holidays—SEO keeps working, bringing qualified leads to your door.</p>

        <h2>A Compounding Asset, Not a Temporary Fix</h2>
        <p>The biggest difference between SEO and paid advertising? SEO is an investment that grows over time, while ads are an expense that stops the moment you stop paying.</p>
        <p>Consider this scenario: You spend $1,000 on Google Ads this month. You get clicks, maybe some customers, and then—when the month ends and your budget runs out—the traffic stops completely. Next month, you need to spend another $1,000 to keep the same level of visibility.</p>
        <p>Now compare that to SEO: You invest $1,000 in optimizing your website, creating quality content, and building authority. That work continues delivering results month after month. Your rankings improve, more pages get indexed, your domain authority grows. Six months later, that initial investment is still generating traffic and leads—without spending another dollar.</p>
        <p>This compounding effect is why businesses that commit to SEO often see their cost-per-acquisition decrease over time, while their paid advertising competitors face rising costs and increasing competition.</p>
        <p>In 2025, with AI-generated content flooding the internet and ad costs continuing to rise, the businesses that invest in sustainable, strategic SEO will have a massive competitive advantage.</p>

        <h2>Get Started with Your SEO Strategy</h2>
        <p>The best time to start SEO was yesterday. The second-best time is today. Whether you're just launching your website or you've been online for years, there's always opportunity to improve your search visibility and capture more of your target market.</p>
        <p>Start by understanding where you stand: What keywords do you currently rank for? Where are your competitors appearing that you're not? What does your website experience look like on mobile? These foundational questions will guide your strategy moving forward.</p>
        <p>Remember, SEO isn't a one-time project—it's an ongoing strategy. But unlike recurring ad spend, every dollar you invest in SEO builds on what came before, creating a compounding return that grows your business year after year.</p>

        <h2>Ready to Turn Your Website Into a Growth Engine?</h2>
        <p>Don't let another month pass while your competitors capture the customers who should be finding you. At Gideon Media, we specialize in helping small businesses build sustainable SEO strategies that deliver real results. Stop renting visibility through ads and start owning your presence in search results.</p>
      </article>
    `
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === slug);
};
