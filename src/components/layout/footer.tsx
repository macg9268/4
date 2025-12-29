import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-8 w-auto" />
          <p className="text-center text-sm leading-loose md:text-left">
            A modern cloud solutions provider.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} 4 Cloud Services LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
