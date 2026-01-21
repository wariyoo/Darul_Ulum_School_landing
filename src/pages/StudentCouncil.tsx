import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";

const StudentCouncil = () => {
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
                            Student Council
                        </motion.h1>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video group">
                                <img
                                    src={gallery1}
                                    alt="Student Council"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 w-full space-y-6"
                        >
                            <h2 className="text-3xl font-bold text-school-navy">Empowering Student Voices</h2>
                            <div className="w-20 h-1 bg-school-teal rounded-full" />
                            <p className="text-lg text-gray-600 leading-relaxed">
                                The Student Council at Darul-Ulum plays a pivotal role in fostering leadership and active citizenship among students. It serves as a bridge between the student body and the administration, ensuring that student concerns are heard and addressed.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Members are elected by their peers and participate in organizing event, community service projects, and initiatives that improve school life. It is an excellent platform for students to develop organizational and interpersonal skills.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default StudentCouncil;
