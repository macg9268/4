import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center text-center py-16 sm:py-24 animated-gradient">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animated-text-gradient text-primary-foreground">
              Power Your Future with 4Cloud
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/90 md:text-xl">
              Reliable, scalable, and secure cloud solutions designed to accelerate your innovation and growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#services">
                <Button size="lg" className="animated-button-gradient">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-primary-foreground">
                  Get in touch
                </Button>
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
