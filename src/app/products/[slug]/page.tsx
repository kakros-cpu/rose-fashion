import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products, reviews as allReviews } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Rating } from '@/components/rating';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
const getImageHint = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageHint || '';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const productReviews = allReviews.filter(r => r.productId === product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Shop</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div>
          <Image
            src={getImageUrl(product.imageId)}
            alt={product.name}
            width={800}
            height={1000}
            className="rounded-lg object-cover w-full h-auto aspect-[4/5] shadow-lg"
            data-ai-hint={getImageHint(product.imageId)}
          />
        </div>
        
        <div className="flex flex-col">
          <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Rating value={product.rating} />
            <span className="text-sm text-muted-foreground">({productReviews.length} reviews)</span>
          </div>
          <p className="text-3xl font-bold mt-4">${product.price.toFixed(2)}</p>
          <p className="text-muted-foreground mt-4">{product.description}</p>
          
          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">Color</Label>
              <RadioGroup defaultValue={product.colors[0].name.toLowerCase()} className="flex items-center gap-2 mt-2">
                {product.colors.map(color => (
                  <RadioGroupItem key={color.name} value={color.name.toLowerCase()} id={`color-${color.name}`} className="sr-only" />
                ))}
                {product.colors.map(color => (
                   <Label key={color.name} htmlFor={`color-${color.name}`} className="cursor-pointer">
                    <div className="w-8 h-8 rounded-full border-2 border-transparent has-[:checked]:border-ring" style={{ backgroundColor: color.hex }} title={color.name}></div>
                   </Label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-base font-medium">Size</Label>
              <RadioGroup defaultValue={product.sizes[1]} className="flex flex-wrap items-center gap-2 mt-2">
                {product.sizes.map(size => (
                  <div key={size}>
                    <RadioGroupItem value={size} id={`size-${size}`} className="sr-only" />
                    <Label htmlFor={`size-${size}`} className="flex items-center justify-center rounded-md border text-sm px-4 py-2 cursor-pointer has-[:checked]:bg-primary has-[:checked]:text-primary-foreground has-[:checked]:border-primary">
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex items-center gap-4">
              <Label className="text-base font-medium">Quantity</Label>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="h-10 w-10"><Minus className="h-4 w-4" /></Button>
                <span className="w-8 text-center">1</span>
                <Button variant="ghost" size="icon" className="h-10 w-10"><Plus className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
          
          <Button size="lg" className="w-full mt-8">
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </div>
      </div>
      
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {productReviews.length > 0 ? (
              <div className="space-y-6">
                {productReviews.map(review => (
                  <div key={review.id} className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${review.author}`} />
                      <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-4">
                        <p className="font-semibold">{review.author}</p>
                        <Rating value={review.rating} />
                      </div>
                       <p className="text-sm text-muted-foreground mt-1">{new Date(review.date).toLocaleDateString()}</p>
                      <p className="mt-2 text-sm">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No reviews yet. Be the first to share your thoughts!</p>
            )}
            <Button variant="outline" className="mt-8">Write a Review</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
