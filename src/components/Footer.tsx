import { GraduationCap, Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Our Leaders", href: "/staff" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/#contact" },
  ];



  const programs = [
    {
      name: "Early Childhood",
      href: "/programs#early-childhood",
    },
    {
      name: "Primary School",
      href: "/programs#primary-school",
    },
    {
      name: "Middle School",
      href: "/programs#middle-school",
    },
    {
      name: "High School",
      href: "/programs#high-school",
    },
    {
      name: "Special Programs",
      href: "/programs#special-programs",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Send, href: "#", label: "Telegram" },
  ];

  return (
    <footer className="bg-[hsl(215,50%,18%)] pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-school-teal" />
              </div>
              <span className="text-xl font-bold">Darul-Ulum</span>
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dedicated to providing the highest quality education to our
              community with compassion and excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-school-teal hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-school-teal transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-school-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Programs</h4>
            <ul className="space-y-4">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-school-teal transition-colors text-sm flex items-center gap-2 group w-full text-left"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-school-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-6">
              Subscribe to our newsletter for the latest school news and updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:border-school-teal focus:ring-school-teal/20 h-12"
              />
              <Button className="w-full bg-school-teal hover:bg-school-teal/90 text-white h-12 font-semibold">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Darul-Ulum School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-school-teal transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-school-teal transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
