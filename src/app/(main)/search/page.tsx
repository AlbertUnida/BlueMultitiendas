import { ProductCard } from '@/components/product/product-card';
import { placeholderProducts } from '@/lib/placeholders';
import type { Product } from '@/lib/placeholders';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SearchX, Lightbulb } from 'lucide-react';

export default function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams?.q as string || '';
  
  // Simulate search results
  const results: Product[] = query 
    ? placeholderProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.description.toLowerCase().includes(query.toLowerCase())
      ) 
    : [];

  // Simulate AI suggestions (e.g., popular products if search is empty or yields no results)
  const aiSuggestions: Product[] = placeholderProducts.slice(0, 4);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline text-primary">
          {query ? `Resultados para "${query}"` : 'Explora nuestros productos'}
        </h1>
        {query && <p className="text-muted-foreground">{results.length} productos encontrados.</p>}
      </div>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card rounded-lg shadow p-8">
          <SearchX className="mx-auto h-16 w-16 text-primary mb-4" />
          <h2 className="text-2xl font-semibold text-foreground">
            {query ? `No se encontraron productos para "${query}".` : 'Ingresa un término de búsqueda.'}
          </h2>
          <p className="text-muted-foreground mt-2">
            {query ? 'Intenta con otras palabras clave o revisa nuestras sugerencias.' : 'Usa la barra de búsqueda para encontrar lo que necesitas.'}
          </Button>
        </div>
      )}

      {/* AI Suggestions Section */}
      {(query && results.length === 0 || !query) && (
         <section className="mt-12 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold font-headline text-primary mb-6 flex items-center">
            <Lightbulb className="mr-2 h-6 w-6 text-accent fill-accent" /> 
            Sugerencias para ti
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {aiSuggestions.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
