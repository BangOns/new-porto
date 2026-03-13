import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://syahroni-porto.vercel.app"),
  title: "Syahroni | Frontend Developer Portfolio",
  description:
    "Portfolio of Syahroni, a Frontend Developer with 1 year of experience creating interactive and user-friendly web applications.",
  keywords: [
    "Frontend Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Web Development",
  ],
  authors: [{ name: "Syahroni" }],
  verification: {
    google: "3eTpbPqgIa-oneDbW7MaxZOkVFBlPrdNeAePDLBpvuU",
  },
  openGraph: {
    title: "Syahroni | Frontend Developer Portfolio",
    description:
      "Explore my projects and web applications built with modern frontend technologies.",
    url: "https://syahroni-porto.vercel.app",
    siteName: "Syahroni Portfolio",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Syahroni Icon",
        type: "image/png",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syahroni | Frontend Developer Portfolio",
    description:
      "Explore my projects and web applications built with modern frontend technologies.",
    images: ["/img/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
