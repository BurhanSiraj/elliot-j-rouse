import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Elliott Rouse | Neurobionics Portfolio",
  description:
    "A research portfolio for Elliott J. Rouse and the Neurobionics Lab, focused on wearable robotics, prosthetics, biomechanics, and human mobility.",
};

export const viewport: Viewport = {
  themeColor: "#439CB5",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
