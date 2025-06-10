import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/placeholders';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full rounded-lg border border-border/70">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${product.id}`} className="block aspect-square relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.dataAiHint || "product image"}
          />
        </Link>
        {product.discountPercentage && (
          <Badge variant="destructive" className="absolute top-2 right-2 bg-accent text-accent-foreground">
            -{product.discountPercentage}%
          </Badge>
        )}
        <Button variant="ghost" size="icon" className="absolute top-2 left-2 bg-background/70 hover:bg-background text-primary rounded-full">
          <Heart className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`}>
          <CardTitle className="text-lg font-semibold font-headline leading-tight hover:text-primary transition-colors mb-1 line-clamp-2 h-[2.5em]">
            {product.name}
          </CardTitle>
        </Link>
        <div className="mt-2">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        {product.installments && (
          <p className="text-xs text-muted-foreground mt-1">{product.installments}</p>
        )}
      </CardContent>
      <CardFooter className="p-4 border-t border-border/50">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Agregar al Carrito
        </Button>
      </CardFooter>
    </Card>
  );
}
