
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  CheckCircle, 
  XCircle, 
  Eye,
  Car,
  Calendar,
  MapPin,
  DollarSign,
  Search
} from 'lucide-react';
import { toast } from 'sonner';

const ApproveAds = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAd, setSelectedAd] = useState<any>(null);
  const [rejectionReason, setRejectionReason] = useState('');

  const pendingAds = [
    {
      id: 1,
      title: 'BMW X5 2020 - حالة ممتازة',
      brand: 'BMW',
      model: 'X5',
      year: 2020,
      price: '250000',
      mileage: '35000',
      location: 'الرياض',
      description: 'سيارة BMW X5 موديل 2020 في حالة ممتازة، صيانة دورية في الوكالة...',
      images: ['/placeholder.svg'],
      seller: 'أحمد محمد',
      phone: '+966501234567',
      submittedAt: '2024-01-20 10:30',
      status: 'pending'
    },
    {
      id: 2,
      title: 'تويوتا كامري 2019',
      brand: 'Toyota',
      model: 'Camry',
      year: 2019,
      price: '85000',
      mileage: '45000',
      location: 'جدة',
      description: 'تويوتا كامري 2019 نظيفة جداً، استعمال شخص واحد...',
      images: ['/placeholder.svg'],
      seller: 'فاطمة علي',
      phone: '+966507654321',
      submittedAt: '2024-01-20 09:15',
      status: 'pending'
    },
    {
      id: 3,
      title: 'مرسيدس C300 2021',
      brand: 'Mercedes',
      model: 'C300',
      year: 2021,
      price: '180000',
      mileage: '15000',
      location: 'الدمام',
      description: 'مرسيدس C300 موديل 2021، لون أسود، فل كامل...',
      images: ['/placeholder.svg'],
      seller: 'خالد السعد',
      phone: '+966509876543',
      submittedAt: '2024-01-19 16:45',
      status: 'pending'
    }
  ];

  const handleApprove = (adId: number) => {
    toast.success('تم اعتماد الإعلان بنجاح');
  };

  const handleReject = (adId: number) => {
    if (!rejectionReason.trim()) {
      toast.error('يرجى إدخال سبب الرفض');
      return;
    }
    toast.success('تم رفض الإعلان');
    setRejectionReason('');
    setSelectedAd(null);
  };

  const filteredAds = pendingAds.filter(ad =>
    ad.title.includes(searchTerm) || 
    ad.brand.includes(searchTerm) ||
    ad.seller.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold arabic-text">اعتماد الإعلانات</h1>
        <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
          {filteredAds.length} إعلان في الانتظار
        </Badge>
      </div>

      {/* بحث */}
      <Card className="dashboard-shadow">
        <CardHeader>
          <CardTitle className="arabic-text">البحث في الإعلانات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="البحث في الإعلانات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 arabic-text"
            />
          </div>
        </CardContent>
      </Card>

      {/* قائمة الإعلانات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAds.map((ad) => (
          <Card key={ad.id} className="dashboard-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Car className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg arabic-text">{ad.title}</CardTitle>
              </div>
              <CardDescription className="arabic-text">
                بواسطة: {ad.seller}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <Car className="h-12 w-12 text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-1 space-x-reverse">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{ad.year}</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="arabic-text">{ad.location}</span>
                </div>
                <div className="flex items-center space-x-1 space-x-reverse">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span>{ad.price} ريال</span>
                </div>
                <div className="text-muted-foreground">
                  {ad.mileage} كم
                </div>
              </div>

              <p className="text-sm text-muted-foreground arabic-text line-clamp-3">
                {ad.description}
              </p>

              <div className="text-xs text-muted-foreground">
                تم الإرسال: {ad.submittedAt}
              </div>

              <div className="flex space-x-2 space-x-reverse">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 ml-1" />
                      عرض
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="arabic-text">{ad.title}</DialogTitle>
                      <DialogDescription className="arabic-text">
                        تفاصيل الإعلان الكاملة
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <Car className="h-16 w-16 text-gray-400" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium arabic-text">المعلومات الأساسية</h4>
                          <div className="space-y-2 text-sm mt-2">
                            <div>الماركة: {ad.brand}</div>
                            <div>الموديل: {ad.model}</div>
                            <div>السنة: {ad.year}</div>
                            <div>الممشى: {ad.mileage} كم</div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium arabic-text">معلومات البائع</h4>
                          <div className="space-y-2 text-sm mt-2">
                            <div className="arabic-text">الاسم: {ad.seller}</div>
                            <div className="ltr text-left">الهاتف: {ad.phone}</div>
                            <div className="arabic-text">الموقع: {ad.location}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium arabic-text">الوصف</h4>
                        <p className="text-sm text-muted-foreground mt-2 arabic-text">
                          {ad.description}
                        </p>
                      </div>
                    </div>

                    <DialogFooter className="flex space-x-2 space-x-reverse">
                      <Button 
                        onClick={() => handleApprove(ad.id)}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-4 w-4 ml-1" />
                        اعتماد
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="destructive"
                            onClick={() => setSelectedAd(ad)}
                          >
                            <XCircle className="h-4 w-4 ml-1" />
                            رفض
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="arabic-text">رفض الإعلان</DialogTitle>
                            <DialogDescription className="arabic-text">
                              يرجى إدخال سبب رفض الإعلان
                            </DialogDescription>
                          </DialogHeader>
                          <Textarea
                            placeholder="اكتب سبب الرفض..."
                            value={rejectionReason}
                            onChange={(e) => setRejectionReason(e.target.value)}
                            className="arabic-text"
                          />
                          <DialogFooter>
                            <Button 
                              variant="destructive"
                              onClick={() => handleReject(ad.id)}
                            >
                              تأكيد الرفض
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button 
                  onClick={() => handleApprove(ad.id)}
                  size="sm" 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4 ml-1" />
                  اعتماد
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAds.length === 0 && (
        <Card className="dashboard-shadow">
          <CardContent className="text-center py-12">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium arabic-text">لا توجد إعلانات في الانتظار</h3>
            <p className="text-muted-foreground arabic-text">
              جميع الإعلانات تم مراجعتها واعتمادها
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ApproveAds;
