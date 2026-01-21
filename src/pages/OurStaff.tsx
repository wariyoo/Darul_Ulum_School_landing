import { motion } from "framer-motion";
import ScrollAnimation from "../components/ScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import leaderPrincipal from "@/assets/leader-principal.jpg";
import leaderVicePrincipal from "@/assets/leader-vice-principal.jpg";
import leaderAcademic from "@/assets/leader-academic.jpg";

const OurStaff = () => {
    const staff = [
        {
            name: "Dr. Ahmad Hassan",
            role: "Principal",
            bio: "Leading Darul-Ulum with over 20 years of experience in education and academic administration. Dr. Hassan believes in a holistic approach to education, ensuring every student achieves their potential.",
            image: leaderPrincipal,
        },
        {
            name: "Ms. Sarah Rahman",
            role: "Vice Principal",
            bio: "Dedicated to fostering a supportive learning environment for all students. Ms. Rahman oversees student welfare and disciplinary matters, ensuring a safe and inclusive atmosphere.",
            image: leaderVicePrincipal,
        },
        {
            name: "Mr. David Chen",
            role: "Academic Director",
            bio: "Specializing in curriculum development and innovative teaching methodologies. Mr. Chen leads our academic initiatives, constantly refining our programs to meet global standards.",
            image: leaderAcademic,
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
                            Meet Our Leaders
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Our team of dedicated educators and administrators are here to guide your child towards academic excellence.
                        </motion.p>
                    </div>

                    <div className="space-y-24">
                        {staff.map((member, index) => (
                            <ScrollAnimation key={member.name} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                                <div className="flex-1 w-full">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] md:aspect-[4/3] group max-w-lg mx-auto">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-school-navy/10 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>
                                </div>
                                <div className="flex-1 w-full space-y-6">
                                    <h2 className="text-3xl font-bold text-school-navy">{member.name}</h2>
                                    <div className="text-xl text-school-teal font-medium">{member.role}</div>
                                    <div className="w-20 h-1 bg-school-teal rounded-full" />
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {member.bio}
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

export default OurStaff;
