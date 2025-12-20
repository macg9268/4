import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

export function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full flex items-center justify-center text-center text-primary-foreground">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          priority
          className="object-cover -z-10 brightness-[.4]"
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Power Your Future with 4Cloud
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/90 md:text-xl">
            Reliable, scalable, and secure cloud solutions designed to accelerate your innovation and growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="#services">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">Our Services</Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-background">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
