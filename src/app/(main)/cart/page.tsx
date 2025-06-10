import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock cart item data
const mockCartItems = [
  { id: '1', name: 'Smartphone Avanzado XZ100', price: 799.99, quantity: 1, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'blue smartphone' },
  { id: '3', name: 'Auriculares Inalámbricos SoundWave', price: 199.50, quantity: 2, imageUrl: 'https://placehold.co/100x100.png', dataAiHint: 'black headphones' },
];

const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping = mockCartItems.length > 0 ? 15.00 : 0;
const total = subtotal + shipping;

export default function CartPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-headline text-primary">Tu Carrito de Compras</h1>
      
      {mockCartItems.length === 0 ? (
        <Card className="text-center py-12">
          <CardHeader>
            <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <CardTitle className="text-2xl font-semibold text-foreground">Tu carrito está vacío</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Parece que no has añadido nada a tu carrito todavía.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">Continuar Comprando</Link>
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {mockCartItems.map(item => (
              <Card key={item.id} className="flex items-center p-4 gap-4 shadow-sm">
                <div className="relative w-24 h-24 rounded-md overflow-hidden shrink-0">
                  <Image src={item.imageUrl} alt={item.name} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">Cantidad: {item.quantity}</p>
                  <p className="text-lg font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80">
                  <Trash2 className="h-5 w-5" />
                </Button>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-1 shadow-lg sticky top-24">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary">Resumen del Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-semibold text-foreground">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Envío:</span>
                <span className="font-semibold text-foreground">${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-xl font-bold">
                <span className="text-primary">Total:</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Proceder al Pago</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
