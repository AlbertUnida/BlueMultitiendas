"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, ShoppingBag, MapPin, CreditCard, Heart } from 'lucide-react';

export function AccountTabs() {
  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6 bg-secondary/50 p-1 rounded-lg">
        <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <User className="mr-2 h-4 w-4 hidden sm:inline-block" />Perfil
        </TabsTrigger>
        <TabsTrigger value="orders" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <ShoppingBag className="mr-2 h-4 w-4 hidden sm:inline-block" />Pedidos
        </TabsTrigger>
        <TabsTrigger value="addresses" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <MapPin className="mr-2 h-4 w-4 hidden sm:inline-block" />Direcciones
        </TabsTrigger>
        <TabsTrigger value="payment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <CreditCard className="mr-2 h-4 w-4 hidden sm:inline-block" />Pagos
        </TabsTrigger>
        <TabsTrigger value="wishlist" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <Heart className="mr-2 h-4 w-4 hidden sm:inline-block" />Favoritos
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-headline">Información Personal</CardTitle>
            <CardDescription>Actualiza tu información personal y de contacto.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" defaultValue="Usuario Ejemplo" className="bg-background" />
              </div>
              <div>
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" defaultValue="usuario@ejemplo.com" className="bg-background" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" type="tel" defaultValue="+595 981 123456" className="bg-background" />
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Guardar Cambios</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="orders">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-headline">Historial de Pedidos</CardTitle>
            <CardDescription>Revisa tus pedidos anteriores y actuales.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for order list */}
            <div className="border border-dashed border-border rounded-md p-8 text-center text-muted-foreground">
              <ShoppingBag className="mx-auto h-12 w-12 mb-4" />
              <p>No tienes pedidos recientes.</p>
              <Button variant="link" className="text-primary mt-2">Empezar a comprar</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="addresses">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-headline">Direcciones de Envío</CardTitle>
            <CardDescription>Administra tus direcciones de envío.</CardDescription>
          </CardHeader>
          <CardContent>
             {/* Placeholder for addresses */}
            <div className="border border-dashed border-border rounded-md p-8 text-center text-muted-foreground">
              <MapPin className="mx-auto h-12 w-12 mb-4" />
              <p>No tienes direcciones guardadas.</p>
              <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">Agregar Nueva Dirección</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="payment">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-headline">Métodos de Pago</CardTitle>
            <CardDescription>Administra tus métodos de pago guardados.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for payment methods */}
             <div className="border border-dashed border-border rounded-md p-8 text-center text-muted-foreground">
              <CreditCard className="mx-auto h-12 w-12 mb-4" />
              <p>No tienes métodos de pago guardados.</p>
              <Button className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">Agregar Método de Pago</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="wishlist">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary font-headline">Lista de Deseos</CardTitle>
            <CardDescription>Tus productos favoritos guardados.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Placeholder for wishlist items */}
             <div className="border border-dashed border-border rounded-md p-8 text-center text-muted-foreground">
              <Heart className="mx-auto h-12 w-12 mb-4" />
              <p>Tu lista de deseos está vacía.</p>
               <Button variant="link" className="text-primary mt-2">Explorar productos</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
