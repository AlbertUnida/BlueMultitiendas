import type { ProductOffer } from '@/lib/placeholders';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Store, ExternalLink } from 'lucide-react';

interface PriceComparisonProps {
  offers: ProductOffer[];
  productName: string;
}

export function PriceComparison({ offers, productName }: PriceComparisonProps) {
  if (!offers || offers.length === 0) {
    return null;
  }

  return (
    <Card className="mt-8 shadow-lg border-primary/30">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary flex items-center">
            <Store className="mr-2 h-6 w-6" /> Comparar Precios para {productName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-primary">Vendedor</TableHead>
              <TableHead className="text-primary">Precio</TableHead>
              <TableHead className="text-right text-primary">Stock</TableHead>
              <TableHead className="text-right text-primary">Acción</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{offer.sellerName}</TableCell>
                <TableCell className="font-semibold text-lg text-primary">${offer.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">{offer.stock > 0 ? `${offer.stock} unidades` : 'Agotado'}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                    <a href={offer.url} target="_blank" rel="noopener noreferrer">
                      Ir a la tienda <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
