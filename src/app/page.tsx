import About from "@/components/main page/about/About";
import Contacts from "@/components/main page/contacts/Contacts";
import MainSection from "@/components/main page/layout/mainSection/MainSection";
import Prices from "@/components/main page/prices/Prices";
import Works from "@/components/main page/Works/Works";

export default function Home() {
  return (
    <>
      <MainSection />
      <Prices />
      <About />
      <Works />
      <Contacts />
    </>
  );
}
