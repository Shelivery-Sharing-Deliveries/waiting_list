import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Suspense } from 'react';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { CSPostHogProvider } from '@/components/PostHogProvider';
import PostHogPageView from '@/components/PostHogPageView';

export const metadata: Metadata = {
  title: 'Shelivery - Delivery costs, Shared.',
  description:
    'No more minimum order limit, and no more delivery fee. Join forces with your neighbors to unlock premium delivery for free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-background text-on-surface"
        style={{ fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif' }}
      >
        <CSPostHogProvider>
          <LanguageProvider>
            <Navbar />
            <main className="pt-[72px]">{children}</main>
            <Footer />
          </LanguageProvider>
        </CSPostHogProvider>
        <Suspense fallback={null}>
          <PostHogPageView />
        </Suspense>
      </body>
    </html>
  );
}