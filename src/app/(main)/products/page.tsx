import { ProductCard } from '@/components/product/product-card';
import { placeholderProducts, placeholderCategories } from '@/lib/placeholders';
import type { Product } from '@/lib/placeholders';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { SlidersHorizontal } from 'lucide-react';

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams?.category as string | undefined;
  const sort = searchParams?.sort as string | undefined;
  const searchQuery = searchParams?.q as string | undefined;

  let productsToDisplay: Product[] = placeholderProducts;

  if (searchQuery) {
    productsToDisplay = productsToDisplay.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  if (category) {
    productsToDisplay = productsToDisplay.filter(p => p.category === category);
  }

  // Simple sort (can be expanded)
  if (sort === 'price-asc') {
    productsToDisplay.sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    productsToDisplay.sort((a, b) => b.price - a.price);
  } else if (sort === 'name-asc') {
    productsToDisplay.sort((a,b) => a.name.localeCompare(b.name));
  }


  const currentCategory = category ? placeholderCategories.find(c => c.id === category) : null;
  const pageTitle = currentCategory ? currentCategory.name : (searchQuery ? `Resultados para "${searchQuery}"` : "Todos los Productos");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-card rounded-lg shadow">
        <h1 className="text-3xl font-bold font-headline text-primary">{pageTitle}</h1>
        <div className="flex items-center gap-2">
          <Label htmlFor="sort-select" className="text-sm font-medium">Ordenar por:</Label>
          <Select defaultValue={sort || "relevance"} name="sort-select">
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Relevancia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevancia</SelectItem>
              <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
              <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
              <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Filters Sidebar (Placeholder) */}
        <aside className="md:col-span-3 space-y-6 p-4 bg-card rounded-lg shadow h-fit">
          <h2 className="text-xl font-semibold font-headline text-primary flex items-center">
            <SlidersHorizontal className="mr-2 h-5 w-5" /> Filtros
          </h2>
          <Separator />
          <div>
            <Label className="text-base font-medium">Categoría</Label>
            <Select defaultValue={category || "all"}>
              <SelectTrigger className="w-full mt-1 bg-background">
                <SelectValue placeholder="Todas las categorías" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                {placeholderCategories.map(cat => (
                  <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-base font-medium">Rango de Precios</Label>
            <div className="flex gap-2 mt-1">
              <Input type="number" placeholder="Min" className="bg-background" />
              <Input type="number" placeholder="Max" className="bg-background" />
            </div>
          </div>
          <div>
            <Label className="text-base font-medium">Marca</Label>
             <Select>
              <SelectTrigger className="w-full mt-1 bg-background">
                <SelectValue placeholder="Todas las marcas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brandA">TechNova</SelectItem>
                <SelectItem value="brandB">InnovateBook</SelectItem>
                <SelectItem value="brandC">AudioPhile</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">Aplicar Filtros</Button>
        </aside>

        {/* Products Grid */}
        <div className="md:col-span-9">
          {productsToDisplay.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsToDisplay.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-muted-foreground">No se encontraron productos.</h2>
              <p className="text-muted-foreground mt-2">Intenta ajustar tus filtros o búsqueda.</p>
            </div>
          )}
          {/* Pagination (Placeholder) */}
          {productsToDisplay.length > 0 && (
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="mr-2">Anterior</Button>
              <Button variant="outline">Siguiente</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
