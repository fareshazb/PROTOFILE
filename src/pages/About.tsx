import Layout from "@/components/Layout";
import { Download, Award, Users, Briefcase, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/muaaz.jpg";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

// هذه هي قائمة الدورات، يمكنك تعديل المسميات هنا بسهولة
const courses = [
  { title: "Diploma in Graphic Design Programs (Photoshop - Illustrator - InDesign)", provider: "2022" },
  { title: "3D Max Course", provider: "2021" },
  { title: "Revit & Lumion Course", provider: "2021" },
];

const About = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="mb-8 text-4xl font-bold text-foreground">About Me</h1>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl">
              <img
                src={profilePhoto}
                alt="Muaaz Bin Hazeb"
                className="w-full object-cover aspect-square"
              />
            </div>
            
            <Button className="w-full gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                UI/UX Designer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I’m Moaaz, a UI/UX Designer specializing in building integrated digital solutions. My role goes beyond visual design; I focus on analyzing user journeys and simplifying complex processes. My constant goal is to develop designs that support business objectives while ensuring a seamless, friction-free user experience.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
            
            </p>
            
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-card border border-border p-4 text-center animate-fade-in opacity-0"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
                >
                  <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* --- بداية قسم الدورات الإضافي --- */}
            <div className="pt-6 border-t border-border">
              <h3 className="mb-4 text-xl font-bold text-foreground flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Courses 
              </h3>
              <div className="grid gap-3">
                {courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 border border-border">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-sm text-foreground">{course.title}</p>
                      <p className="text-xs text-muted-foreground">{course.provider}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* --- نهاية قسم الدورات الإضافي --- */}

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
