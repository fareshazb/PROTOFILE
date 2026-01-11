import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pb-16">
      <div className="animate-fade-in">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Hello Everyone! I'm{" "}
          <span className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">Muaaz Bin Hazeb</span>
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          An enthusiastic UI/UX designer proficient at transforming concepts into 
          visually captivating, user-centric design
        </p>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm">Hadhramout, Al-Mukalla</span>
          </div>

          <div className="hidden sm:flex flex-1 mx-8 border-t border-dashed border-border"></div>

          <Link to="/about">
            <Button variant="outline" className="group gap-2">
              More about Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
