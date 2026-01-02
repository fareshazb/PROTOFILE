import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { image: project1, category: "Landing page", title: "WP Dark Mode" },
  { image: project2, category: "Mobile App", title: "FormyChat" },
  { image: project3, category: "E-commerce", title: "Easy Video Reviews" },
  { image: project4, category: "Landing page", title: "Stock Sync Plugin" },
  { image: project1, category: "Dashboard", title: "Analytics Pro" },
  { image: project3, category: "Website", title: "Fashion Store" },
];

const Projects = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Projects</h1>
        <p className="mb-8 text-muted-foreground">
          A collection of my recent work across various industries and platforms.
        </p>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
