
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger,
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
} from 'lucide-react';
import { Logo } from '../icons/logo';
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
]

const usersLinks = [
    { href: '/admin/users', label: 'All Users', icon: Users },
    { href: '/admin/users/new', label: 'Create User', icon: UserPlus },
    { href: '/admin/user-roles', label: 'User Roles', icon: ShieldCheck },
];

const settingsLinks = [
    { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname();

  const renderLink = (link: { href: string; label: string; icon: React.ElementType }) => (
    <SidebarMenuItem key={link.href}>
      <SidebarMenuButton
        asChild
        isActive={
          link.href === '/admin'
            ? pathname === link.href
            : pathname.startsWith(link.href)
        }
        tooltip={{
          children: link.label,
        }}
      >
        <Link href={link.href}>
          <link.icon className="h-5 w-5" />
          <span>{link.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <>
      <Sidebar collapsible="icon" className="hidden sm:flex">
        <SidebarContent>
          <div className="flex flex-col h-full">
              <SidebarHeader>
                  <div className="flex items-center gap-2">
                  <Logo className="h-8 w-8 text-primary" />
                  <div className="flex flex-col">
                      <span className="text-lg font-semibold leading-tight">Opinion News</span>
                      <span className="text-sm text-muted-foreground leading-tight">Admin Panel</span>
                  </div>
                  </div>
              </SidebarHeader>
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
                                  <LogOut className="h-5 w-5" />
                                  <span>Logout</span>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                      </SidebarMenu>
                  </SidebarGroup>
              </div>
          </div>
        </SidebarContent>
      </Sidebar>
      <Sidebar collapsible="offcanvas" className="sm:hidden">
        <SidebarContent>
            <SheetHeader className="border-b p-4">
                <SheetTitle>Admin Menu</SheetTitle>
            </SheetHeader>
            <div className="flex h-full flex-col">
                 <SidebarHeader>
                    <div className="flex items-center gap-2">
                        <Logo className="h-8 w-8 text-primary" />
                        <div className="flex flex-col">
                        <span className="text-lg font-semibold leading-tight">Opinion News</span>
                        <span className="text-sm text-muted-foreground leading-tight">Admin</span>
                        </div>
                    </div>
                </SidebarHeader>
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
    </>
  );
}
