import { ThemeProvider } from "@/components/contexts/theme-provider";
import "@/styles/globals.css";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
import type React from "react";
import type { Metadata, Viewport } from "next"

const APP_NAME = "GitMe";
const APP_DEFAULT_TITLE = "Learn Git and GitHub: The Complete Beginner's Guide";
const APP_TITLE_TEMPLATE = "%s | GitMe";
const APP_DESCRIPTION = "Master Git and GitHub with our comprehensive, beginner-friendly guide. Learn version control, branching, collaboration, workflows, and best practices through interactive tutorials and real-world examples.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  metadataBase: new URL("https://www.gitme.live"),
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: [
    "git beginner's guide",
    "learn git with me", 
    "learn git and github",
    "git tutorial",
    "learn git",
    "git for beginners",
    "version control basics",
    "github tutorial",
    "git commands",
    "git workflow",
    "git branching",
    "git merge",
    "git commit",
    "git repository",
    "source control",
    "code versioning",
    "developer tools",
    "programming tutorial",
    "software development",
    "git pull",
    "git push",
    "git clone",
    "git documentation",
    "version control system",
    "collaborative coding",
    "git best practices",
    "github collaboration",
    "git training",
    "programming basics",
    "code management",
    "git questions",
    "git quiz",
    "git practice",
    "git exercises",
    "git interview questions",
    "git troubleshooting",
    "git help",
    "git problems",
    "git solutions",
    "git FAQ"
  ],
  authors: [{ name: "spaciousejar" }],
  creator: "spaciousejar",
  publisher: "spaciousejar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: "https://www.gitme.live",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: APP_DEFAULT_TITLE,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: ["/og.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights/>
      </body>
    </html>
  );
}
