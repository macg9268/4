import { ContactForm } from "@/components/contact-form";

export function Hero() {
  return (
    <section id="contact" className="relative w-full flex items-center justify-center text-center py-16 sm:py-24 animated-gradient">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <ContactForm variant="hero" />
        </div>
      </div>
    </section>
  );
}
