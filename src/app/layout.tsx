import MenuProviderTemplate from "@/context/MenuProviderTemplate";
import "./globals.css";
import { Inter } from "next/font/google";
import CarritoProviderTemplate from "@/context/CarritoProviderTemplate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chilis Web",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CarritoProviderTemplate>
          <MenuProviderTemplate>
            <Navbar />
            {children}
            <Footer />
          </MenuProviderTemplate>
        </CarritoProviderTemplate>
      </body>
    </html>
  );
}
