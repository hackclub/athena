import type { Metadata } from "next";
import "./globals.css";
import Background from "@/components/Background";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "Athena - Hack Club",
  description:
    "Athena is a group of programs at Hack Club to empower girls and nonbinary teenagers to code.",
  icons: "https://assets.hackclub.com/icon-rounded.svg",
  openGraph: {
    title: "Athena - Hack Club",
    description:
      "Athena is a group of programs at Hack Club to empower girls and nonbinary teenagers to code.",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Athena - Hack Club",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athena - Hack Club",
    description:
      "Athena is a group of programs at Hack Club to empower girls and nonbinary teenagers to code.",
    images: ["/thumbnail.png"],
    creator: "@hackclub",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PlausibleProvider domain="athena.hackclub.com">
          <Background>
            {children}
            {/* <div className="w-screen p-6 bg-red"></div> */}
          </Background>
        </PlausibleProvider>
      </body>
    </html>
  );
}
