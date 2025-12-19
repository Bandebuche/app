import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        
        <main className="flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-display font-light tracking-tight text-center md:text-left">
              Get in Touch
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-12"
            >
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Whether you have a specific project in mind or just want to explore the possibilities, 
                we're here to listen and collaborate.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-muted group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@studio-architecture.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-muted group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-4 rounded-2xl bg-muted group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-lg mb-1">Visit Studio</h3>
                    <p className="text-muted-foreground">
                      123 Design District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Name</label>
                  <input
                    id="name"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
