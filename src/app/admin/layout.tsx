import AdminHeader from '@/components/layout/admin-header';
import AdminSidebar from '@/components/layout/admin-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <AdminSidebar />
        <div className="flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                 <AdminHeader />
                 <div className="flex-1" />
                 <Button asChild>
                    <Link href="/admin/articles/new">
                        <Plus className="mr-2 h-4 w-4" /> New Article
                    </Link>
                </Button>
                <ThemeToggle />
            </header>
          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
