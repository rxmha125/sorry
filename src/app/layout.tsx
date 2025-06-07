import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import ThemeClient from '@/components/ThemeClient';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Sorry',
  description: 'A Next.js application with a centered content area and theme toggle.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider>
          <ThemeClient>
            {children}
            <Toaster />
          </ThemeClient>
        </ThemeProvider>
      </body>
    </html>
  );
}
