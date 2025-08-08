import './globals.css';
import { Inter, Poppins } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClarityScript from '@/components/ui/ClarityScript/ClarityScript'
import TopBanner from '@/components/layout/TopBanner';

// Configure the fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: {
    template: '%s | Benica East Africa Limited',
    default: 'Benica East Africa Limited - Precision Research & Healthcare Supplies',
  },
  description: 'Your Trusted Partner in Precision Research and Quality Healthcare Supplies across Eastern Africa',
  keywords: [
    'research supplies', 
    'healthcare supplies', 
    'laboratory equipment', 
    'medical equipment', 
    'East Africa', 
    'Kenya', 
    'Uganda',
    'precision research'
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen">
      <ClarityScript />
        <Header />
        <TopBanner /> 
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}