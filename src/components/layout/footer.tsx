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
            <p className="text-sm">Elegant and modern fashion for every occasion.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-primary"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-primary"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-primary"><Youtube size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary">All Products</Link></li>
              <li><Link href="#" className="hover:text-primary">New Arrivals</Link></li>
              <li><Link href="#" className="hover:text-primary">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-primary">Sale</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary">FAQs</Link></li>
              <li><Link href="#" className="hover:text-primary">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-primary">Size Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary">Our Story</Link></li>
              <li><Link href="#" className="hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rose Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
