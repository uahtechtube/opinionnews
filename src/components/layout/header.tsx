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
  Mails,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '../theme-toggle';
import { categories } from '@/lib/data';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/types';
import { ScrollArea } from '../ui/scroll-area';

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
  contact: Mails,
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
          "flex items-center gap-3 transition-colors hover:text-foreground shrink-0",
          isActive ? "text-foreground font-semibold" : "text-muted-foreground",
          isMobile && "text-lg"
        )}
      >
        {Icon && <Icon className="h-5 w-5" />}
        <span>{category.name}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-auto max-w-7xl flex-wrap items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Opinion News Hub
          </span>
        </Link>
        
        <div className="flex items-center gap-2 order-2 md:order-3">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-9" />
          </div>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <Link href="/" className="mr-6 flex items-center gap-2 mb-8">
                <Newspaper className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">Opinion News Hub</span>
              </Link>
               <ScrollArea className="h-[calc(100%-4rem)]">
                <div className="flex flex-col gap-6 pr-6">
                  {categories.map((category) => renderCategoryLink(category, true))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden md:flex items-center gap-x-6 gap-y-2 text-sm w-full md:w-auto order-3 md:order-2 mt-2 md:mt-0 justify-center flex-wrap">
            {categories.map((category) => renderCategoryLink(category))}
        </nav>
      </div>
    </header>
  );
}
