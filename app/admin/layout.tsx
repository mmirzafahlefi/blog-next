import { Metadata } from 'next';
import AdminSidebar from '@/components/admin/sidebar';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Modern Blog',
  description: 'Admin dashboard for Modern Blog',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto bg-muted/50 p-6">{children}</main>
    </div>
  );
}