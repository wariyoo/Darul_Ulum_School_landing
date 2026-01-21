import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Programs = () => {
    const programs = [
        {
            name: "Early Childhood",
            image: gallery1,
            description: "Our Early Childhood program nurtures curiosity and creativity in a safe, stimulating environment. We focus on social-emotional growth, foundational literacy, and numeracy through play-based learning. Small class sizes ensure individual attention, fostering a love for learning from the very start."
        },
        {
            name: "Primary School",
            image: gallery2,
            description: "The Primary School curriculum builds strong academic foundations while fostering critical thinking and character development. Students engage in a rich blend of core subjects, arts, and physical education. We emphasize holistic development, ensuring students are well-rounded and prepared for future academic challenges."
        },
        {
            name: "Middle School",
            image: gallery3,
            description: "Middle School is a time of transition and discovery. Our program encourages independence, collaborative learning, and deeper exploration of subjects, preparing students for the challenges of high school. We offer a supportive environment where students can explore their interests and develop leadership skills."
        },
        {
            name: "High School",
            image: gallery4,
            description: "High School offers a rigorous college-preparatory curriculum with a focus on leadership and academic excellence. Students have access to advanced placement courses, electives, and career guidance. We prepare students for success in higher education and beyond, with a strong emphasis on personal integrity and social responsibility."
        },
        {
            name: "Special Programs",
            image: gallery5,
            description: "We offer immediate support for diverse learning needs, including enrichment programs for gifted students and tailored assistance for those requiring extra support, ensuring every child succeeds. Our inclusive approach ensures that all students have the opportunity to reach their full potential."
        },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-school-navy mb-6"
                        >
                            Our Academic Programs
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Discover the diverse educational pathways we offer to suit every stage of your child's development.
                        </motion.p>
                    </div>

                    <div className="space-y-24">
                        {programs.map((program, index) => (
                            <ScrollAnimation
                                key={program.name}
                                id={program.name.toLowerCase().replace(/\s+/g, '-')}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center scroll-mt-24`}
                            >
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/9] group">
                                        <img
                                            src={program.image}
                                            alt={program.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-school-navy/10 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>
                                </div>
                                <div className="flex-1 w-full space-y-6">
                                    <h2 className="text-3xl font-bold text-school-navy">{program.name}</h2>
                                    <div className="w-20 h-1 bg-school-teal rounded-full" />
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Programs;
