import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Icons } from '../icons';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="h-8 w-8 text-primary" />
                <span className="font-bold font-headline text-2xl">
                  Rose Fashion
                </span>
              </Link>
            <p className="text-sm">Gaya busana yang elegan dan modern untuk setiap kesempatan.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-primary"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-primary"><Youtube size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Toko</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary">Semua Produk</Link></li>
              <li><Link href="#" className="hover:text-primary">Pendatang Baru</Link></li>
              <li><Link href="#" className="hover:text-primary">Terlaris</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Layanan Pelanggan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Hubungi Kami</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary">Pengiriman & Pengembalian</Link></li>
              <li><Link href="#" className="hover:text-primary">Panduan Ukuran</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Tentang Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Cerita Kami</Link></li>
              <li><Link href="#" className="hover:text-primary">Karir</Link></li>
              <li><Link href="#" className="hover:text-primary">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary">Syarat & Ketentuan</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rose Fashion. Hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
}
