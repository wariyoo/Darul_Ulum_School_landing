import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "../components/ScrollAnimation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryItems = [
        {
            title: "Modern Classrooms",
            category: "Facilities",
            thumbnail: gallery1,
            images: [gallery1, gallery2, gallery3] // Multiple images for this category
        },
        {
            title: "Science Laboratory",
            category: "Academics",
            thumbnail: gallery2,
            images: [gallery2, gallery4, gallery5]
        },
        {
            title: "Sports Field",
            category: "Athletics",
            thumbnail: gallery3,
            images: [gallery3, gallery6, gallery1]
        },
        {
            title: "Library",
            category: "Facilities",
            thumbnail: gallery4,
            images: [gallery4, gallery1, gallery2]
        },
        {
            title: "Graduation Day",
            category: "Events",
            thumbnail: gallery5,
            images: [gallery5, gallery3, gallery6]
        },
        {
            title: "Computer Lab",
            category: "Technology",
            thumbnail: gallery6,
            images: [gallery6, gallery4, gallery5]
        },
    ];

    const handleNext = () => {
        if (selectedItemIndex !== null) {
            const maxIndex = galleryItems[selectedItemIndex].images.length - 1;
            setCurrentImageIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }
    };

    const handlePrevious = () => {
        if (selectedItemIndex !== null) {
            const maxIndex = galleryItems[selectedItemIndex].images.length - 1;
            setCurrentImageIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
        }
    };

    const openModal = (index: number) => {
        setSelectedItemIndex(index);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedItemIndex(null);
        setCurrentImageIndex(0);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedItemIndex === null) return;

            if (e.key === "ArrowRight") {
                handleNext();
            } else if (e.key === "ArrowLeft") {
                handlePrevious();
            } else if (e.key === "Escape") {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedItemIndex, currentImageIndex]);

    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-bold text-school-navy mb-6"
                        >
                            Photo Gallery
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-600"
                        >
                            Take a visual tour of our beautiful campus and see the vibrant
                            learning environment we offer our students.
                        </motion.p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryItems.map((item, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <motion.div
                                    className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                            <div>
                                                <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-primary-foreground mt-1">
                                                    {item.title}
                                                </h3>
                                            </div>
                                            <Button
                                                onClick={() => openModal(index)}
                                                className="bg-school-teal hover:bg-school-teal/90 text-white px-4 py-2 text-sm rounded-full"
                                            >
                                                View More
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>

                {/* Carousel Modal */}
                <AnimatePresence>
                    {selectedItemIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={closeModal}
                        >
                            {/* Close Button */}
                            <motion.button
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                                onClick={closeModal}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                            >
                                <X className="w-6 h-6" />
                            </motion.button>

                            {/* Previous Button */}
                            <motion.button
                                className="absolute left-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevious();
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </motion.button>

                            {/* Next Button */}
                            <motion.button
                                className="absolute right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </motion.button>

                            {/* Image Display */}
                            <motion.img
                                key={currentImageIndex}
                                src={galleryItems[selectedItemIndex].images[currentImageIndex]}
                                alt={`${galleryItems[selectedItemIndex].title} - Image ${currentImageIndex + 1}`}
                                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            />

                            {/* Image Counter */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full text-foreground text-sm font-medium">
                                {currentImageIndex + 1} / {galleryItems[selectedItemIndex].images.length}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
};

export default Gallery;
