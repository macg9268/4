import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            A modern cloud solutions provider.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} 4 Cloud Services LLC. All rights reserved.
          </p>
          <Link href="https://github.com/macg9268" target="_blank" rel="noopener noreferrer">
            <Button size="icon" className="animated-button-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
