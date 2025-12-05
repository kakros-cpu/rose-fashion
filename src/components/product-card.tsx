import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Rating } from './rating';

interface ProductCardProps {
  product: Product;
}

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';


export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full overflow-hidden group">
       <Link href={`/products/${product.slug}`}>
        <div className="overflow-hidden relative">
          <Image
            src={getImageUrl(product.imageId)}
            alt={product.name}
            width={600}
            height={800}
            className="object-cover w-full h-auto aspect-[3/4] transform transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={getImageHint(product.imageId)}
          />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="secondary" className="rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <h3 className="font-semibold text-base leading-snug mt-1">
                    <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </h3>
            </div>
            <Rating value={product.rating} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
        <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Tambah ke keranjang
        </Button>
      </CardFooter>
    </Card>
  );
}
