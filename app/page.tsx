import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import About from '@/components/sections/About';
import Directions from '@/components/sections/Directions';
import Projects from '@/components/sections/Projects';
import Advantages from '@/components/sections/Advantages';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] mx-auto">
          <About />
          <Directions />
        </div>
        <Projects />
        <Advantages />
      </main>
      <Footer />
    </>
  );
}
