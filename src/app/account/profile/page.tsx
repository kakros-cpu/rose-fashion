import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-headline font-semibold">Profil</h2>
         <Card>
          <CardHeader>
            <CardTitle>Informasi Pribadi</CardTitle>
            <CardDescription>Perbarui nama dan alamat email Anda.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nama depan</Label>
                  <Input id="first-name" defaultValue="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nama belakang</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="jane.doe@example.com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Simpan Perubahan</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Kata Sandi</CardTitle>
            <CardDescription>Ubah kata sandi Anda di sini. Setelah menyimpan, Anda akan keluar.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Kata Sandi Saat Ini</Label>
              <Input id="current-password" type="password" />
            </div>
             <div className="space-y-2">
              <Label htmlFor="new-password">Kata Sandi Baru</Label>
              <Input id="new-password" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Perbarui Kata Sandi</Button>
          </CardFooter>
        </Card>
    </div>
  )
}
