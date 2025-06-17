import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductCarousel } from '@/components/product/product-carousel';
import { placeholderProducts, featuredProductIds, bestSellerIds, techWeekProductIds } from '@/lib/placeholders';
import type { Product } from '@/lib/placeholders';
import { CreditCard, Gift, Plane, ArrowRight } from 'lucide-react';

// Helper to get products by IDs
const getProductsByIds = (ids: string[]): Product[] => {
  return ids.map(id => placeholderProducts.find(p => p.id === id)).filter(p => p !== undefined) as Product[];
};

export default function HomePage() {
  const featuredProducts = getProductsByIds(featuredProductIds);
  const bestSellers = getProductsByIds(bestSellerIds);
  const techWeekProducts = getProductsByIds(techWeekProductIds);

  return (
    <div className="space-y-12">
      {/* Hero Banner Section */}
      <section className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/image/ueno.jpg"
          alt="Promotional Banner"
          layout="fill"
          objectFit="cover"
          data-ai-hint="tech sale"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-white mb-4">
            Tecnoweek Blue
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Descubre ofertas increíbles en los últimos productos tecnológicos. ¡No te lo pierdas!
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link href="/products?category=electronics">¡Ver productos!</Link>
          </Button>
        </div>
      </section>

      {/* Informative Blocks */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InfoBlock 
          title="¡Regístrate Ahora!" 
          description="Y obtén beneficios exclusivos."
          href="/auth/register"
          icon={<Gift className="h-8 w-8 text-primary" />}
        />
        <InfoBlock 
          title="Blue Multitiendas Viajes" 
          description="Explora destinos increíbles."
          href="/travel"
          icon={<Plane className="h-8 w-8 text-primary" />}
        />
        <InfoBlock 
          title="Obtén tu Tarjeta Blue" 
          description="Pagos fáciles y seguros."
          href="/blue-card" /* Updated href for consistency, assuming this page will exist */
          icon={<CreditCard className="h-8 w-8 text-primary" />}
        />
      </section>

      {/* Product Carousels */}
      <ProductCarousel title="Encontrá el celular que estás buscando ;)" products={placeholderProducts.filter(p => p.category === 'smartphones').slice(0,5)} />
      <ProductCarousel title="Computadoras y laptops" products={placeholderProducts.filter(p => p.category === 'laptops').slice(0,5)} />
      <ProductCarousel title="¡Descubrí lo más vendido!" products={bestSellers.slice(0,5)} />
      <ProductCarousel title="Ofertas Tecnoweek" products={techWeekProducts.slice(0,5)} />
      <ProductCarousel title="Nuevos Productos" products={featuredProducts.slice(0,5)} />

    </div>
  );
}

interface InfoBlockProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

function InfoBlock({ title, description, href, icon }: InfoBlockProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-lg transition-shadow duration-300 h-full border-primary/30 hover:border-primary">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-headline text-primary">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="mt-4 text-sm font-semibold text-primary flex items-center">
            Ver más <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
