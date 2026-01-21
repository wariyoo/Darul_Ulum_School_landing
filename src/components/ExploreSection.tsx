import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import leaderPrincipal from "@/assets/leader-principal.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const ExploreSection = () => {
    const exploreItems = [
        {
            title: "Our Staff",
            image: leaderPrincipal,
            link: "/staff",
            description: "Meet the dedicated educators guiding your child's future."
        },
        {
            title: "Student Council",
            image: gallery1,
            link: "/student-council",
            description: "Empowering student voices and fostering leadership."
        },
        {
            title: "History",
            image: gallery3,
            link: "/history",
            description: "Discover our rich heritage and legacy of excellence."
        },
        {
            title: "Rules & Regulations",
            image: gallery6,
            link: "/rules",
            description: "Understanding our core values and code of conduct."
        }
    ];

    return (
        <section id="explore" className="py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollAnimation className="text-center max-w-2xl mx-auto mb-12">
                    <span className="section-label">Discover</span>
                    <h2 className="section-title mt-2">Explore our School</h2>
                    <p className="text-muted-foreground mt-4">
                        Dive deeper into the life and culture of Darul-Ulum.
                    </p>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {exploreItems.map((item, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1}>
                            <div className="relative group overflow-hidden rounded-2xl shadow-lg h-64 md:h-80">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-school-navy/60 group-hover:bg-school-navy/70 transition-colors duration-300" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-gray-200 line-clamp-2">{item.description}</p>
                                    </div>

                                    <Link
                                        to={item.link}
                                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full w-fit transition-all duration-300 border border-white/20 group-hover:bg-school-teal group-hover:border-school-teal"
                                    >
                                        Explore
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExploreSection;
