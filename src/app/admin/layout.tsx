import AdminSidebar from '@/components/layout/admin-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <main className="flex-1 bg-muted/40 p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
