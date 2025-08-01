
import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center justify-between border-b bg-white px-4 dashboard-shadow">
            <div className="flex items-center space-x-2 space-x-reverse">
              <SidebarTrigger />
              <h1 className="text-xl font-semibold arabic-text">لوحة التحكم</h1>
            </div>
            
            <div className="flex items-center space-x-2 space-x-reverse">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <div className="text-sm arabic-text">
                <p className="font-medium">{user?.name}</p>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 bg-gray-50">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
