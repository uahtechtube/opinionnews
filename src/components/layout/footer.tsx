import Link from 'next/link';
import { Newspaper } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold font-headline">Opinion News</p>
        </div>
        <div className="text-center order-last md:order-none flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Opinion News. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
                Designed by{' '}
                <a
                    href="https://www.linkedin.com/in/umara-alhaji-hussaini-902193332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                >
                    UAHTECHTUBE
                </a>
            </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-6">
          <Link href="/about" className="text-sm hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
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
