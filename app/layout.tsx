import type { Metadata } from "next";
import { Inter, Poppins, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});
const inter = Inter({ subsets: ["latin"] });
const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export const metadata: Metadata = {
  title: "Peek A Review",
  description: "Baby Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto_slab.variable} ${poppins.variable}`}
      >
        <div
          className={
            "relative grid h-full grid-cols-1 grid-rows-[auto,1fr,auto]"
          }
        >
          <Header />
          <div className={"h-full"}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
