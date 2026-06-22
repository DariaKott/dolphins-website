import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Experience } from "@/components/Experience/Experience";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Location } from "@/components/Location/Location";
import { Method } from "@/components/Method/Method";
import { ParticipationCondition } from "@/components/ParticipationCondition/ParticipationCondition";
import { Pricing } from "@/components/Pricing/Pricing";
import { Yacht } from "@/components/Yacht/Yacht";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Method />
        <Location />
        <Experience />
        <Yacht />
        <Pricing />
        <ParticipationCondition />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;
