import Layout from "@/components/Layout";
import { Download, Award, Users, Briefcase, BookOpen, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
];

// هذه هي قائمة الدورات، يمكنك تعديل المسميات هنا بسهولة
const courses = [
  { title: "دورة تصميم واجهات المستخدم UI/UX", provider: "Coursera" },
  { title: "دورة تصميم الهوية البصرية", provider: "Udemy" },
  { title: "أساسيات تجربة المستخدم", provider: "Google" },
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
                alt="Kaysar Zamy"
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
                UI/UX Designer & Creative Thinker
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm Kaysar Zamy, a passionate UI/UX designer based in Dhaka, Bangladesh. 
                With over 5 years of experience in the design industry, I specialize in 
                creating intuitive and visually stunning digital experiences.
              </p>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              My approach combines aesthetics with functionality, ensuring that every 
              design not only looks beautiful but also provides an exceptional user 
              experience. I believe in the power of design to solve problems and 
              create meaningful connections between brands and their audiences.
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
                Courses (الدورات)
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
