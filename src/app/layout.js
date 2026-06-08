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

export const metadata = {
  title: "Home - Pencil Media Solutions",
  description: "",
};
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Topbar from "../component/Topbar";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import { NAVBAR } from "@/constants";
import { TOP_HEADER } from "@/constants";
import { FOOTER } from "@/constants";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider>
          <Topbar mobile={TOP_HEADER.MOBILE} email={TOP_HEADER.EMAIL} />
          <Navbar logo={NAVBAR.LOGO} links={NAVBAR.LINKS} />
          {children}
          <Footer title={FOOTER.TITLE} location={FOOTER.ADDRESS} phone={FOOTER.PHONE} email={FOOTER.EMAIL} titleSecond={FOOTER.TITLE_SECOND} copyRight={FOOTER.COPYRIGHT} />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
