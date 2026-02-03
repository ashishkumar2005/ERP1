import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Futurewise Edutech | Quality Coaching for Academic Success',
  description:
    'Expert guidance for classes 1-12 (CBSE), IIT-JEE, NEET, Olympiads & more in Hajipur, Vaishali.',
  keywords: [
    'Coaching Institute Hajipur',
    'IIT-JEE Coaching',
    'NEET Coaching',
    'CBSE Tuition',
    'Olympiad Preparation',
    'Futurewise Edutech',
  ],
  openGraph: {
    title: 'Futurewise Edutech | Quality Coaching for Academic Success',
    description:
      'Unlock your potential with expert-led courses at Futurewise Edutech.',
    type: 'website',
    url: 'https://futurewise-edutech.com', // Replace with actual domain
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <div className="relative flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
