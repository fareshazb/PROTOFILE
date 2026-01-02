import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const stackItems = [
  {
    icon: (
      <svg viewBox="0 0 38 57" className="h-8 w-8" fill="currentColor">
        <path d="M19 28.5C19 28.5 0 19 0 9.5C0 0 8.5 0 19 0C29.5 0 38 0 38 9.5C38 19 19 28.5 19 28.5ZM19 28.5C19 28.5 38 38 38 47.5C38 57 29.5 57 19 57C8.5 57 0 57 0 47.5C0 38 19 28.5 19 28.5Z" />
      </svg>
    ),
    name: "Figma",
    description: "Collaborative Design",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8v8H4zM12 8h8v16h-8z" />
      </svg>
    ),
    name: "Framer",
    description: "Web Design",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2 2h4v4H7V7zm0 6h10v4H7v-4zm6-6h4v4h-4V7z" />
      </svg>
    ),
    name: "Notion",
    description: "Project Management",
  },
];

const StackSection = () => {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold text-foreground">Stack</h2>
      
      <div className="grid gap-4 sm:grid-cols-3">
        {stackItems.map((item, index) => (
          <div
            key={item.name}
            className="group rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <div className="mb-4 text-muted-foreground group-hover:text-primary transition-colors">
              {item.icon}
            </div>
            <h3 className="font-semibold text-foreground">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/stack">
          <Button variant="outline" className="group gap-2">
            View All Stack
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default StackSection;
