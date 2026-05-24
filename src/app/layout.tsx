import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Crudpen | Premium Software Development & Digital Products",
  description: "Crudpen designs and engineers state-of-the-art web applications, custom software solutions, and robust systems for scale and high performance.",
  keywords: ["Software Development", "Crudpen", "Next.js", "Tailwind CSS", "TypeScript", "App Development", "Product Engineering"],
  authors: [{ name: "Crudpen" }],
  openGraph: {
    title: "Crudpen | Premium Software Development & Digital Products",
    description: "We turn complex ideas into robust, high-performance software. Explore Crudpen's bespoke engineering services.",
    url: "https://crudpen.com",
    siteName: "Crudpen",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crudpen | Premium Software Development Solutions",
    description: "Engineering bespoke digital products with speed, reliability, and precision.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-indigo/30 selection:text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <Navbar />
        <main className="flex-grow pt-24 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
