import { Star, Quote } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The education my children received at Darul-Ulum was exceptional. The teachers truly care about each student's success and growth.",
      author: "Fatima Ahmed",
      role: "Parent of two",
      rating: 5,
    },
    {
      quote: "State-of-the-art facilities and very knowledgeable teachers. My son felt very comfortable throughout his entire learning journey.",
      author: "James Wilson",
      role: "Parent",
      rating: 5,
    },
    {
      quote: "Best school in the city. The principal and staff are amazing and made my daughter feel so welcomed during her first year.",
      author: "Maria Garcia",
      role: "Mother of one",
      rating: 5,
    },
  ];



  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <ScrollAnimation className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mt-2">What Parents Say</h2>
        </ScrollAnimation>

        {/* Testimonials Horizontal Scroll */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory px-4 -mx-4 md:px-0 md:mx-0 remove-scrollbar">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center">
              <div className="card-elevated p-6 h-full flex flex-col justify-between">
                <div>
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />

                  {/* Quote Text */}
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-school-gold text-school-gold" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="mt-4">
                    <p className="font-semibold text-school-navy">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
