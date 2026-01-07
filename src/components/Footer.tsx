import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <Link to="/contact" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
            Let's Connect!
          </Link>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>© Copyright 2026. All rights Reserved.</span>
        </div>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Made by</span>
          <span className="font-medium text-foreground">fares Bin Hazeb</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
