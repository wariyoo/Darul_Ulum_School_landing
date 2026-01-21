import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery6 from "@/assets/gallery-6.jpg";

const Rules = () => {
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
                            Rules & Regulations
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
                                    src={gallery6}
                                    alt="Handbook"
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
                            <h2 className="text-3xl font-bold text-school-navy">Code of Conduct</h2>
                            <div className="w-20 h-1 bg-school-teal rounded-full" />
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Darul-Ulum is committed to maintaining a safe, respectful, and disciplined environment conducive to learning. Our rules and regulations guide student behavior and interactions within the school community.
                            </p>
                            <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed space-y-2">
                                <li>Respect for teachers, staff, and fellow students.</li>
                                <li>Punctuality and regular attendance.</li>
                                <li>Adherence to the school uniform policy.</li>
                                <li>Responsible use of school facilities and technology.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Rules;
