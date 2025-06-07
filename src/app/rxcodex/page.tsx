import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function RxCodexPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-sm rounded-2xl shadow-lg border-border bg-card">
        <CardContent className="p-8 flex flex-col items-center text-center">
          <div className="relative mb-6 p-1 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 transition-transform duration-300 ease-out hover:scale-110">
            <Avatar className="h-28 w-28">
              <AvatarImage src="/rxcodex.png" alt="Rx Codex" className="object-cover" />
              <AvatarFallback>RC</AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-3xl font-bold text-card-foreground mb-1">
            Rx Codex
          </h1>
          <p className="text-lg font-medium text-accent mb-4">
            Founder & AI Architect
          </p>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
            Sorry user, we don't have any LinkedIn account
          </p>

          <div className="flex w-full justify-center">
            <Button asChild variant="secondary" className="flex-1 rounded-lg max-w-[calc(50%-0.5rem)]">
              <a href="https://rxcodexai.com" target="_blank" rel="noopener noreferrer">
                Back to Website
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
