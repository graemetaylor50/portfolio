
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import Experience from "./components/Experience/Experience";
import ChatBot from "./components/ChatBot/ChatBot";

export default function Home() {
  return (
    <>
      <div >
        <Hero />
        <About />
        <Experience />
        <CTA />
        <ChatBot />
      </div>
    </>
  );
}

           