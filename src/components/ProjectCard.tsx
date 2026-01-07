import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  href?: string;
  delay?: number;
}

const ProjectCard = ({ image, category, title, href = "#", delay = 0 }: ProjectCardProps) => {
  return (
    <Link
      to={href}
      className="group block animate-fade-in opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      <div className="overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {category}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
