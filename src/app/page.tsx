import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { products, categories, reviews, heroSlides } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ProductCard from '@/components/product-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Rating } from '@/components/rating';
import { Separator } from '@/components/ui/separator';
import { ArrowRight } from 'lucide-react';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';


export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[50vh] md:h-[80vh] bg-secondary">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <Image
                    src={getImageUrl(slide.imageId)}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    data-ai-hint={getImageHint(slide.imageId)}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-primary-foreground p-4">
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-md">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">
                      {slide.subtitle}
                    </p>
                    <Button asChild size="lg" className="mt-8">
                      <Link href="/products">Belanja Sekarang</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
        </Carousel>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Produk Unggulan</h2>
            <p className="text-muted-foreground mt-2">Temukan pilihan item pilihan kami yang wajib dimiliki.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/products">Lihat Semua Produk <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Separator />

      <section className="py-16 md:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Belanja Berdasarkan Kategori</h2>
            <p className="text-muted-foreground mt-2">Temukan gaya sempurna Anda dari koleksi pilihan kami.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.slice(0, 4).map((category) => (
              <Link href={`/products?category=${category.name.toLowerCase()}`} key={category.id}>
                <Card className="overflow-hidden group relative block">
                  <Image
                    src={getImageUrl(category.imageId)}
                    alt={category.name}
                    width={400}
                    height={500}
                    className="object-cover w-full h-80 transform transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={getImageHint(category.imageId)}
                  />
                   <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-headline text-2xl font-semibold text-primary-foreground">{category.name}</h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Separator />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Kata Pelanggan Kami</h2>
            <p className="text-muted-foreground mt-2">Ulasan nyata dari pembeli kami yang bahagia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <Card key={review.id}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${review.author}`} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.author}</p>
                       <div className="flex items-center">
                        <Rating value={review.rating} />
                       </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&quot;{review.comment}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
