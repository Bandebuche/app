import { useProjects } from "@/hooks/use-projects";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTransition } from "@/components/PageTransition";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader2 } from "lucide-react";

export default function Home() {
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
        
        <header className="pt-12 pb-12 px-6 md:px-12 md:pt-20 md:pb-24 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-display font-light tracking-tight text-foreground leading-[0.9]">
            Architecture <br/>
            <span className="text-muted-foreground">Portfolio</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed">
            Exploring the intersection of brutalist geometry and organic living spaces through modern design.
          </p>
        </header>

        <main className="px-4 md:px-12 max-w-[1600px] mx-auto pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {projects?.map((project, index) => (
              <div key={project.id} className={index % 2 === 1 ? "md:mt-24" : ""}>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}
