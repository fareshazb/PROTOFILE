import Layout from "@/components/Layout";

const licenses = [
  {
    title: "Images & Graphics",
    description: "All images and graphics used on this portfolio are either original creations or properly licensed from stock image providers.",
  },
  {
    title: "Icons",
    description: "Icons are sourced from Lucide Icons, an open-source icon library.",
  },
  {
    title: "Fonts",
    description: "Typography uses Plus Jakarta Sans from Google Fonts, available under the Open Font License.",
  },
  {
    title: "Code & Templates",
    description: "The code and design of this portfolio are original works. Please contact me for any licensing inquiries.",
  },
];

const Licensing = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Licensing</h1>
        <p className="mb-8 text-muted-foreground">
          Information about the assets and resources used in this portfolio.
        </p>
        
        <div className="space-y-6">
          {licenses.map((license, index) => (
            <div
              key={license.title}
              className="rounded-xl bg-card border border-border p-6 animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <h3 className="mb-2 text-lg font-semibold text-foreground">{license.title}</h3>
              <p className="text-muted-foreground">{license.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Licensing;
