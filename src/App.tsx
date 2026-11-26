import { MotionConfig } from 'framer-motion';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Collections } from './components/Collections';
import { CustomSofaStudio } from './components/CustomSofaStudio';
import { WhyChooseAlankar } from './components/WhyChooseAlankar';
import { InspirationGallery } from './components/InspirationGallery';
import { GoogleReviews } from './components/GoogleReviews';
import { ShowroomVisit } from './components/ShowroomVisit';
import { Footer } from './components/Footer';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#252521]">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <BrandStory />
          <Collections />
          <CustomSofaStudio />
          <WhyChooseAlankar />
          <InspirationGallery />
          <GoogleReviews />
          <ShowroomVisit />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
