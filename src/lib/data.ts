export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  imageId: string;
  category: string;
  rating: number;
  stock: number;
  sizes: string[];
  colors: { name: string; hex: string }[];
};

export type Category = {
  id: number;
  name: string;
  imageId: string;
};

export type Review = {
  id: number;
  productId: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
};

export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  imageId: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'New Autumn Collection',
    subtitle: 'Embrace the new season with styles that speak to you. Cozy, chic, and absolutely timeless.',
    imageId: 'hero-1',
  },
  {
    id: 2,
    title: 'Accessorize Your Life',
    subtitle: 'Find the perfect finishing touch. From handbags to jewelry, complete your look with our exclusive accessories.',
    imageId: 'hero-2',
  },
  {
    id: 3,
    title: 'Up to 40% Off',
    subtitle: 'Limited time offer on selected items. Don\'t miss out on your chance to own premium fashion at a great price.',
    imageId: 'hero-3',
  }
];

export const products: Product[] = [
  {
    id: 1,
    slug: 'elegant-floral-midi-dress',
    name: 'Elegant Floral Midi Dress',
    description: 'A beautiful and flowing midi dress with a vibrant floral pattern. Perfect for spring outings and special occasions. Made from lightweight, breathable fabric for maximum comfort.',
    price: 89.99,
    imageId: 'product-1',
    category: 'Dresses',
    rating: 4.5,
    stock: 25,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Rose', hex: '#D8BFD8' },
      { name: 'Lavender', hex: '#E6E6FA' },
      { name: 'Cream', hex: '#FFFDD0' },
    ],
  },
  {
    id: 2,
    slug: 'classic-leather-handbag',
    name: 'Classic Leather Handbag',
    description: 'A timeless handbag crafted from genuine leather. Features multiple compartments and a detachable shoulder strap. An essential accessory for any wardrobe.',
    price: 149.99,
    imageId: 'product-2',
    category: 'Accessories',
    rating: 4.8,
    stock: 15,
    sizes: ['One Size'],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Brown', hex: '#A52A2A' },
    ],
  },
  {
    id: 3,
    slug: 'chic-high-heeled-sandals',
    name: 'Chic High-Heeled Sandals',
    description: 'Step out in style with these chic sandals. Featuring a comfortable block heel and an elegant ankle strap, they are perfect for both day and night.',
    price: 79.99,
    imageId: 'product-3',
    category: 'Shoes',
    rating: 4.2,
    stock: 30,
    sizes: ['6', '7', '8', '9', '10'],
    colors: [
      { name: 'Nude', hex: '#DEB887' },
      { name: 'Black', hex: '#000000' },
    ],
  },
  {
    id: 4,
    slug: 'modern-tapered-trousers',
    name: 'Modern Tapered Trousers',
    description: 'Sophisticated and versatile, these tapered trousers are a modern wardrobe staple. The high-waisted design and clean lines create a flattering silhouette.',
    price: 65.00,
    imageId: 'product-4',
    category: 'Bottoms',
    rating: 4.6,
    stock: 40,
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Beige', hex: '#F5F5DC' },
      { name: 'Navy', hex: '#000080' },
    ],
  },
  {
    id: 5,
    slug: 'soft-cashmere-sweater',
    name: 'Soft Cashmere Sweater',
    description: 'Indulge in the luxury of our 100% cashmere sweater. Incredibly soft and warm, this is a timeless piece you\'ll reach for year after year.',
    price: 199.50,
    imageId: 'product-5',
    category: 'Tops',
    rating: 4.9,
    stock: 20,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Heather Grey', hex: '#B2BEB5' },
      { name: 'Dusty Rose', hex: '#D8BFD8' },
    ],
  },
  {
    id: 6,
    slug: 'stylish-denim-jacket',
    name: 'Stylish Denim Jacket',
    description: 'The perfect layering piece. This denim jacket has a classic fit with a modern touch, featuring slight distressing for a lived-in feel.',
    price: 95.00,
    imageId: 'product-6',
    category: 'Outerwear',
    rating: 4.7,
    stock: 50,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'Classic Wash', hex: '#6F8FAF' }],
  },
  {
    id: 7,
    slug: 'bohemian-maxi-skirt',
    name: 'Bohemian Maxi Skirt',
    description: 'A flowing, tiered maxi skirt with a delicate bohemian print. The elastic waistband ensures a comfortable and flattering fit for all-day wear.',
    price: 59.99,
    imageId: 'product-7',
    category: 'Bottoms',
    rating: 4.4,
    stock: 35,
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Multi-color', hex: '#FFFFFF' }],
  },
  {
    id: 8,
    slug: 'elegant-silk-blouse',
    name: 'Elegant Silk Blouse',
    description: 'A luxurious silk blouse with a beautiful drape. Features a classic collar and concealed buttons for a clean, polished look. Effortlessly transitions from office to evening.',
    price: 120.00,
    imageId: 'product-8',
    category: 'Tops',
    rating: 4.8,
    stock: 22,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne', hex: '#F7E7CE' },
      { name: 'Black', hex: '#000000' },
    ],
  },
];

export const categories: Category[] = [
  { id: 1, name: 'Dresses', imageId: 'category-1' },
  { id: 2, name: 'Shoes', imageId: 'category-2' },
  { id: 3, name: 'Tops', imageId: 'category-3' },
  { id: 4, name: 'Accessories', imageId: 'category-4' },
  { id: 5, name: 'Bottoms', imageId: 'product-4' },
  { id: 6, name: 'Outerwear', imageId: 'product-6' },
];

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    author: 'Emily Carter',
    rating: 5,
    comment: 'Absolutely stunning dress! The fit is perfect and the fabric feels so high quality. I received so many compliments.',
    date: '2023-05-20',
  },
  {
    id: 2,
    productId: 5,
    author: 'Jessica Miller',
    rating: 5,
    comment: 'This is the softest sweater I have ever owned. It\'s a bit of a splurge, but totally worth it for the quality and comfort. A new favorite!',
    date: '2023-11-10',
  },
  {
    id: 3,
    productId: 2,
    author: 'Sophia Williams',
    rating: 4,
    comment: 'The bag is beautiful and very well-made. My only wish is that it was slightly larger, but it holds all my essentials perfectly.',
    date: '2023-09-01',
  },
  {
    id: 4,
    productId: 1,
    author: 'Olivia Davis',
    rating: 4,
    comment: 'Very pretty dress, the colors are just as vibrant in person. It runs a little long on me (I\'m 5\'4"), but nothing a little hemming can\'t fix.',
    date: '2023-06-15',
  },
];
