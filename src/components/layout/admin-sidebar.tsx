
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Newspaper,
  Users,
  MessageSquare,
  Settings,
  PlusCircle,
  Library,
  Tag,
  BarChart,
  UserPlus,
  ShieldCheck,
  LogOut,
  Calendar,
} from 'lucide-react';
import { Logo } from '../icons/logo';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const mainLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart },
];

const contentLinks = [
    { href: '/admin/articles', label: 'All Posts', icon: Newspaper },
    { href: '/admin/articles/new', label: 'New Post', icon: PlusCircle },
    { href: '/admin/categories', label: 'Categories', icon: Tag },
    { href: '/admin/media', label: 'Media Library', icon: Library },
    { href: '/admin/comments', label: 'Comments', icon: MessageSquare },
]

const usersLinks = [
    { href: '/admin/users', label: 'All Users', icon: Users },
    { href: '/admin/users/new', label: 'Create User', icon: UserPlus },
    { href: '/admin/user-roles', label: 'User Roles', icon: ShieldCheck },
];

const settingsLinks = [
    { href: '/admin/settings', label: 'Settings', icon: Settings },
    { href: '/admin/calendar', label: 'Calendar', icon: Calendar },
]

const SidebarLink = ({ link }: { link: { href: string; label: string; icon: React.ElementType } }) => {
    const pathname = usePathname();
    const isActive =
          link.href === '/admin'
            ? pathname === link.href
            : pathname.startsWith(link.href);

    return (
        <Link
            href={link.href}
            className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                isActive && "bg-muted text-primary"
            )}
        >
            <link.icon className="h-4 w-4" />
            {link.label}
        </Link>
    );
};

export const SidebarContent = () => (
    <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
                <Logo className="h-6 w-6" />
                <span className="">Opinion News</span>
            </Link>
        </div>
        <ScrollArea className="flex-1">
            <nav className="grid items-start px-2 py-4 text-sm font-medium lg:px-4">
                <h3 className="my-2 px-3 text-xs font-semibold text-muted-foreground uppercase">Main</h3>
                {mainLinks.map((link) => (
                    <SidebarLink key={link.href} link={link} />
                ))}

                <h3 className="my-2 px-3 text-xs font-semibold text-muted-foreground uppercase">Content</h3>
                {contentLinks.map((link) => (
                    <SidebarLink key={link.href} link={link} />
                ))}

                 <h3 className="my-2 px-3 text-xs font-semibold text-muted-foreground uppercase">Users</h3>
                {usersLinks.map((link) => (
                    <SidebarLink key={link.href} link={link} />
                ))}
            </nav>
        </ScrollArea>
        <div className="mt-auto p-4 border-t">
             <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {settingsLinks.map((link) => (
                    <SidebarLink key={link.href} link={link} />
                ))}
                <Link
                    href="#"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Link>
             </nav>
        </div>
    </div>
);


export default function AdminSidebar() {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
        <SidebarContent />
    </div>
  );
}

export function MobileAdminSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
                >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
                <SheetHeader>
                    <SheetTitle className="sr-only">Admin Menu</SheetTitle>
                </SheetHeader>
                <SidebarContent />
            </SheetContent>
        </Sheet>
    )
}
