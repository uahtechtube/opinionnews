import Link from 'next/link';
import { Newspaper } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold font-headline">Opinion News Hub</p>
        </div>
        <p className="text-sm text-muted-foreground order-last md:order-none">
          &copy; {new Date().getFullYear()} Opinion News Hub. All rights reserved.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-6">
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
