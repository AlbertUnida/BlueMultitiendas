import Image from 'next/image';
import { getProductById, placeholderProducts } from '@/lib/placeholders'; // Using placeholderProducts for related items
import type { Product } from '@/lib/placeholders';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { PriceComparison } from '@/components/product/price-comparison';
import { Separator } from '@/components/ui/separator';
import { ProductCarousel } from '@/components/product/product-carousel';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-semibold">Producto no encontrado</h1>
        <Link href="/products">
          <Button variant="link" className="mt-4 text-primary">Volver a productos</Button>
        </Link>
      </div>
    );
  }

  const relatedProducts = placeholderProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5);

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border border-border">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              data-ai-hint={product.dataAiHint || "product detail"}
            />
            {product.discountPercentage && (
              <Badge variant="destructive" className="absolute top-4 right-4 bg-accent text-accent-foreground text-lg p-2">
                -{product.discountPercentage}%
              </Badge>
            )}
          </div>
          {/* Placeholder for thumbnails */}
          <div className="grid grid-cols-4 gap-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="relative aspect-square rounded-md overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer">
                 <Image
                    src={`https://placehold.co/100x100.png?text=Thumb${i}`}
                    alt={`Thumbnail ${i}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="product thumbnail"
                  />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold font-headline text-primary">{product.name}</h1>
          
          <div className="flex items-center space-x-2">
            {product.rating && (
              <>
                <div className="flex items-center">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                  {product.rating % 1 !== 0 && (
                    <Star key="half" className="h-5 w-5 text-yellow-400" /> // Partial star could be implemented
                  )}
                  {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                    <Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({product.reviews} reseñas)</span>
                <Separator orientation="vertical" className="h-5 bg-border" />
              </>
            )}
            {product.brand && <Badge variant="secondary" className="bg-secondary text-secondary-foreground">{product.brand}</Badge>}
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <Share2 className="h-5 w-5" />
            </Button>
          </div>

          <p className="text-lg text-foreground/80 leading-relaxed">{product.description}</p>
          
          <div className="pb-6">
            <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="ml-3 text-xl text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.installments && (
              <p className="text-sm text-green-600 mt-1">{product.installments}</p>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <Input type="number" defaultValue="1" min="1" max={product.stock} className="w-20 text-center bg-background border-primary/30" />
            <Button size="lg" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              <ShoppingCart className="mr-2 h-5 w-5" /> Agregar al Carrito
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Heart className="mr-2 h-5 w-5" /> Favorito
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{product.stock > 0 ? `${product.stock} unidades disponibles` : 'Agotado'}</p>

          {product.specifications && product.specifications.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-xl font-semibold font-headline text-primary mb-3">Especificaciones</h3>
              <ul className="space-y-1 text-sm text-foreground/90">
                {product.specifications.map(spec => (
                  <li key={spec.key}><span className="font-medium">{spec.key}:</span> {spec.value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {product.otherSellers && product.otherSellers.length > 0 && (
        <PriceComparison offers={product.otherSellers} productName={product.name} />
      )}

      {relatedProducts.length > 0 && (
        <ProductCarousel title="Productos Relacionados" products={relatedProducts} />
      )}
    </div>
  );
}
