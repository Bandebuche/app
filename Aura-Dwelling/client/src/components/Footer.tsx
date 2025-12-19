import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Services", href: "/services" },
        { label: "Team", href: "/team" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]
    }
  ];

  const socialLinks = [
    { icon: "LinkedIn", url: "#" },
    { icon: "Instagram", url: "#" },
    { icon: "Twitter", url: "#" },
    { icon: "Behance", url: "#" },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <Link href="/" className="group">
              <h3 className="text-2xl font-display font-light tracking-tight text-foreground group-hover:text-primary transition-colors mb-4">
                Studio
              </h3>
            </Link>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              Transforming spaces through innovative architectural design and sustainable practices.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-sm font-medium"
                >
                  {social.icon.slice(0, 1)}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4 className="font-display font-medium text-foreground mb-4 text-sm uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="group">
                      <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors flex items-center gap-2">
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-medium text-foreground mb-4 text-sm uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@studio-architecture.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors break-all">
                    hello@studio-architecture.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+1555000000" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground font-light group-hover:text-foreground transition-colors">
                    +1 (555) 000-0000
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground font-light">
                    123 Design District<br />
                    New York, NY 10001
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground font-light">
              © {currentYear} Studio Architecture. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground font-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground font-light transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground font-light transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
