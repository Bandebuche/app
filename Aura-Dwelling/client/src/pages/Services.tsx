import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Building2, Lightbulb, Zap, Palette } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architectural Design",
    description: "From concept to execution, we create timeless spaces that blend aesthetics with functionality."
  },
  {
    icon: Lightbulb,
    title: "Urban Planning",
    description: "Sustainable city design that prioritizes livability, accessibility, and environmental responsibility."
  },
  {
    icon: Zap,
    title: "Interior Architecture",
    description: "Crafting interior environments that enhance user experience through minimalist elegance."
  },
  {
    icon: Palette,
    title: "Design Consultation",
    description: "Strategic guidance on design principles, material selection, and aesthetic direction for your project."
  }
];

export default function Services() {
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
              Our Services
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              We provide comprehensive architectural solutions tailored to create spaces that inspire, endure, and transform.
            </p>
          </motion.div>
        </header>

        <main className="px-4 md:px-12 max-w-6xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card p-8 md:p-12 rounded-3xl hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 border border-border/50 group"
                >
                  <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-24 pt-16 border-t border-border/30"
          >
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground mb-8">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["Discovery", "Conceptualization", "Development", "Delivery"].map((step, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-5xl font-display font-light text-primary/20">{idx + 1}</div>
                  <p className="text-lg font-light text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
