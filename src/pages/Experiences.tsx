import Layout from "@/components/Layout";

// بيانات الخبرات الخاصة بك
const experiences = [
  {
    title: "Grapic Designer and UI/UX",
    company: "SmartGenx Company.",
    period: "2022 - until now",
    description: "Al Mukalla",
  },
  {
    title: "Grapic Designer",
    company: "Al Omran Institute for Studies and Capacity Building.",
    period: "JAN 2022 - DEC 2022",
    description: "Al Mukalla",
  },
    {
    title: "Engineering Assistant",
    company: "Vision of Excellence for Engineering Consultations.",
    period: "MAR 2020 - OCT 2020",
    description: "Al Mukalla",
  },
];

const Experiences = () => {
  return (
    <Layout>
      <div className="animate-fade-in text-right" dir="rtl">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Employment History</h1>
        <p className="mb-8 text-muted-foreground">
        
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