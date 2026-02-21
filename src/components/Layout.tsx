import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Linkedin, ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isHome && (
              <Link
                to="/"
                className="p-2 -ml-2 hover:bg-zinc-50 rounded-full transition-colors group"
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
            )}
            <Link to="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
              Roshana Rostami
            </Link>
          </div>
          
          <a
            href="https://drive.google.com/file/d/1pT_DNC6WNDxen-qWe85lWdFsz4nqjh0E/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-sm"
          >
            Resume
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-16 bg-zinc-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Get in touch</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:Rostami.roshana@gmail.com"
                  className="flex items-center gap-2 text-lg hover:text-zinc-500 transition-colors w-fit"
                >
                  <Mail className="w-5 h-5" />
                  <span>Rostami.roshana@gmail.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/roshana-r-238187196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:text-zinc-500 transition-colors w-fit"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="text-sm text-zinc-400 font-medium">
              © {currentYear} Roshana Rostami. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
