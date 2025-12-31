import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden animated-gradient">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up text-foreground" style={{ animationDelay: '0.2s' }}>
            Power Your Future with 4Cloud
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90 md:text-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Reliable, scalable, and secure cloud solutions designed to accelerate your innovation and growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link href="#services">
              <Button size="lg">Our Services</Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="default">
                Get in touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
