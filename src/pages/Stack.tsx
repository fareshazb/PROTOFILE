import Layout from "@/components/Layout";

const stackCategories = [
  {
    title: "Design",
    items: [
      { name: "Figma", description: "Collaborative Design", icon: "🎨" },
      { name: "Adobe XD", description: "UI/UX Design", icon: "✨" },
      { name: "Photoshop", description: "Image Editing", icon: "🖼️" },
      { name: "Illustrator", description: "Vector Graphics", icon: "🎯" },
    ],
  },
  {
    title: "Architecture",
    items: [
      { name: "Revit", description: "BIM Modeling", icon: "⚡" },
      { name: "V-Ray", description: "Photorealistic Rendering", icon: "🌐" },
      { name: "Sketchup", description: "3D Modeling", icon: "⚛️" },
      { name: "Lumion", description: "Cinematic Rendering", icon: "💅" },
    ],
  },

];

const Stack = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-foreground">My Stack</h1>
        <p className="mb-8 text-muted-foreground">
          The tools and technologies I use to bring ideas to life.
        </p>
        
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
                    <div className="mb-3 text-2xl">{item.icon}</div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Stack;
