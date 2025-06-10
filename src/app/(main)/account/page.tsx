import { AccountTabs } from '@/components/user/account-tabs';
import { Separator } from '@/components/ui/separator';

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold font-headline text-primary">Mi Cuenta</h1>
        <p className="text-muted-foreground">Gestiona tu información personal, pedidos y más.</p>
      </div>
      <Separator />
      <AccountTabs />
    </div>
  );
}
