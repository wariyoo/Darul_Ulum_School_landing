import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollAnimation from "./ScrollAnimation";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I enroll my child at Darul-Ulum?",
      answer: "You can start the enrollment process by visiting our admissions page or contacting our office directly. We'll guide you through the application, required documents, and assessment schedule.",
    },
    {
      question: "What are the tuition fees and payment options?",
      answer: "Our tuition fees vary by grade level. We offer flexible payment plans including monthly, quarterly, and annual options. Financial aid is available for qualifying families.",
    },
    {
      question: "What curriculum does the school follow?",
      answer: "We follow a nationally recognized curriculum enhanced with our unique character development and enrichment programs. Our approach combines academic excellence with holistic education.",
    },
    {
      question: "Are there extracurricular activities available?",
      answer: "Yes! We offer a wide range of extracurricular activities including sports, arts, music, debate club, science club, and many more to help students explore their interests.",
    },
    {
      question: "What is the student-to-teacher ratio?",
      answer: "We maintain a low student-to-teacher ratio of approximately 15:1 to ensure personalized attention and support for every student.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Header */}
          <ScrollAnimation direction="left">
            <div>
              <span className="section-label">Common Questions</span>
              <h2 className="section-title mt-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4">
                Have questions? We're here to help. Find answers to the most 
                common questions our parents ask.
              </p>

              {/* Contact Card */}
              <div className="card-elevated p-6 mt-8">
                <h4 className="font-bold text-school-navy">Still have questions?</h4>
                <p className="text-muted-foreground text-sm mt-2">
                  Can't find the answer you're looking for? Please chat with 
                  our friendly team.
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-primary font-semibold hover:underline"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right - Accordion */}
          <ScrollAnimation direction="right" delay={0.2}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-school-navy hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
