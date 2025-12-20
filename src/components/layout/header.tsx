import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CloudIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CloudIcon className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">4Cloud</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>Contact Sales</Button>
        </div>
      </div>
    </header>
  );
}
