import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    { src: gallery1, title: "Modern Classrooms", category: "Facilities" },
    { src: gallery2, title: "Science Laboratory", category: "Academics" },
    { src: gallery3, title: "Sports Field", category: "Athletics" },
    { src: gallery4, title: "Library", category: "Facilities" },
    { src: gallery5, title: "Graduation Day", category: "Events" },
    { src: gallery6, title: "Computer Lab", category: "Technology" },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Our School</span>
          <h2 className="section-title mt-2">Photo Gallery</h2>
          <p className="text-muted-foreground mt-4">
            Take a visual tour of our beautiful campus and see the vibrant
            learning environment we offer our students.
          </p>
        </ScrollAnimation>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1}>
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                onClick={() => setSelectedImage(item.src)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-medium text-primary-foreground/80 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-primary-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => setSelectedImage(null)}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
