import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata: Metadata = {
  title: 'TitanFlow AI - Next Generation AI Development',
  description: 'Transform your ideas into reality with our cutting-edge AI solutions. Build, deploy, and scale with confidence.',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { segment?: string[] };
}) {
  const isThankYouPage = params?.segment?.[0] === 'thank-you';

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${robotoMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
          {!isThankYouPage && <WhatsAppCTA />}
          {!isThankYouPage && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}