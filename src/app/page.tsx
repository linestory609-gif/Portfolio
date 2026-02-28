import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientBase from "@/components/ClientBase";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ClientBase />
        <Results />
        <Process />
        <Pricing />
        <Team />
        <Blog />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
