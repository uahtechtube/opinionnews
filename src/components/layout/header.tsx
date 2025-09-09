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
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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

  const mainCategories = categories.filter(c => c.slug !== 'about' && c.slug !== 'contact');
  const aboutCategory = categories.find(c => c.slug === 'about');
  const contactCategory = categories.find(c => c.slug === 'contact');

  const renderCategoryLink = (category: Category, isMobile = false) => {
    if (!category) return null;
    const Icon = iconMap[category.slug];
    const href = category.slug === 'about' || category.slug === 'contact' ? `/${category.slug}` : `/category/${category.slug}`;
    const isActive = pathname === href;
    
    return (
      <Link
        key={category.slug}
        href={href}
        className={cn(
          "flex items-center gap-3 transition-colors hover:text-foreground shrink-0",
          isActive ? "text-foreground font-semibold" : "text-muted-foreground",
          isMobile && "text-lg py-2"
        )}
      >
        {Icon && <Icon className="h-5 w-5" />}
        <span>{category.name}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-auto max-w-7xl flex-col items-center justify-between px-4 py-3 md:px-6">
        <div className="flex w-full items-center justify-between">
            <Link href="/" className="mr-6 flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-primary" />
              <span className="hidden font-bold sm:inline-block font-headline">
                Opinion News
              </span>
            </Link>
            
            <div className="flex items-center gap-2">
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
                <SheetContent side="right" className="w-[300px] sm:w-[340px] flex flex-col p-0">
                  <SheetHeader className="p-4 border-b">
                    <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="p-4 flex flex-col h-full flex-1">
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search articles..." className="pl-9" />
                    </div>
                    <ScrollArea className="flex-1 -mr-4">
                      <nav className="flex flex-col gap-2 pr-4">
                        {mainCategories.map((category) => renderCategoryLink(category, true))}
                        <div className="my-2 border-t border-muted"></div>
                        {aboutCategory && renderCategoryLink(aboutCategory, true)}
                        {contactCategory && renderCategoryLink(contactCategory, true)}
                      </nav>
                    </ScrollArea>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>

        <nav className="hidden md:flex items-center gap-x-6 gap-y-2 text-sm w-full mt-2 justify-center flex-wrap">
            {mainCategories.map((category) => renderCategoryLink(category))}
            <div className="flex-grow"></div>
            {aboutCategory && renderCategoryLink(aboutCategory)}
            {contactCategory && renderCategoryLink(contactCategory)}
        </nav>
      </div>
    </header>
  );
}
