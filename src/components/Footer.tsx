import { Link } from "react-router-dom";
// استيراد أيقونة الهاتف (Phone) وأيقونة السهم (Send)
import { Send, Phone } from "lucide-react"; 

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <Link to="/contact" className="text-gradient flex items-center gap-2 group">
            
            {/* 1. هنا وضعنا أيقونة هاتف حقيقية بدلاً من الصورة */}
            <Phone size={18} className="text-primary" />

            <span>Let's Connect!</span>
            
            <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="hidden sm:block flex-1"></div> 

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