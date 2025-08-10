import Footer from "@/shared/ui/Footer/Footer";
import Header from "@/shared/ui/Header/Header";
import { Manrope } from "@next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const manrope = Manrope({
  weight: ["200", "400", "500", "700", "800"], // Example weights
  subsets: ["latin"],
  display: "swap", // Ensures text remains visible during font loading
  variable: "--font-manrope", // Creates a CSS variable for easy application
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={`dark  ${manrope.className} antialiased`}>
        <div className='w-screen overflow-hidden'>
          <Header />

          <main
            className='mt-20 w-full max-w-[1080px] mx-auto min-h-[calc(100vh-205px)]
px-4 py-5 relative'
          >
            <section className='absolute -z-1 -top-[4%] -left-[150%] sm:-left-[75%]  -rotate-45'>
              <div className='bg-white opacity-[2%] h-96 w-4xl'></div>
              <div className='bg-white opacity-[2%] h-12 w-4xl mt-5'></div>
            </section>
            {children}
          </main>
          <Footer />
        </div>
        <Toaster richColors theme='dark' />
      </body>
    </html>
  );
}
