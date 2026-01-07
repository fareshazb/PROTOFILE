import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
      
      <main className="lg:ml-52 min-h-screen">
        <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8 lg:py-12 pt-20 lg:pt-12">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
