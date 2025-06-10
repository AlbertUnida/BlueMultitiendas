import { ProductCard } from "@/components/product/product-card";
import { placeholderProducts } from "@/lib/placeholders";
import type { Product } from "@/lib/placeholders";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

// Mock favorite items (e.g., first 3 products)
const mockFavoriteItems: Product[] = placeholderProducts.slice(0, 3);

export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline text-primary">Mis Favoritos</h1>
      
      {mockFavoriteItems.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border rounded-lg">
          <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold text-foreground">Tu lista de favoritos está vacía</h2>
          <p className="text-muted-foreground mt-2">Añade productos que te gusten para verlos aquí.</p>
          <Button asChild variant="link" className="mt-4 text-primary">
            <Link href="/">Explorar Productos</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockFavoriteItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
