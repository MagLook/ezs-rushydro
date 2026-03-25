import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import StationMap from "@/components/StationMap";
import Services from "@/components/Services";
import Shop from "@/components/Shop";
import Electroclub from "@/components/Electroclub";
import Corporate from "@/components/Corporate";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <StationMap />
        <Services />
        <Shop />
        <Electroclub />
        <Corporate />
        <News />
      </main>
      <Footer />
    </>
  );
}
