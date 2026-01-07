import TestimonialCard from "./TestimonialCard";

import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const testimonials = [
  {
    quote: "معاذ حمار بغل ما يعرف يصمم يسولف واجد ",
    avatar: client1,
    name: "فارس",
    company: "عوادي",
  },
  {
    quote: "معاذ قتقاقنقا حرمة غبية",
    avatar: client2,
    name: "خالد",
    company: "البيت ",
  },
  {
    quote: "اخوووووي سنديي",
    avatar: client3,
    name: "اسماء",
    company: "البيت ",
  },
  {
    quote: "هو شوشي الرائع والبريفكت ... وهو حياتيييييييييييي",
    avatar: client4,
    name: "مروة",
    company: "------",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <h2 className="mb-8 text-2xl font-bold text-foreground">Kind Words from Clients</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="animate-fade-in opacity-0"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
