import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const team = [
  {
    name: "Alexandra Chen",
    role: "Lead Architect",
    initials: "AC",
    bio: "20+ years designing sustainable urban spaces"
  },
  {
    name: "Marcus Johnson",
    role: "Senior Designer",
    initials: "MJ",
    bio: "Expert in minimalist interior environments"
  },
  {
    name: "Sofia Rossi",
    role: "Urban Planner",
    initials: "SR",
    bio: "Specializing in community-focused development"
  },
  {
    name: "David Park",
    role: "Project Manager",
    initials: "DP",
    bio: "Ensuring excellence in every delivery"
  },
  {
    name: "Elena Rodriguez",
    role: "Design Consultant",
    initials: "ER",
    bio: "Bringing aesthetic vision to life"
  },
  {
    name: "James Mueller",
    role: "3D Visualization",
    initials: "JM",
    bio: "Creating immersive design experiences"
  }
];

export default function Team() {
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
              Our Team
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Meet the visionary architects and designers who bring innovative spaces to life.
            </p>
          </motion.div>
        </header>

        <main className="px-4 md:px-12 max-w-6xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="glass p-8 rounded-3xl hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 border border-border/50 text-center group"
              >
                <div className="flex justify-center mb-6">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="text-lg font-display font-medium bg-primary/20 text-primary">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-2xl font-display font-medium text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm uppercase tracking-widest text-primary mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
