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
        <title>Photography Portfolio | Faisal Gidado</title>
        <meta
          name="description"
          content="Explore stunning photography by Faisal Gidado, a talented photographer based in Quebec, Canada."
        />
        <meta
          name="keywords"
          content="photography, photographer,Quebec, Canada, portfolio, images, photos, film maker, videography"
        />
        <meta name="author" content="Your Name" />
        <meta
          property="og:title"
          content="Photography Portfolio | Faisal gidado"
        />
        <meta
          property="og:description"
          content="Explore stunning photography by Faisal Gidado, a talented photographer based in Quebec, Canada."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
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
