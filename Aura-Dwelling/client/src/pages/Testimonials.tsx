import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Their vision transformed our corporate headquarters into a space that inspires creativity and collaboration.",
    author: "Catherine Wells",
    title: "CEO, Tech Innovators Inc.",
    rating: 5
  },
  {
    quote: "Impeccable attention to detail and an understanding of how space influences human experience.",
    author: "Michael Torres",
    title: "Director, Luxury Residences Group",
    rating: 5
  },
  {
    quote: "They delivered a public space that not only meets functional requirements but also beautifies our city.",
    author: "Dr. Sarah Kim",
    title: "Urban Development Director",
    rating: 5
  },
  {
    quote: "Professional, innovative, and committed to sustainability. A true partner in our journey.",
    author: "James Ashford",
    title: "Founder, Eco-Living Foundation",
    rating: 5
  },
  {
    quote: "The interior design elevated our boutique hotel's identity. Guests consistently praise the aesthetic experience.",
    author: "Lisa Marchand",
    title: "Hospitality Manager",
    rating: 5
  },
  {
    quote: "From concept to completion, their team ensured every element reflected our brand values perfectly.",
    author: "Robert Chang",
    title: "President, Design Collective",
    rating: 5
  }
];

export default function Testimonials() {
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
              Client Testimonials
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Hear from clients who have experienced the transformative power of our architectural vision.
            </p>
          </motion.div>
        </header>

        <main className="px-4 md:px-12 max-w-6xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass p-8 md:p-10 rounded-3xl border border-border/50 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-muted-foreground font-light leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-display font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
