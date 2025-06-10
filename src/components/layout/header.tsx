import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart, User, Search, Menu } from 'lucide-react';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { placeholderCategories } from '@/lib/placeholders';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  // TODO: Replace with actual categories data
  const categories = placeholderCategories;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="md:hidden">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-background p-6">
                <Logo />
                <nav className="mt-8 flex flex-col gap-4">
                  <NavMenu categories={categories} />
                   <Link href="/favorites" className="flex items-center gap-2 text-foreground hover:text-primary">
                    <Heart className="h-5 w-5" /> Favoritos
                  </Link>
                  <Link href="/cart" className="flex items-center gap-2 text-foreground hover:text-primary">
                    <ShoppingCart className="h-5 w-5" /> Mi Carrito
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-2 text-foreground hover:text-primary px-0">
                        <User className="h-5 w-5" /> Cuenta
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild><Link href="/account">Mi Cuenta</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/auth/login">Iniciar Sesión</Link></DropdownMenuItem>
                      <DropdownMenuItem asChild><Link href="/auth/register">Registrarse</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:block">
            <Logo />
          </div>
        </div>

        <div className="flex-1 max-w-xl hidden md:flex justify-center">
          <form action="/search" method="GET" className="w-full relative">
            <Input
              type="search"
              name="q"
              placeholder="Qué estás buscando?"
              className="w-full rounded-full pl-10 border-primary/50 focus:border-primary focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </form>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden lg:block">Hola, ¿cómo estás?</span>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/favorites" aria-label="Favoritos">
              <Heart className="h-6 w-6 text-primary" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart" aria-label="Mi Carrito">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Cuenta de Usuario">
                <User className="h-6 w-6 text-primary" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild><Link href="/account">Mi Cuenta</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/auth/login">Iniciar Sesión</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/auth/register">Registrarse</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <nav className="hidden md:flex container mx-auto h-12 items-center justify-center border-t border-border/40 px-4">
         <NavMenu categories={categories} />
      </nav>
       {/* Mobile Search Bar */}
      <div className="md:hidden p-2 border-t border-border/40">
        <form action="/search" method="GET" className="w-full relative">
            <Input
              type="search"
              name="q"
              placeholder="Qué estás buscando?"
              className="w-full rounded-full pl-10 border-primary/50 focus:border-primary focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </form>
      </div>
    </header>
  );
}
