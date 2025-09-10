"use client";

import Link from 'next/link';
import {
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
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
  Search,
} from 'lucide-react';
import { Logo } from '../icons/logo';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Image from 'next/image';
import { ThemeToggle } from '../theme-toggle';
import { SheetHeader, SheetTitle } from '../ui/sheet';

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
];

const usersLinks = [
  { href: '/admin/users', label: 'All Users', icon: Users },
  { href: '/admin/users/new', 'label': 'Create User', icon: UserPlus },
  { href: '/admin/user-roles', 'label': 'User Roles', icon: ShieldCheck },
];

const settingsLinks = [{ href: '/admin/settings', label: 'Settings', icon: Settings }];

export default function AdminHeader() {
  const pathname = usePathname();

  const renderLink = (link: { href: string; label: string; icon: React.ElementType }) => (
    <SidebarMenuItem key={link.href}>
      <SidebarMenuButton
        asChild
        isActive={pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href))}
      >
        <Link href={link.href}>
          <link.icon className="h-4 w-4" />
          {link.label}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sidebar collapsible="offcanvas" className="sm:hidden">
         <SheetHeader className="border-b p-4">
            <SheetTitle className="sr-only">Admin Menu</SheetTitle>
        </SheetHeader>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold leading-tight">Opinion News</span>
              <span className="text-sm text-muted-foreground leading-tight">Admin</span>
            </div>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-0">
          <div className="flex h-full flex-col">
            <div className="flex-1 p-2">
              <SidebarGroup>
                <SidebarGroupLabel>Main</SidebarGroupLabel>
                <SidebarMenu>{mainLinks.map(renderLink)}</SidebarMenu>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Content</SidebarGroupLabel>
                <SidebarMenu>{contentLinks.map(renderLink)}</SidebarMenu>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Users</SidebarGroupLabel>
                <SidebarMenu>{usersLinks.map(renderLink)}</SidebarMenu>
              </SidebarGroup>
            </div>
            <div className="p-2">
              <SidebarGroup>
                <SidebarMenu>
                  {settingsLinks.map(renderLink)}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <LogOut className="h-4 w-4" />
                      Logout
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </div>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger className="sm:hidden" />

      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
        />
      </div>
      <ThemeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
            <Image
              src="https://i.pravatar.cc/150?u=admin"
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
