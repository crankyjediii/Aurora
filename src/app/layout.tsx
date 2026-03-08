import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Aurora | Premium AI Adoption Platform",
  description: "A calmer way to work with AI. Choose the right tools, learn what they do, and build better workflows without confusion.",
};

import { ConvexClientProvider } from "@/components/providers/convex-client-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body suppressHydrationWarning className={`${inter.variable} min-h-screen bg-charcoal-900 font-sans antialiased`}>
        <ConvexClientProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
