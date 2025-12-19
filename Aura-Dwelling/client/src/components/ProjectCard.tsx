import { Project } from "@shared/schema";
import { Link } from "wouter";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group w-full"
    >
      <Link href={`/project/${project.id}`} className="block relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-3xl bg-muted cursor-none md:cursor-pointer">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-40 transition-opacity duration-500" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="glass backdrop-blur-md bg-white/10 dark:bg-black/40 border-white/20 p-6 rounded-2xl flex justify-between items-end text-white">
            <div>
              <div className="flex items-center gap-2 text-white/70 mb-2 text-sm font-medium tracking-wide uppercase">
                <MapPin className="w-4 h-4" />
                {project.location} • {project.year}
              </div>
              <h3 className="text-2xl font-display font-medium leading-tight">{project.title}</h3>
            </div>
            
            <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
      
      {/* Mobile Title (visible outside image on small screens) */}
      <div className="mt-4 md:hidden px-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-display font-semibold text-foreground">{project.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{project.category}</p>
          </div>
          <span className="text-xs font-mono border border-border px-2 py-1 rounded-full">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}
