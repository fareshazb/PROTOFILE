import Layout from "@/components/Layout";

// بيانات الخبرات الخاصة بك
const experiences = [
  {
    title: "مطور واجهات أمامي (Frontend Developer)",
    company: "اسم الشركة الحالية",
    period: "2023 - الحالي",
    description: "تطوير واجهات المستخدم باستخدام React و Tailwind CSS وتحسين أداء المواقع.",
  },
  {
    title: "مصمم مواقع ويب",
    company: "عمل حر (Freelance)",
    period: "2021 - 2023",
    description: "تصميم وتنفيذ العديد من المتاجر الإلكترونية والمواقع الشخصية للعملاء.",
  },
];

const Experiences = () => {
  return (
    <Layout>
      <div className="animate-fade-in text-right" dir="rtl">
        <h1 className="mb-4 text-4xl font-bold text-foreground">الخبرات العملية</h1>
        <p className="mb-8 text-muted-foreground">
          ملخص لمسيرتي المهنية والخبرات التي اكتسبتها.
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl bg-card border border-border p-6 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="flex justify-between items-start mb-2 flex-row-reverse">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-md font-medium text-muted-foreground mb-3">{exp.company}</p>
              <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Experiences;