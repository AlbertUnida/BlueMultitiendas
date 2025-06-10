import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, DollarSign, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function SellOnAzurePage() {
  return (
    <div className="space-y-12">
      <div className="text-center py-8 bg-gradient-to-r from-primary to-blue-700 rounded-lg shadow-xl">
        <Store className="mx-auto h-20 w-20 text-white mb-4" />
        <h1 className="text-5xl font-bold font-headline text-white">Vende en Azure Marketplace</h1>
        <p className="text-xl text-blue-200 mt-3 max-w-2xl mx-auto">
          Llega a miles de clientes y haz crecer tu negocio con nuestra plataforma.
        </p>
        <Button size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6" asChild>
          <Link href="/auth/register?role=seller">Comenzar a Vender</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard
          icon={<DollarSign className="h-10 w-10 text-primary" />}
          title="Aumenta tus Ingresos"
          description="Accede a una amplia base de clientes listos para comprar tus productos."
        />
        <BenefitCard
          icon={<Users className="h-10 w-10 text-primary" />}
          title="Fácil Gestión"
          description="Herramientas intuitivas para administrar tu tienda, productos e inventario."
        />
        <BenefitCard
          icon={<TrendingUp className="h-10 w-10 text-primary" />}
          title="Crece sin Límites"
          description="Escala tu negocio con el apoyo de nuestra infraestructura y marketing."
        />
      </div>

      <Card className="mt-12 shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary text-center">¿Cómo funciona?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
          <p>1. <span className="font-semibold text-foreground">Regístrate como Vendedor:</span> Completa un sencillo formulario para crear tu tienda.</p>
          <p>2. <span className="font-semibold text-foreground">Publica tus Productos:</span> Sube imágenes, descripciones y precios de tus artículos.</p>
          <p>3. <span className="font-semibold text-foreground">Gestiona tus Ventas:</span> Recibe notificaciones de pedidos y actualiza el estado de envío.</p>
          <p>4. <span className="font-semibold text-foreground">Recibe tus Pagos:</span> Pagos seguros y puntuales directamente a tu cuenta.</p>
        </CardContent>
      </Card>
      
      <div className="text-center mt-12">
         <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6" asChild>
          <Link href="/seller-terms">Conoce más sobre nuestros términos para vendedores</Link>
        </Button>
      </div>
    </div>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="p-6 text-center h-full shadow-md hover:shadow-lg transition-shadow border-secondary">
      <div className="mb-4 inline-block p-4 bg-primary/10 rounded-full">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold font-headline text-primary mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}
