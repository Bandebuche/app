import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col justify-center">
        <Navigation />
        
        <main className="px-6 md:px-12 max-w-6xl mx-auto w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight mb-8 leading-tight">
                Design <br/>
                Philosophy
              </h1>
              <div className="h-1 w-24 bg-primary mb-8" />
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  We believe that architecture is not just about buildings, but about how we inhabit space. 
                  Our approach strips away the unnecessary to reveal the essential beauty of form and function.
                </p>
                <p>
                  Inspired by brutalist honesty and modernist clarity, our work seeks to create environments 
                  that offer sanctuary from the chaos of modern life while maintaining a strong connection to the urban fabric.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-display font-medium text-foreground mb-2">15+</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-display font-medium text-foreground mb-2">42</h3>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform translate-x-12 translate-y-12" />
              <div className="glass rounded-3xl overflow-hidden h-full w-full relative z-10 flex items-center justify-center bg-muted">
                {/* Placeholder for architect portrait or studio image */}
                <span className="text-muted-foreground/30 text-9xl font-display font-bold">A</span>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
