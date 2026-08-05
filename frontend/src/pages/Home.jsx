import Hero from '../components/home/Hero';
import WisdomSection from '../components/home/WisdomSection';
import PracticesSection from '../components/home/PracticesSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WisdomSection />
      <PracticesSection />
      <Footer />
    </div>
  );
}
