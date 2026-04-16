import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brandon Bell — Systems & Instrumentation Engineer",
  description:
    "Systems and instrumentation engineer with 8 years of experience in scientific instruments, medical devices, and lab automation. Based in Livermore, CA.",
  openGraph: {
    title: "Brandon Bell — Systems & Instrumentation Engineer",
    description:
      "I build the processes and tools that make precision measurement work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
