import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ClientProvider from "@/components/clientprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wealth Tracker",
  description: "Track your wealth with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`}>
        <ClientProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-sky-100 dark:bg-gray-900 py-12 text-center text-gray-600 dark:text-gray-400">
            © 2025 Himanshi Kothari. All rights reserved.
          </footer>
        </ClientProvider>
      </body>
    </html>
  );
}
