import { MessageCircle, Send, Mail } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import leaderPrincipal from "@/assets/leader-principal.jpg";
import leaderVicePrincipal from "@/assets/leader-vice-principal.jpg";
import leaderAcademic from "@/assets/leader-academic.jpg";

const LeadersSection = () => {
  const leaders = [
    {
      name: "Dr. Ahmad Hassan",
      role: "Principal",
      bio: "Leading Darul-Ulum with over 20 years of experience in education and academic administration.",
      image: leaderPrincipal,
    },
    {
      name: "Ms. Sarah Rahman",
      role: "Vice Principal",
      bio: "Dedicated to fostering a supportive learning environment for all students.",
      image: leaderVicePrincipal,
    },
    {
      name: "Mr. David Chen",
      role: "Academic Director",
      bio: "Specializing in curriculum development and innovative teaching methodologies.",
      image: leaderAcademic,
    },
  ];

  return (
    <section id="leaders" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Our Team</span>
          <h2 className="section-title mt-2">Meet Our Leaders</h2>
          <p className="text-muted-foreground mt-4">
            Our team of dedicated educators and administrators are here to
            guide your child towards academic excellence.
          </p>
        </ScrollAnimation>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          {leaders.map((leader, index) => (
            <ScrollAnimation key={index} delay={index * 0.15}>
              <div className="card-elevated overflow-hidden group max-w-[280px] mx-auto">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-school-navy leading-tight">{leader.name}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{leader.role}</p>
                  <p className="text-muted-foreground text-xs mt-3 line-clamp-3">{leader.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-4">
                    <a
                      href="#"
                      aria-label="WhatsApp"
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Telegram"
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="Email"
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
