import Link from 'next/link';
import { Logo } from '../icons/logo';
import { Button } from '../ui/button';
import { Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6 max-w-7xl">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-lg font-semibold font-headline">Opinion News</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:gap-6 text-sm">
          <Link href="/about" className=" hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className=" hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href="/support" className=" hover:underline underline-offset-4">
            Support
          </Link>
          <Link href="#" className=" hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </nav>
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </Button>
        </div>
      </div>
       <div className="border-t">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row md:px-6">
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
        </div>
    </footer>
  );
}
