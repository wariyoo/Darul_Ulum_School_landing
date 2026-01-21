import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const History = () => {
    const historyData = [
        {
            year: "2020",
            image: gallery1,
            description: "In 2020, Darul-Ulum School celebrated its 25th anniversary, marking a quarter-century of educational excellence and community service. Despite global challenges, we continued to adapt and thrive, implementing innovative online learning solutions while maintaining our commitment to holistic education. This milestone year saw the graduation of our largest class to date, with students achieving unprecedented academic success and securing placements at prestigious universities worldwide."
        },
        {
            year: "2015",
            image: gallery2,
            description: "The year 2015 marked a significant expansion with the inauguration of our state-of-the-art Science and Technology Center. This modern facility, equipped with advanced laboratories and cutting-edge resources, opened new horizons for our students in STEM education. The center became a hub of innovation, fostering critical thinking and hands-on learning experiences that prepared students for the challenges of the 21st century."
        },
        {
            year: "2010",
            image: gallery3,
            description: "In 2010, Darul-Ulum achieved accreditation from the International Schools Council, a testament to our commitment to maintaining world-class educational standards. This recognition placed our institution among the elite schools globally and validated our integrated curriculum approach that balances academic excellence with character development. The accreditation process also led to significant improvements in our teaching methodologies and assessment practices."
        },
        {
            year: "2005",
            image: gallery4,
            description: "The establishment of our comprehensive library and resource center in 2005 transformed our approach to learning and research. Housing over 50,000 books, digital resources, and quiet study spaces, this facility became the intellectual heart of our campus. Students gained access to a wealth of knowledge spanning multiple disciplines, supporting their academic pursuits and cultivating a lifelong love of reading and learning."
        },
        {
            year: "1995",
            image: gallery5,
            description: "Darul-Ulum School opened its doors in 1995 with a pioneering vision: to provide education that nurtures both the mind and the spirit. Founded by a group of dedicated educators and community leaders, the school began with just 50 students in a modest building. From these humble beginnings, we built our foundation on the principles of academic excellence, moral integrity, and community service that continue to guide us today."
        }
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-school-navy mb-6"
                        >
                            Our History
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            A journey of excellence spanning decades
                        </motion.p>
                    </div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden md:block" />

                        {historyData.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="relative mb-16 last:mb-0"
                            >
                                {/* Year Badge */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-school-navy text-white px-6 py-2 rounded-full font-bold text-xl relative z-10">
                                        {item.year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    {/* Image */}
                                    <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                                        <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3] group">
                                            <img
                                                src={item.image}
                                                alt={`${item.year} milestone`}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} bg-white p-6 rounded-xl shadow-md`}>
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Connector Dot */}
                                <div className="absolute left-1/2 top-12 transform -translate-x-1/2 w-4 h-4 bg-school-teal rounded-full border-4 border-white shadow-md hidden md:block z-10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default History;
