import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from 'next/font/google'



export const metadata: Metadata = {
  title: "Cheap Boosts",
  description: "Amazing, cheap boosts for your discord server. Get them today",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="stylesheet" href="https://myvouch.es/storage/assets/vouches.css" />
          <script>window.slug = &#39;cheapboosts&#39;</script>
          <script src="https://myvouch.es/storage/assets/vouches.js"></script>
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
