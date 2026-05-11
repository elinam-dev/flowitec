import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  title: 'Flowitec | Engineering & Procurement Solutions Across Africa',
  description:
    'Reliable Engineering & Procurement Solutions Across Africa. High-quality equipment, expert installations, and dependable after-sales support for industry and water systems.',
  keywords:
    'pumps, valves, motors, control panels, engineering, procurement, Africa, industrial equipment, water treatment, mining',
  icons: {
    icon: [
      { url: '/flowitec-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/flowitec-logo.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/flowitec-logo.png',
    apple: [
      { url: '/flowitec-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/mining-1.jpg" fetchPriority="high" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
