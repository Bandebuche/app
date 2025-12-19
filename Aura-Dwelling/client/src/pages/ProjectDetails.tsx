import { useRoute } from "wouter";
import { useProject } from "@/hooks/use-projects";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";
import { ArrowLeft, Loader2, MapPin, Calendar, Layers } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ProjectDetails() {
  const [, params] = useRoute("/project/:id");
  const id = parseInt(params?.id || "0");
  const { data: project, isLoading } = useProject(id);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-muted-foreground">
        <p>Project not found</p>
        <Link href="/" className="mt-4 underline hover:text-foreground">Return Home</Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pb-32 md:pb-20">
        <Navigation />
        
        <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          
          <Link href="/" className="absolute top-8 left-6 md:left-12 z-10 glass p-3 rounded-full text-foreground hover:scale-110 transition-transform">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-32 relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-background/80 backdrop-blur-xl border border-border/50 p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/5"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-border pb-8">
              <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-foreground">
                {project.title}
              </h1>
              <span className="px-4 py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-sm font-medium uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-8 space-y-8">
                <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none font-light leading-relaxed text-muted-foreground">
                  <p>{project.description}</p>
                  <p>
                    The architectural language speaks through strict geometry softened by natural light. 
                    Every angle is calculated to capture the sun's path throughout the day, creating a living, breathing space 
                    that changes character from dawn to dusk.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 space-y-6">
                <div className="bg-muted/30 p-6 rounded-2xl space-y-4 border border-border/50">
                  <h3 className="font-display font-medium text-lg mb-4">Project Details</h3>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="flex-1">Location</span>
                    <span className="text-foreground font-medium">{project.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="flex-1">Year</span>
                    <span className="text-foreground font-medium">{project.year}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Layers className="w-5 h-5 text-primary" />
                    <span className="flex-1">Area</span>
                    <span className="text-foreground font-medium">450 m²</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
