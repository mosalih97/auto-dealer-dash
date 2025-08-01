
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  Users,
  Car,
  Settings,
  PlusCircle,
  CheckCircle,
  BarChart3,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    title: 'لوحة التحكم',
    url: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'الإعلانات',
    url: '/dashboard/ads',
    icon: Car,
  },
  {
    title: 'إضافة إعلان',
    url: '/dashboard/add-ad',
    icon: PlusCircle,
  },
  {
    title: 'اعتماد الإعلانات',
    url: '/dashboard/approve-ads',
    icon: CheckCircle,
  },
  {
    title: 'المستخدمين',
    url: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'التقارير',
    url: '/dashboard/reports',
    icon: BarChart3,
  },
  {
    title: 'الإعدادات',
    url: '/dashboard/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const { logout, user } = useAuth();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClass = (isActive: boolean) =>
    isActive
      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
      : 'hover:bg-accent hover:text-accent-foreground';

  const handleLogout = () => {
    logout();
  };

  return (
    <Sidebar className={`${collapsed ? 'w-14' : 'w-64'} transition-all duration-300`} collapsible>
      <SidebarContent className="arabic-text">
        {!collapsed && (
          <div className="p-4 border-b">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Car className="h-8 w-8 text-primary" />
              <div>
                <h2 className="font-bold text-lg">اضف اعلان</h2>
                <p className="text-sm text-muted-foreground">لوحة التحكم</p>
              </div>
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel className="arabic-text">القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={`${getNavClass(isActive(item.url))} flex items-center space-x-2 space-x-reverse`}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span className="arabic-text">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t">
          {!collapsed && user && (
            <div className="mb-4">
              <p className="text-sm font-medium arabic-text">{user.name}</p>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          )}
          <Button 
            variant="outline" 
            size={collapsed ? "icon" : "default"}
            onClick={handleLogout}
            className="w-full"
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="mr-2 arabic-text">تسجيل خروج</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
