import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Henny_Penny } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hennyPenny = Henny_Penny({
  variable: "--font-henny-penny",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansão dos Sonhos",
  description: "A maior casa de festas infantis da Zona Norte! Mais de 800m² de diversão e encantamento no Grajaú. Festas mágicas e inesquecíveis para crianças.",
  keywords: "casa de festas infantis, festa criança, aniversário infantil, zona norte, grajaú, festa mágica, diversão infantil",
  authors: [{ name: "Mansão dos Sonhos" }],
  openGraph: {
    title: "Mansão dos Sonhos",
    description: "A maior casa de festas infantis da Zona Norte! Mais de 800m² de diversão e encantamento no Grajaú.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansão dos Sonhos",
    description: "A maior casa de festas infantis da Zona Norte! Mais de 800m² de diversão e encantamento no Grajaú.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="pt-BR">
      <head>
        <link 
          rel="preload" 
          href="/images/pattern-confetti.svg" 
          as="image" 
          type="image/svg+xml" 
        />
        {/* Adicionando scripts de preload para otimização */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              // Precarregamento de componentes principais
              const componentsToPreload = [
                '/components/DynamicMainCarousel',
                '/components/HeroSection',
                '/components/Navbar',
                '/components/Footer'
              ];
              
              if (window.requestIdleCallback) {
                requestIdleCallback(() => {
                  componentsToPreload.forEach(component => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = component;
                    link.as = 'script';
                    document.head.appendChild(link);
                  });
                });
              }
            `
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hennyPenny.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
