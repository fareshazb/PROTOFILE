import Layout from "@/components/Layout";
import { 
  SiFigma, 
  SiAdobephotoshop, 
  SiAdobeillustrator, 
  SiAutodeskrevit, 
  SiSketchup 
} from "react-icons/si";

// 1. استيراد الصور بالامتدادات الصحيحة والمعدلة
import vrayIcon from "../assets/icons/vray.png";
import lumionIcon from "../assets/icons/lumion.webp";

const stackCategories = [
  {
    title: " ",
    items: [
      { name: "Figma", description: "Collaborative Design", icon: <SiFigma color="#F24E1E" /> },
      { name: "Photoshop", description: "Image Editing", icon: <SiAdobephotoshop color="#31A8FF" /> },
      { name: "Illustrator", description: "Vector Graphics", icon: <SiAdobeillustrator color="#FF9A00" /> },
      { name: "Revit", description: "BIM Modeling", icon: <SiAutodeskrevit color="#0696D7" /> },
      { name: "V-Ray", 
        description: "Photorealistic Rendering", 
        icon: <img src={vrayIcon} alt="V-Ray" className="w-10 h-10 object-contain" /> 
      },
      { name: "Sketchup", description: "3D Modeling", icon: <SiSketchup color="#005F9E" /> },
      { 
        name: "Lumion", 
        description: "Cinematic Rendering", 
        icon: <img src={lumionIcon} alt="Lumion" className="w-10 h-10 object-contain" />   
        } 
    ]
  },

 
];

const Stack = () => {
  return (
    
      <div className="animate-fade-in px-4 py-10">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Stack</h1>
        <p className="mb-8 text-muted-foreground"></p>
        
        <div className="space-y-12">
          {stackCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h2 className="mb-6 text-xl font-semibold text-foreground">{category.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="group rounded-xl bg-card border border-border p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 animate-fade-in opacity-0"
                    style={{ 
                      animationDelay: `${(categoryIndex * 4 + index) * 50}ms`, 
                      animationFillMode: "forwards" 
                    }}
                  >
                    <div className="mb-4 flex items-center justify-start h-12 w-12 text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Stack;