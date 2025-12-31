export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-headline font-semibold">Support</h3>
            <a
              href="mailto:support@4cloud.com.mx"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              support@4cloud.com.mx
            </a>
            <p className="text-sm text-muted-foreground">
              Drop us a line if you have suggestions.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-headline font-semibold">About</h3>
            <p className="text-muted-foreground">
              Created as a personal project
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-headline font-semibold">Company</h3>
            <p className="text-muted-foreground">4 Cloud Services LLC</p>
            <p className="text-sm text-muted-foreground">Austin, Texas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
