
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, 
  MoreHorizontal, 
  UserPlus, 
  Crown,
  Ban,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';
import { toast } from 'sonner';

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed.mohamed@example.com',
      phone: '+966501234567',
      status: 'active',
      role: 'user',
      adsCount: 12,
      joinDate: '2024-01-15',
      lastActive: '2024-01-20',
    },
    {
      id: 2,
      name: 'فاطمة علي',
      email: 'fatema.ali@example.com',
      phone: '+966507654321',
      status: 'active',
      role: 'premium',
      adsCount: 25,
      joinDate: '2023-12-10',
      lastActive: '2024-01-19',
    },
    {
      id: 3,
      name: 'خالد السعد',
      email: 'khalid.saad@example.com',
      phone: '+966509876543',
      status: 'suspended',
      role: 'user',
      adsCount: 5,
      joinDate: '2024-01-08',
      lastActive: '2024-01-18',
    },
    {
      id: 4,
      name: 'سارة أحمد',
      email: 'sara.ahmed@example.com',
      phone: '+966505555555',
      status: 'active',
      role: 'admin',
      adsCount: 0,
      joinDate: '2023-11-01',
      lastActive: '2024-01-20',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">نشط</Badge>;
      case 'suspended':
        return <Badge className="bg-red-100 text-red-800">معلق</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">معلق المراجعة</Badge>;
      default:
        return <Badge>غير محدد</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <Badge className="bg-purple-100 text-purple-800">مدير</Badge>;
      case 'premium':
        return <Badge className="bg-gold-100 text-yellow-800">مميز</Badge>;
      case 'user':
        return <Badge variant="outline">مستخدم</Badge>;
      default:
        return <Badge>غير محدد</Badge>;
    }
  };

  const handleUpgradeUser = (userId: number) => {
    toast.success('تم ترقية المستخدم بنجاح');
  };

  const handleSuspendUser = (userId: number) => {
    toast.success('تم تعليق المستخدم بنجاح');
  };

  const handleActivateUser = (userId: number) => {
    toast.success('تم تفعيل المستخدم بنجاح');
  };

  const filteredUsers = users.filter(user =>
    user.name.includes(searchTerm) || 
    user.email.includes(searchTerm) ||
    user.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold arabic-text">إدارة المستخدمين</h1>
        <Button className="arabic-text">
          <UserPlus className="w-4 h-4 ml-2" />
          إضافة مستخدم جديد
        </Button>
      </div>

      {/* بحث وفلترة */}
      <Card className="dashboard-shadow">
        <CardHeader>
          <CardTitle className="arabic-text">البحث والفلترة</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="البحث في المستخدمين..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 arabic-text"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* جدول المستخدمين */}
      <Card className="dashboard-shadow">
        <CardHeader>
          <CardTitle className="arabic-text">قائمة المستخدمين</CardTitle>
          <CardDescription className="arabic-text">
            إجمالي المستخدمين: {filteredUsers.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="arabic-text text-right">الاسم</TableHead>
                <TableHead className="arabic-text text-right">البريد الإلكتروني</TableHead>
                <TableHead className="arabic-text text-right">الهاتف</TableHead>
                <TableHead className="arabic-text text-right">الحالة</TableHead>
                <TableHead className="arabic-text text-right">النوع</TableHead>
                <TableHead className="arabic-text text-right">عدد الإعلانات</TableHead>
                <TableHead className="arabic-text text-right">آخر نشاط</TableHead>
                <TableHead className="arabic-text text-right">الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium arabic-text">{user.name}</TableCell>
                  <TableCell className="ltr text-left">{user.email}</TableCell>
                  <TableCell className="ltr text-left">{user.phone}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell className="text-center">{user.adsCount}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {user.lastActive}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="arabic-text">
                        <DropdownMenuItem onClick={() => handleUpgradeUser(user.id)}>
                          <Crown className="mr-2 h-4 w-4" />
                          ترقية لمميز
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          عرض التفاصيل
                        </DropdownMenuItem>
                        {user.status === 'active' ? (
                          <DropdownMenuItem 
                            onClick={() => handleSuspendUser(user.id)}
                            className="text-red-600"
                          >
                            <Ban className="mr-2 h-4 w-4" />
                            تعليق المستخدم
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem 
                            onClick={() => handleActivateUser(user.id)}
                            className="text-green-600"
                          >
                            <CheckCircle className="mr-2 h-4 w-4" />
                            تفعيل المستخدم
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* إحصائيات المستخدمين */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="dashboard-shadow">
          <CardHeader>
            <CardTitle className="arabic-text">المستخدمين النشطين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {users.filter(u => u.status === 'active').length}
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-shadow">
          <CardHeader>
            <CardTitle className="arabic-text">المستخدمين المميزين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {users.filter(u => u.role === 'premium').length}
            </div>
          </CardContent>
        </Card>

        <Card className="dashboard-shadow">
          <CardHeader>
            <CardTitle className="arabic-text">المستخدمين المعلقين</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {users.filter(u => u.status === 'suspended').length}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UsersManagement;
