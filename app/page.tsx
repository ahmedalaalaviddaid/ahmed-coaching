import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyMe from "../components/WhyMe";
import Plans from "../components/Plans";
import JoinForm from "../components/JoinForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <About />

      <WhyMe />

      <Plans />

      <JoinForm />

      <Footer />

    

    </main>
  );
}