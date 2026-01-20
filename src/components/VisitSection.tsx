import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";

const VisitSection = () => {
  return (
    <section id="visit" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <ScrollAnimation direction="left">
            <div className="space-y-6">
              <span className="section-label">Visit Us</span>
              <h2 className="section-title">Find Us Here</h2>
              <p className="text-muted-foreground">
                We are conveniently located in the heart of the city, easily accessible
                by public transport and with ample parking for our visitors.
              </p>

              {/* Info Cards */}
              <div className="space-y-4 mt-8">
                {/* Address */}
                <div className="card-elevated p-4 border-left-accent">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-school-navy">Address</h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        Dire Dawa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="card-elevated p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-school-navy">Phone</h4>
                        <p className="text-muted-foreground text-sm mt-1">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-elevated p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-school-navy">Email</h4>
                        <p className="text-muted-foreground text-sm mt-1">info@darul-ulum.edu</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-primary text-primary-foreground rounded-xl p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office Hours</h4>
                      <p className="text-primary-foreground/80 text-sm mt-1">
                        Mon - Fri: 7:30 AM - 4:00 PM<br />
                        Sat: 8:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right - Map Placeholder */}
          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15720.0!2d41.833984!3d9.601941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2set!4v1716298547434!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Darul-Ulum School Location"
              ></iframe>
              <div className="absolute bottom-4 left-4">
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="shadow-lg"
                >
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=9.601941,41.833984"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
