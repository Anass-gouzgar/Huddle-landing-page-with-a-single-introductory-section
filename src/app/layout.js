import "./globals.css";
import { Poppins, Open_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-poppins',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-open-sans',
});


export const metadata = {
  title:
    "Frontend Mentor | Huddle landing page with single introductory section",
  description: "Generated by Anass GOUZGAR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>{children}</body>
    </html>
  );
}
