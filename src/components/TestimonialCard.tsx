interface TestimonialCardProps {
  quote: string;
  avatar: string;
  name: string;
  company: string;
}

const TestimonialCard = ({ quote, avatar, name, company }: TestimonialCardProps) => {
  return (
    <div className="rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <blockquote className="mb-6 text-muted-foreground leading-relaxed">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
