import Link from 'next/link';
import { ShoppingBag } from 'lucide-react'; // Example Icon

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/90 transition-colors">
      <ShoppingBag className="h-8 w-8" />
      <span className="text-2xl font-bold font-headline">Blue Multitiendas</span>
    </Link>
  );
}
