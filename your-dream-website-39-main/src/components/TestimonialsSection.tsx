import TestimonialCard from "./TestimonialCard";

import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";

const testimonials = [
  {
    quote: "Zamy's design expertise revitalized our outdated website, transforming it into a modern and user-friendly platform. Her meticulous attention to detail made the entire process smooth and enjoyable.",
    avatar: client1,
    name: "Mei Tanaka",
    company: "TechPro Solutions",
  },
  {
    quote: "Patricia's creative flair and ability to craft visually stunning websites are unmatched. She takes the time to understand our client's unique needs and translates them into captivating web experiences.",
    avatar: client2,
    name: "Andrei Kozlov",
    company: "Creative Marketing Agency",
  },
  {
    quote: "We turned to Zamy for our e-commerce website overhaul, and she delivered beyond our wildest dreams. Her expertise in UX design led to a significant increase in our online sales.",
    avatar: client3,
    name: "Emily Carter",
    company: "E-commerce Emporium",
  },
  {
    quote: "Working with Zamy as a freelancer has been a fantastic experience. She's a talented designer and an excellent communicator. We highly recommend her services.",
    avatar: client4,
    name: "Zeynep Arslan",
    company: "Startup Innovators",
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
