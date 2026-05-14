import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photography Site",
  description: "Enterprise Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
