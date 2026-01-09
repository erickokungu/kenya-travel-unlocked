import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FilterBar from '@/components/FilterBar';
import DestinationsSection from '@/components/DestinationsSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import ItinerarySection from '@/components/ItinerarySection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <FilterBar />
        <DestinationsSection />
        <ExperiencesSection />
        <ItinerarySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
