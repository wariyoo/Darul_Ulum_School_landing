import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-school-new.png";

const Counter = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and suffix
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20, duration: 2000 });
  const displayValue = useTransform(springValue, (latest) => {
    if (numericValue % 1 === 0) {
      return Math.floor(latest).toLocaleString() + suffix;
    }
    return latest.toFixed(1) + suffix;
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  return (
    <div
      ref={ref}
      className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/50 transition-colors"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-school-teal/20 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-school-teal" />
        </div>
        <motion.p className="text-3xl font-bold text-white mb-1">
          {displayValue}
        </motion.p>
        <p className="text-sm text-gray-300 uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Students" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: BookOpen, value: "25+", label: "Years of Excellence" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Darul-Ulum School Campus"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-40">
        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-school-teal animate-pulse"></span>
            Enrolling Now for 2026
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Education that{" "}
            <span className="text-school-teal bg-clip-text text-transparent bg-gradient-to-r from-school-teal to-school-teal-light">Shapes</span> the Future.
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Experience academic excellence reimagined. Top-tier educators,
            modern facilities, and a nurturing environment dedicated to your
            child's growth and success.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button size="lg" className="bg-school-teal hover:bg-school-teal/90 text-white h-14 px-8 text-lg rounded-full">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 h-14 px-8 text-lg rounded-full">
              Explore Programs
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <Counter
              key={index}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
