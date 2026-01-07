import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    category: "Landing page",
    title: "WP Dark Mode",
  },
  {
    image: project2,
    category: "Mobile App",
    title: "FormyChat",
  },
  {
    image: project3,
    category: "E-commerce",
    title: "Easy Video Reviews",
  },
  {
    image: project4,
    category: "Landing page",
    title: "Stock Sync Plugin",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Recent Projects</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            delay={index * 100}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/projects">
          <Button variant="outline" className="group gap-2">
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
