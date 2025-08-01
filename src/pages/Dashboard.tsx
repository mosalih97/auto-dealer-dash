
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Car, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Eye,
  Plus
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'إجمالي الإعلانات',
      value: '1,234',
      change: '+12.5%',
      icon: Car,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'المستخدمين النشطين',
      value: '892',
      change: '+8.2%',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'الإعلانات المعتمدة',
      value: '1,089',
      change: '+5.1%',
      icon: CheckCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'في انتظار الموافقة',
      value: '45',
      change: '+2',
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ];

  const recentAds = [
    {
      id: 1,
      title: 'BMW X5 2020',
      user: 'أحمد محمد',
      price: '250,000 ريال',
      status: 'pending',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'تويوتا كامري 2019',
      user: 'فاطمة علي',
      price: '85,000 ريال',
      status: 'approved',
      date: '2024-01-14',
    },
    {
      id: 3,
      title: 'مرسيدس C300 2021',
      user: 'خالد السعد',
      price: '180,000 ريال',
      status: 'pending',
      date: '2024-01-13',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">معتمد</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">في الانتظار</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">مرفوض</Badge>;
      default:
        return <Badge>غير محدد</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold arabic-text">مرحباً بك في لوحة التحكم</h1>
        <Button className="arabic-text">
          <Plus className="w-4 h-4 ml-2" />
          إضافة إعلان جديد
        </Button>
      </div>

      {/* إحصائيات سريعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="dashboard-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium arabic-text">
                {stat.title}
              </CardTitle>
              <div className={`${stat.bgColor} p-2 rounded-lg`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> من الشهر الماضي
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* الإعلانات الحديثة */}
        <Card className="dashboard-shadow">
          <CardHeader>
            <CardTitle className="arabic-text">الإعلانات الحديثة</CardTitle>
            <CardDescription className="arabic-text">
              آخر الإعلانات المضافة للموقع
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAds.map((ad) => (
                <div key={ad.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Car className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium arabic-text">{ad.title}</h4>
                      <p className="text-sm text-muted-foreground arabic-text">
                        بواسطة: {ad.user}
                      </p>
                      <p className="text-sm font-semibold text-green-600">
                        {ad.price}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    {getStatusBadge(ad.status)}
                    <p className="text-xs text-muted-foreground mt-1">
                      {ad.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* إجراءات سريعة */}
        <Card className="dashboard-shadow">
          <CardHeader>
            <CardTitle className="arabic-text">إجراءات سريعة</CardTitle>
            <CardDescription className="arabic-text">
              الإجراءات الأكثر استخداماً
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
                <Plus className="h-6 w-6" />
                <span className="text-sm arabic-text">إضافة إعلان</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
                <CheckCircle className="h-6 w-6" />
                <span className="text-sm arabic-text">اعتماد الإعلانات</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
                <Users className="h-6 w-6" />
                <span className="text-sm arabic-text">إدارة المستخدمين</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center space-y-2">
                <Eye className="h-6 w-6" />
                <span className="text-sm arabic-text">عرض التقارير</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* تنبيهات مهمة */}
      <Card className="dashboard-shadow border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 space-x-reverse text-orange-800 arabic-text">
            <AlertCircle className="h-5 w-5" />
            <span>تنبيهات مهمة</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-orange-700 arabic-text">
              • يوجد 45 إعلان في انتظار المراجعة والاعتماد
            </p>
            <p className="text-sm text-orange-700 arabic-text">
              • 3 مستخدمين جدد انضموا اليوم
            </p>
            <p className="text-sm text-orange-700 arabic-text">
              • تحديث النظام مجدول لغداً في الساعة 2:00 ص
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
