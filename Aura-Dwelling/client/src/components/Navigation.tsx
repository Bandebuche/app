import { Link, useLocation } from "wouter";
import { Home, Grid, Wrench, Users, MessageSquare, BookOpen, Info, Mail, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/theme-context";

export function Navigation() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/portfolio", icon: Grid, label: "Portfolio" },
    { href: "/services", icon: Wrench, label: "Services" },
    { href: "/team", icon: Users, label: "Team" },
    { href: "/testimonials", icon: MessageSquare, label: "Testimonials" },
    { href: "/blog", icon: BookOpen, label: "Blog" },
    { href: "/about", icon: Info, label: "About" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl font-display font-light tracking-tight text-foreground group-hover:text-primary transition-colors">
              Studio
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = location === link.href;
              const Icon = link.icon;
              
              return (
                <Link key={link.href} href={link.href} className="relative group">
                  <div className={cn(
                    "px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 relative z-10 text-sm font-medium",
                    isActive 
                      ? "text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}>
                    <Icon strokeWidth={1.5} className="w-4 h-4" />
                    <span className="hidden lg:inline">{link.label}</span>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground transition-colors hover:bg-muted"
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Sun className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
            <Link href="/contact" className="hidden md:block group">
              <div className="p-2 rounded-lg text-muted-foreground group-hover:text-primary transition-colors">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          initial={false}
          className="md:hidden flex flex-wrap items-center gap-2 pb-4 border-t border-border/50 pt-4"
        >
          {links.map((link) => {
            const isActive = location === link.href;
            const Icon = link.icon;
            
            return (
              <Link key={link.href} href={link.href} className="relative group flex-1 min-w-fit">
                <div className={cn(
                  "px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 relative z-10 text-xs font-medium justify-center",
                  isActive 
                    ? "text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}>
                  <Icon strokeWidth={1.5} className="w-3 h-3" />
                  <span>{link.label}</span>
                </div>
                
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNav"
                    className="absolute inset-0 bg-primary rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
}
