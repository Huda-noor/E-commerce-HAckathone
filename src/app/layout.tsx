import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { CartProvider } from "./ui/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <CartProvider>{children}</CartProvider>np 
        <Footer/>
      </body>
    </html>
  );
}
