import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Specialities } from "@/components/Specialities";
import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Team } from "@/components/Team";
import { Careers } from "@/components/Careers";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Specialities />
        <About />
        <Approach />
        <Team />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
