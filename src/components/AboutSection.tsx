import { CheckCircle } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import aboutImage from "@/assets/about-school.jpg";

const AboutSection = () => {
  const features = [
    "Modern Learning Facilities",
    "Experienced Educators",
    "Holistic Development",
    "Character Building",
    "Sports & Activities",
    "Safe Environment",
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <ScrollAnimation direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={aboutImage}
                  alt="Darul-Ulum Campus"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Right - Content */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="space-y-6">
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Setting the Standard for{" "}
                <span className="text-primary">Modern Education</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                At Darul-Ulum, we believe that education should be transformative,
                engaging, and accessible. Our state-of-the-art facilities combine
                modern teaching methods with Islamic values to ensure your
                child receives the best possible education.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="feature-check">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
