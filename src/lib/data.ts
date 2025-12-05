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
    title: 'Koleksi Musim Gugur Terbaru',
    subtitle: 'Sambut musim baru dengan gaya yang mencerminkan diri Anda. Nyaman, chic, dan tak lekang oleh waktu.',
    imageId: 'hero-1',
  },
  {
    id: 2,
    title: 'Lengkapi Gaya Hidup Anda',
    subtitle: 'Temukan sentuhan akhir yang sempurna. Dari tas tangan hingga perhiasan, lengkapi penampilan Anda dengan aksesori eksklusif kami.',
    imageId: 'hero-2',
  },
  {
    id: 3,
    title: 'Penawaran Spesial',
    subtitle: 'Penawaran waktu terbatas untuk item tertentu. Jangan lewatkan kesempatan Anda untuk memiliki busana premium dengan harga menarik.',
    imageId: 'hero-3',
  }
];

export const products: Product[] = [
  {
    id: 1,
    slug: 'elegant-floral-midi-dress',
    name: 'Gaun Midi Bunga Elegan',
    description: 'Gaun midi yang indah dan flowy dengan motif bunga yang cerah. Sempurna untuk acara musim semi dan acara-acara khusus. Terbuat dari kain yang ringan dan menyerap keringat untuk kenyamanan maksimal.',
    price: 1350000,
    imageId: 'product-1',
    category: 'Gaun',
    rating: 4.5,
    stock: 25,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Mawar', hex: '#D8BFD8' },
      { name: 'Lavender', hex: '#E6E6FA' },
      { name: 'Krem', hex: '#FFFDD0' },
    ],
  },
  {
    id: 2,
    slug: 'classic-leather-handbag',
    name: 'Tas Tangan Kulit Klasik',
    description: 'Tas tangan abadi yang dibuat dari kulit asli. Memiliki beberapa kompartemen dan tali bahu yang dapat dilepas. Aksesori penting untuk lemari pakaian apa pun.',
    price: 2250000,
    imageId: 'product-2',
    category: 'Aksesori',
    rating: 4.8,
    stock: 15,
    sizes: ['Satu Ukuran'],
    colors: [
      { name: 'Hitam', hex: '#000000' },
      { name: 'Cokelat', hex: '#A52A2A' },
    ],
  },
  {
    id: 3,
    slug: 'chic-high-heeled-sandals',
    name: 'Sandal Hak Tinggi Chic',
    description: 'Tampil gaya dengan sandal chic ini. Menampilkan hak blok yang nyaman dan tali pergelangan kaki yang elegan, sandal ini sempurna untuk siang dan malam.',
    price: 1200000,
    imageId: 'product-3',
    category: 'Sepatu',
    rating: 4.2,
    stock: 30,
    sizes: ['36', '37', '38', '39', '40'],
    colors: [
      { name: 'Nude', hex: '#DEB887' },
      { name: 'Hitam', hex: '#000000' },
    ],
  },
  {
    id: 4,
    slug: 'modern-tapered-trousers',
    name: 'Celana Tapered Modern',
    description: 'Canggih dan serbaguna, celana tapered ini adalah bahan pokok lemari modern. Desain pinggang tinggi dan garis-garis bersih menciptakan siluet yang menyanjung.',
    price: 975000,
    imageId: 'product-4',
    category: 'Bawahan',
    rating: 4.6,
    stock: 40,
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Beige', hex: '#F5F5DC' },
      { name: 'Biru Dongker', hex: '#000080' },
    ],
  },
  {
    id: 5,
    slug: 'soft-cashmere-sweater',
    name: 'Sweater Kasmir Lembut',
    description: 'Manjakan diri dalam kemewahan sweater kasmir 100% kami. Sangat lembut dan hangat, ini adalah barang abadi yang akan Anda pakai dari tahun ke tahun.',
    price: 3000000,
    imageId: 'product-5',
    category: 'Atasan',
    rating: 4.9,
    stock: 20,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Abu-abu Heather', hex: '#B2BEB5' },
      { name: 'Mawar Berdebu', hex: '#D8BFD8' },
    ],
  },
  {
    id: 6,
    slug: 'stylish-denim-jacket',
    name: 'Jaket Denim Bergaya',
    description: 'Lapisan yang sempurna. Jaket denim ini memiliki potongan klasik dengan sentuhan modern, menampilkan sedikit robekan untuk kesan kasual.',
    price: 1425000,
    imageId: 'product-6',
    category: 'Pakaian Luar',
    rating: 4.7,
    stock: 50,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'Classic Wash', hex: '#6F8FAF' }],
  },
  {
    id: 7,
    slug: 'bohemian-maxi-skirt',
    name: 'Rok Maxi Bohemian',
    description: 'Rok maxi bertingkat yang flowy dengan motif bohemian yang lembut. Pinggang elastis memastikan kenyamanan dan kesesuaian yang menyanjung untuk dipakai sepanjang hari.',
    price: 900000,
    imageId: 'product-7',
    category: 'Bawahan',
    rating: 4.4,
    stock: 35,
    sizes: ['S', 'M', 'L'],
    colors: [{ name: 'Aneka Warna', hex: '#FFFFFF' }],
  },
  {
    id: 8,
    slug: 'elegant-silk-blouse',
    name: 'Blus Sutra Elegan',
    description: 'Blus sutra mewah dengan jatuhan yang indah. Menampilkan kerah klasik dan kancing tersembunyi untuk tampilan yang bersih dan rapi. Mudah bertransisi dari kantor ke acara malam.',
    price: 1800000,
    imageId: 'product-8',
    category: 'Atasan',
    rating: 4.8,
    stock: 22,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Champagne', hex: '#F7E7CE' },
      { name: 'Hitam', hex: '#000000' },
    ],
  },
];

export const categories: Category[] = [
  { id: 1, name: 'Gaun', imageId: 'category-1' },
  { id: 2, name: 'Sepatu', imageId: 'category-2' },
  { id: 3, name: 'Atasan', imageId: 'category-3' },
  { id: 4, name: 'Aksesori', imageId: 'category-4' },
  { id: 5, name: 'Bawahan', imageId: 'product-4' },
  { id: 6, name: 'Pakaian Luar', imageId: 'product-6' },
];

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    author: 'Emily Carter',
    rating: 5,
    comment: 'Gaun yang benar-benar menakjubkan! Ukurannya pas dan kainnya terasa sangat berkualitas. Saya menerima begitu banyak pujian.',
    date: '2023-05-20',
  },
  {
    id: 2,
    productId: 5,
    author: 'Jessica Miller',
    rating: 5,
    comment: 'Ini adalah sweater terlembut yang pernah saya miliki. Harganya sedikit mahal, tetapi sangat sepadan dengan kualitas dan kenyamanannya. Favorit baru!',
    date: '2023-11-10',
  },
  {
    id: 3,
    productId: 2,
    author: 'Sophia Williams',
    rating: 4,
    comment: 'Tasnya cantik dan dibuat dengan sangat baik. Satu-satunya harapan saya adalah ukurannya sedikit lebih besar, tetapi tas ini dapat menampung semua barang penting saya dengan sempurna.',
    date: '2023-09-01',
  },
  {
    id: 4,
    productId: 1,
    author: 'Olivia Davis',
    rating: 4,
    comment: 'Gaun yang sangat cantik, warnanya sama cerahnya dengan aslinya. Ukurannya sedikit panjang untuk saya (tinggi saya 162 cm), tetapi tidak ada yang tidak bisa diperbaiki dengan sedikit jahitan.',
    date: '2023-06-15',
  },
];
