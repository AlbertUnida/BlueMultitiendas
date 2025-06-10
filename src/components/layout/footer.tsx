import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Youtube, Phone } from 'lucide-react';
import { Logo } from './logo'; // Re-using the logo component

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Subscription */}
          <div>
            <Logo />
            <p className="mt-4 mb-2 text-sm">Queremos conocerte. Suscríbete para recibir ofertas:</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-background border-primary/30 focus:border-primary" />
              <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">Suscribirse</Button>
            </form>
          </div>

          {/* Column 2: Tu Cuenta */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-primary">Tu Cuenta</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account" className="hover:text-primary transition-colors">Información Personal</Link></li>
              <li><Link href="/account/orders" className="hover:text-primary transition-colors">Pedidos</Link></li>
              <li><Link href="/favorites" className="hover:text-primary transition-colors">Favoritos</Link></li>
            </ul>
          </div>

          {/* Column 3: Ayuda */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-primary">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Column 4: Contacto & Redes Sociales */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-primary">Contacto</h3>
            <div className="flex items-center gap-2 mb-2 text-sm">
              <Phone className="h-5 w-5 text-primary" />
              <span>+595 21 123 456</span>
            </div>
            <p className="text-sm mb-4">support@azuremarketplace.com</p>
            <h3 className="text-lg font-headline font-semibold mb-2 text-primary">Redes Sociales</h3>
            <div className="flex space-x-3">
              <Link href="#" aria-label="Facebook" className="text-primary hover:text-primary/80 transition-colors"><Facebook size={24} /></Link>
              <Link href="#" aria-label="Instagram" className="text-primary hover:text-primary/80 transition-colors"><Instagram size={24} /></Link>
              <Link href="#" aria-label="Twitter" className="text-primary hover:text-primary/80 transition-colors"><Twitter size={24} /></Link>
              <Link href="#" aria-label="YouTube" className="text-primary hover:text-primary/80 transition-colors"><Youtube size={24} /></Link>
            </div>
          </div>
        </div>

        {/* Payment Partners (Placeholder) */}
        <div className="border-t border-border/40 pt-8 mb-8">
          <h3 className="text-center text-sm font-semibold text-primary mb-4">Socios de Pago</h3>
          <div className="flex justify-center items-center gap-4 grayscale opacity-75">
            {/* Replace with actual logos or a generic payment icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" viewBox="0 0 24 24" fill="currentColor" className="text-muted-foreground"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
            <span className="font-bold text-xl text-muted-foreground">BANCARD</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-muted-foreground border-t border-border/40 pt-8">
          &copy; {new Date().getFullYear()} Azure Marketplace. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
