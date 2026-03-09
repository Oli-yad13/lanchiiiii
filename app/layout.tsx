import type { Metadata } from "next";
import "./globals.css";
import ConditionalNavbar from "./components/ConditionalNavbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Lanchi Covered — Affordable Cancer Protection for Ethiopian Women",
  description:
    "Lanchi Covered provides affordable breast and cervical cancer protection for Ethiopian women through iddirs, cooperatives, and workplaces. ETB 2,100/year. Implemented by ID-NET, underwritten by Nib Insurance.",
  keywords: [
    "Lanchi Covered",
    "Lanchi",
    "women's health Ethiopia",
    "cancer protection Ethiopia",
    "microinsurance Ethiopia",
    "breast cancer cover",
    "cervical cancer cover",
    "iddir insurance",
    "women's cooperative health",
    "ID-NET",
    "Nib Insurance",
    "FSD Ethiopia",
  ],
  openGraph: {
    title: "Lanchi Covered — Affordable Cancer Protection for Ethiopian Women",
    description:
      "ETB 2,100/year. Breast & cervical cancer cover, annual screening, and financial protection for Ethiopian women. Implemented by ID-NET, underwritten by Nib Insurance.",
    url: "https://lanchi.et",
    siteName: "Lanchi",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ConditionalNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
