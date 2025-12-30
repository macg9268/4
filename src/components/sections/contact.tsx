import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-lg">
              Have questions about our services or need a custom solution? Our team is ready to help you on your cloud journey.
              Fill out the form, and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
