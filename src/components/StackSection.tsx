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
      <svg viewBox="0 0 256 256" className="h-8 w-8" fill="currentColor">
      <path d="M0 0v256h256V0H0zm43.2 68.8h46.4c28.2 0 44.8 14.2 44.8 39 0 28-20.4 41-48 41H65.8v38.4H43.2V68.8zm22.6 19.4v42.2h20.6c14.6 0 23.4-7.4 23.4-21.2 0-14.4-8.8-21-23-21H65.8zm115.6 57.6c0 14.8-10.4 23.8-26.2 23.8-7.8 0-14.4-1.8-19.4-4.8v19.4c5.4 2.2 13.8 3.8 23 3.8 27.2 0 45.4-15 45.4-41.2V110h-22.8v35.8z" />
      </svg>
    ),
    name: "Photoshop",
    description: "photo Editing",
  },
  {
    icon: (
      <svg viewBox="0 0 256 256" className="h-8 w-8" fill="currentColor">
      <path d="M0 0v256h256V0H0zm43.4 187.2l41.6-118.4h23.2l41.6 118.4h-22.6l-9.8-29.6H69.4l-9.8 29.6H43.4zm32.6-47.2h34.4L93.6 92.2 76 140zm104.2 47.2h-21.6V68.8h21.6v118.4z" />
      </svg>
    ),
    name: "Illustrator",
    description: "Vector Graphics",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8l-7 3.2L5 8l7-3.2zM4 16.2V9.5l7 3.2v6.7l-7-3.2zm16 0l-7 3.2v-6.7l7-3.2v6.7z" />
      </svg>
    ),
    name: "Revit",
    description: "BIM Modeling",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.5l7 3.9v7.2l-7 3.9-7-3.9V8.4l7-3.9zM11 9h2v6h-2V9z" />
      </svg>
    ),
    name: "Lumion",
    description: "Architectural Rendering",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.31.17-.69.17-1 0L3.53 17.38c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.43c.31-.17.69-.17 1 0l7.97 4.43c.32.17.53.5.53.88v9z" />
      </svg>
    ),
    name: "SketchUp",
    description: "3D Modeling",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    name: "V-Ray",
    description: "Rendering Engine",
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
