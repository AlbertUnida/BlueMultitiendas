import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, ShoppingCart, CreditCard, Truck } from "lucide-react";

export default function HowToBuyPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold font-headline text-primary">¿Cómo Comprar en Blue Multitiendas?</h1>
        <p className="text-xl text-muted-foreground mt-2">Sigue estos sencillos pasos para realizar tu compra.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <InfoStep
          step="1"
          title="Busca tu Producto"
          description="Usa nuestra barra de búsqueda o navega por las categorías para encontrar lo que necesitas."
          icon={<ShoppingCart className="h-8 w-8 text-accent" />}
        />
        <InfoStep
          step="2"
          title="Añade al Carrito"
          description="Cuando encuentres un producto, haz clic en 'Agregar al Carrito'."
          icon={<ShoppingCart className="h-8 w-8 text-accent" />}
        />
        <InfoStep
          step="3"
          title="Procede al Pago"
          description="Revisa tu carrito y haz clic en 'Proceder al Pago'. Ingresa tus datos de envío."
          icon={<CreditCard className="h-8 w-8 text-accent" />}
        />
        <InfoStep
          step="4"
          title="Recibe tu Pedido"
          description="Realiza el pago de forma segura. ¡Nosotros nos encargamos de enviártelo!"
          icon={<Truck className="h-8 w-8 text-accent" />}
        />
      </div>

      <Card className="mt-12 shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl font-headline text-primary">Preguntas Frecuentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground">¿Qué métodos de pago aceptan?</h3>
            <p className="text-sm text-muted-foreground">Aceptamos tarjetas de crédito/débito (Visa, Mastercard) y transferencias bancarias locales.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">¿Cuánto tiempo tarda el envío?</h3>
            <p className="text-sm text-muted-foreground">El tiempo de envío varía según tu ubicación, generalmente entre 2-5 días hábiles.</p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground">¿Puedo devolver un producto?</h3>
            <p className="text-sm text-muted-foreground">Sí, consulta nuestra Política de Devoluciones para más información.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface InfoStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function InfoStep({ step, title, description, icon }: InfoStepProps) {
  return (
    <Card className="text-center p-6 h-full shadow-md hover:shadow-lg transition-shadow border-secondary">
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
        {step}
      </div>
      <div className="mb-3">{icon}</div>
      <h3 className="text-xl font-semibold font-headline text-primary mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Card>
  );
}
