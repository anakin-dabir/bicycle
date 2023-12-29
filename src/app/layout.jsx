import {Inter, Chakra_Petch, Roboto, Titillium_Web} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({subsets: ['latin'], variable: '--font-inter'});
const chakra = Chakra_Petch({
  subsets: ['latin'],
  variable: '--font-chakra',
  style: ['italic', 'normal'],
  weight: ['300', '400', '500', '600', '700'],
});
const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  style: ['italic', 'normal'],
  weight: ['300', '400', '500', '700'],
});

const teko = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-teko',
  style: ['italic', 'normal'],
  weight: ['200', '300', '400', '600', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({children}) {
  return (
    <html lang='pt'>
      <body
        className={`${chakra.variable} ${teko.variable} ${roboto.variable} ${roboto.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
