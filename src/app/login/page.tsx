import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-accent/30">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Selamat Datang Kembali</CardTitle>
          <CardDescription>Masukkan email Anda di bawah ini untuk masuk ke akun Anda.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Kata Sandi</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Lupa kata sandi?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button className="w-full">Masuk</Button>
          <div className="text-center text-sm">
            Belum punya akun?{' '}
            <Link href="/register" className="underline">
              Daftar
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
