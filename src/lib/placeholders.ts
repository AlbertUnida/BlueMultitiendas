import type { StaticImageData } from 'next/image';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string | StaticImageData;
  category: string;
  rating?: number;
  reviews?: number;
  installments?: string;
  discountPercentage?: number;
  stock: number;
  seller?: string;
  dataAiHint?: string;
  brand?: string;
  specifications?: { key: string; value: string }[];
  otherSellers?: ProductOffer[];
}

export interface ProductOffer {
  sellerName: string;
  price: number;
  stock: number;
  url: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  // id_categoria_padre?: string; // For nested categories if needed later
}

export const placeholderCategories: Category[] = [
  { id: 'electronics', name: 'Electrónica', description: 'Lo último en gadgets y dispositivos.' },
  { id: 'smartphones', name: 'Celulares', description: 'Encuentra tu próximo smartphone.' },
  { id: 'laptops', name: 'Computadoras y Laptops', description: 'Potencia y portabilidad.' },
  { id: 'fashion', name: 'Moda', description: 'Vístete con estilo.' },
  { id: 'home', name: 'Hogar y Muebles', description: 'Decora y equipa tu hogar.' },
  { id: 'sports', name: 'Deportes', description: 'Todo para tu actividad física.' },
  { id: 'books', name: 'Libros', description: 'Sumérgete en nuevas historias.' },
  { id: 'beauty', name: 'Belleza', description: 'Cuida de ti con los mejores productos.' },
];

export const placeholderProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Avanzado XZ100',
    description: 'Un smartphone de última generación con cámara IA y pantalla AMOLED.',
    price: 799.99,
    originalPrice: 999.99,
    imageUrl: '/image/nokia.webp',
    dataAiHint: 'blue smartphone',
    category: 'smartphones',
    rating: 4.5,
    reviews: 120,
    installments: '12 x Gs. 670.000',
    discountPercentage: 20,
    stock: 50,
    brand: 'TechNova',
    specifications: [
      { key: 'Pantalla', value: '6.7" AMOLED QHD+' },
      { key: 'Procesador', value: 'Snapdragon 8 Gen 2' },
      { key: 'RAM', value: '12GB' },
      { key: 'Almacenamiento', value: '256GB' },
      { key: 'Cámara Principal', value: '108MP + 12MP Ultra-Wide + 5MP Macro' },
      { key: 'Batería', value: '5000 mAh' },
    ],
    otherSellers: [
      { sellerName: 'ElectroStore', price: 795.00, stock: 10, url: '#' },
      { sellerName: 'GadgetWorld', price: 810.50, stock: 5, url: '#' },
    ]
  },
  {
    id: '2',
    name: 'Laptop UltraSlim Pro',
    description: 'Laptop ligera y potente para profesionales y creativos.',
    price: 1299.00,
    imageUrl: '/image/laptop.jpg',
    dataAiHint: 'silver laptop',
    category: 'laptops',
    rating: 4.8,
    reviews: 85,
    installments: '18 x Gs. 730.000',
    stock: 30,
    brand: 'InnovateBook',
  },
  {
    id: '3',
    name: 'Auriculares Inalámbricos SoundWave',
    description: 'Calidad de sonido superior con cancelación de ruido.',
    price: 199.50,
    originalPrice: 249.50,
    imageUrl: '/image/airpods.webp',
    dataAiHint: 'black headphones',
    category: 'electronics',
    rating: 4.2,
    reviews: 250,
    discountPercentage: 20,
    stock: 100,
    brand: 'AudioPhile',
  },
  {
    id: '4',
    name: 'Smartwatch FitLife E2',
    description: 'Monitoriza tu salud y actividad física con estilo.',
    price: 149.00,
    imageUrl: '/image/reloj.webp',
    dataAiHint: 'fitness smartwatch',
    category: 'electronics',
    rating: 4.0,
    reviews: 95,
    stock: 70,
    brand: 'WellnessTech',
  },
  {
    id: '5',
    name: 'Cámara DSLR ProShot Z5',
    description: 'Captura momentos inolvidables con calidad profesional.',
    price: 899.00,
    imageUrl: '/image/gopro.webp',
    dataAiHint: 'dslr camera',
    category: 'electronics',
    stock: 25,
    brand: 'FotoPro',
  },
  {
    id: '6',
    name: 'Tablet NexusPad 10',
    description: 'Ideal para entretenimiento y productividad en movimiento.',
    price: 349.99,
    originalPrice: 399.99,
    imageUrl: '/image/tablet.webp',
    dataAiHint: 'gray tablet',
    category: 'electronics',
    discountPercentage: 12,
    stock: 40,
    brand: 'ConnectTab',
  },
  {
    id: '7',
    name: 'Zapatillas Deportivas RunnerX',
    description: 'Comodidad y rendimiento para tus carreras.',
    price: 89.90,
    imageUrl: '/image/jordan.webp',
    dataAiHint: 'running shoes',
    category: 'sports',
    stock: 150,
    brand: 'StrideFast',
  },
  {
    id: '8',
    name: 'Libro: El Secreto del Valle Azul',
    description: 'Una aventura emocionante en un mundo de fantasía.',
    price: 19.99,
    imageUrl: 'https://placehold.co/600x600.png',
    dataAiHint: 'fantasy book',
    category: 'books',
    stock: 200,
    brand: 'Editorial Dreams',
  },
];

export const featuredProductIds = ['1', '2', '3', '4'];
export const bestSellerIds = ['2', '1', '7', '6'];
export const techWeekProductIds = ['1', '2', '5', '6'];

// Simple function to get a product by ID
export const getProductById = (id: string): Product | undefined => {
  return placeholderProducts.find(p => p.id === id);
}
