import { useState } from "react";
import { Home, User, Briefcase, Layers, Mail, FileText, Menu, X, Instagram, Linkedin, } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "About", href: "/about" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: Layers, label: "Stack", href: "/stack" },
  { icon: Mail, label: "Contact", href: "/contact" },
  { icon: FileText, label: "Experiences", href: "/experiences" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instgram.com/ حساب معاذ العرطة", label: "Instagram" },
  { icon: Linkedin, href:"https://linkedin.com/in/Your_username", label: "Linkedin" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-sidebar/95 backdrop-blur-sm border-b border-border px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={profilePhoto}
            alt="Kaysar Zamy"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"></span>
            <span className="text-xs font-medium text-primary">Available</span>
          </div>
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-16">
          <nav className="flex flex-col p-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-card text-foreground"
                          : "text-muted-foreground hover:bg-card hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Social Links */}
            <div className="mt-auto pt-8 flex items-center justify-center gap-4 border-t border-border mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNav;
