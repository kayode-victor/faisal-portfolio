import Head from "next/head";
import { Inter } from "@next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>Faisal Gidado | Photography Portfolio</title>
        <meta
          name="description"
          content="Explore stunning photography by Faisal Gidado, a talented photographer based in Quebec, Canada."
        />
        <meta
          name="keywords"
          content="Faisal Gidado, photography, photographer, Quebec, Canada, portfolio, images, photos, film maker, videography"
        />
        <meta name="author" content="Your Name" />
        <meta
          property="og:title"
          content="Faisal Gidado | Photography Portfolio"
        />
        <meta
          property="og:description"
          content="Explore stunning photography by Faisal Gidado, a talented photographer based in Quebec, Canada."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://faisal-gidado-portfolio.vercel.app"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dikzx4eyh/image/upload/v1707875811/faisal-gidado/main/dashLogo_cwrbuu.png"
        />
        <meta property="og:image:alt" content="Photography Portfolio" />
        <meta property="og:locale" content="en_CA" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
