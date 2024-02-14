import Head from "next/head";
import { Inter } from "next/font/google";
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
          content="Discover the captivating world of photography by Faisal Gidado, an esteemed photographer based in Quebec, Canada. Explore a diverse collection of breathtaking images, including mesmerizing landscapes, soulful portraits, vibrant events, and compelling street photography."
        />
        <meta
          name="keywords"
          content="Faisal Gidado, dashmedia, photography, photographer, Quebec, Canada, portfolio, images, photos, landscape photography, portrait photography, event photography, street photography, artistic, creative, professional"
        />
        <meta name="author" content="Faisal Gidado" />
        <meta
          property="og:title"
          content="Faisal Gidado | Photography Portfolio"
        />
        <meta
          property="og:description"
          content="Discover the captivating world of photography by Faisal Gidado, an esteemed photographer based in Quebec, Canada. Explore a diverse collection of breathtaking images, including mesmerizing landscapes, soulful portraits, vibrant events, and compelling street photography."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dashmedia.vercel.app" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dikzx4eyh/image/upload/v1707875811/faisal-gidado/main/dashLogo_cwrbuu.png"
        />
        <meta property="og:image:alt" content="Photography Portfolio" />
        <meta property="og:locale" content="en_CA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
