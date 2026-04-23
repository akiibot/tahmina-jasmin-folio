import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AuroraBackground from "@/components/layout/AuroraBackground";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const themeInitScript =
  "try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark';}catch(e){document.documentElement.dataset.theme='dark';}";

export const metadata: Metadata = {
  title: "Tahmina Jasmin — Creative Multimedia Storyteller",
  description:
    "Premium cinematic portfolio for Tahmina Jasmin: video editing, audio editing, narration, brand promotion, and digital marketing.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Providers>
          <AuroraBackground />
          <div className="relative min-h-screen">
            <div className="grain" aria-hidden="true" />
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
