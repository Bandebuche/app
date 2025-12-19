import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Portfolio() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

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
              Complete Portfolio
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Explore our comprehensive collection of architectural projects spanning commercial, residential, and public spaces.
            </p>
          </motion.div>
        </header>

        <main className="px-4 md:px-12 max-w-7xl mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
