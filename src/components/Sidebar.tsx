import { Home, User, Briefcase, Layers, Mail, FileText, Linkedin, Instagram } from "lucide-react";
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
  { icon: Linkedin, href:"https://linkedin.com/in/ حساب معاذ العرطة", label: "Linkedin" },
  
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-52 flex-col bg-sidebar border-r border-border p-6">
      {/* Profile Section */}
      <div className="mb-6 flex flex-col items-center">
        <Link to="/" className="group">
          <div className="relative mb-4 h-28 w-28 overflow-hidden rounded-lg">
            <img
              src={profilePhoto}
              alt="Kaysar Zamy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </Link>
        <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
          <span className="text-xs font-medium text-primary">Available for Work</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 pt-6 border-t border-border">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label={social.label}
          >
            <social.icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
