import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
