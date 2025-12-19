import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProject(Number(req.params.id));
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getProjects();
  if (existing.length === 0) {
    await storage.createProject({
      title: "Vertex Tower",
      description: "A futuristic glass spire redefining the city skyline with sustainable vertical gardens.",
      imageUrl: "/images/project1.jpg",
      category: "Commercial",
      location: "New York, USA",
      year: 2024
    });
    await storage.createProject({
      title: "Serenity Residence",
      description: "Minimalist luxury living space featuring seamless indoor-outdoor integration.",
      imageUrl: "/images/project2.jpg",
      category: "Residential",
      location: "Kyoto, Japan",
      year: 2023
    });
    await storage.createProject({
      title: "Concrete Void",
      description: "Abstract geometric cultural center utilizing light and shadow as primary materials.",
      imageUrl: "/images/project3.jpg",
      category: "Public",
      location: "Berlin, Germany",
      year: 2025
    });
  }
}
