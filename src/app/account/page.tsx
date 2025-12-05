import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, MapPin, User } from 'lucide-react';

export default function AccountDashboardPage() {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-headline font-semibold">Dashboard</h2>
        <p className="text-muted-foreground">
            Welcome back, Jane! From here you can manage your orders, shipping addresses, and profile details.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                1 order pending shipment
              </p>
              <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/account/orders">View all orders</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Saved Addresses</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                1 primary address set
              </p>
               <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/account/addresses">Manage addresses</Link>
              </Button>
            </CardContent>
          </Card>
           <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Profile</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold truncate">Jane Doe</div>
              <p className="text-xs text-muted-foreground">
                jane.doe@example.com
              </p>
               <Button asChild variant="link" className="p-0 h-auto mt-2">
                <Link href="/account/profile">Edit profile</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
    </div>
  );
}
