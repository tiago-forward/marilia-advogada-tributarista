import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <main>
      <Hero id="hero" />
      <About id="about" />
      <Service id="service" />
    </main>
  );
}
