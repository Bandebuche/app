import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "The Future of Minimalist Architecture",
    excerpt: "Exploring how less becomes more in modern design philosophy and its impact on sustainability.",
    date: "December 15, 2024",
    category: "Design",
    readTime: "5 min read"
  },
  {
    title: "Glass and Light: Creating Transparency in Urban Spaces",
    excerpt: "How contemporary glass architecture shapes our relationship with natural light and open environments.",
    date: "December 10, 2024",
    category: "Innovation",
    readTime: "7 min read"
  },
  {
    title: "Sustainable Materials in Luxury Residential Design",
    excerpt: "Bridging the gap between premium aesthetics and environmental responsibility in high-end projects.",
    date: "December 5, 2024",
    category: "Sustainability",
    readTime: "6 min read"
  },
  {
    title: "Geometric Brutalism: Breaking the Mold",
    excerpt: "Redefining brutalist principles for contemporary spaces that challenge conventional thinking.",
    date: "November 28, 2024",
    category: "Architecture",
    readTime: "8 min read"
  },
  {
    title: "The Psychology of Space: How Design Influences Behavior",
    excerpt: "Understanding how architectural choices impact mental health and productivity in built environments.",
    date: "November 20, 2024",
    category: "Design",
    readTime: "6 min read"
  },
  {
    title: "Technology Integration in Modern Architecture",
    excerpt: "Seamlessly blending smart systems with timeless design without compromising aesthetic integrity.",
    date: "November 15, 2024",
    category: "Technology",
    readTime: "7 min read"
  }
];

export default function Blog() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <header className="pt-20 pb-16 px-6 md:px-12 md:pt-32 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight text-foreground leading-tight">
              Insights & Articles
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Thoughts on design, architecture, sustainability, and the future of built spaces.
            </p>
          </motion.div>
        </header>

        <main className="px-4 md:px-12 max-w-4xl mx-auto pb-24">
          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="glass p-8 md:p-10 rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex gap-3">
                    <span className="text-xs uppercase tracking-widest font-medium text-primary bg-primary/10 px-3 py-1 rounded-full h-fit">
                      {article.category}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground px-3 py-1 h-fit">
                      {article.readTime}
                    </span>
                  </div>
                  <time className="text-sm text-muted-foreground whitespace-nowrap">
                    {article.date}
                  </time>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                
                <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
