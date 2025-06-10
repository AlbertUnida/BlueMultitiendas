import type { Product } from '@/lib/placeholders';
import { ProductCard } from './product-card';

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export function ProductCarousel({ title, products }: ProductCarouselProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold font-headline text-primary mb-6">{title}</h2>
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 -mb-4 scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-secondary/30">
          {products.map((product) => (
            <div key={product.id} className="w-72 shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
           {/* Padding element to ensure last item can be fully scrolled into view and has some trailing space */}
          <div className="w-1 shrink-0" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
