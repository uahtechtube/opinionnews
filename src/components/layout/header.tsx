"use client";

import Link from 'next/link';
import {
  Newspaper,
  Search,
  Menu,
  Scale,
  Trophy,
  Film,
  Cpu,
  Briefcase,
  HeartPulse,
  Coffee,
  Lightbulb,
  Feather,
  Award,
  Mic,
  Clapperboard,
  Users,
  Info,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '../theme-toggle';
import { categories } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/types';

const iconMap: Record<string, React.ElementType> = {
  news: Newspaper,
  opinion: Lightbulb,
  'ai-news': Cpu,
  poetry: Feather,
  features: Award,
  podcasts: Mic,
  video: Clapperboard,
  interviews: Users,
  about: Info,
  politics: Scale,
  sports: Trophy,
  entertainment: Film,
  technology: Cpu,
  business: Briefcase,
  health: HeartPulse,
  lifestyle: Coffee,
};

export default function Header() {
  const pathname = usePathname();

  const renderCategoryLink = (category: Category, isMobile = false) => {
    const Icon = iconMap[category.slug];
    const isActive = pathname === `/category/${category.slug}`;
    return (
      <Link
        key={category.slug}
        href={`/category/${category.slug}`}
        className={cn(
          "flex items-center gap-2 transition-colors hover:text-foreground",
          isActive ? "text-foreground font-semibold" : "text-muted-foreground",
          isMobile && "text-lg"
        )}
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span>{category.name}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Opinion News Hub
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex flex-wrap">
          {categories.map((category) => renderCategoryLink(category))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-9" />
          </div>
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center gap-2 mb-8">
                <Newspaper className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Opinion News Hub</span>
              </Link>
              <div className="flex flex-col gap-6">
                {categories.map((category) => renderCategoryLink(category, true))}
              </div>
              <div className="mt-8 flex flex-col gap-4">
                 <Button variant="outline" asChild><Link href="/login">Log In</Link></Button>
                 <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground"><Link href="/signup">Sign Up</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
