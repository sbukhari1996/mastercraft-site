import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Reviews from './components/Reviews.jsx';
import Gallery from './components/Gallery.jsx';
import Location from './components/Location.jsx';
import Estimate from './components/Estimate.jsx';
import StickyCta from './components/StickyCta.jsx';
import Footer from './components/Footer.jsx';
import Admin from './admin/Admin.jsx';
import gallery from './data/gallery.json';
import reviews from './data/reviews.json';

export default function App() {
  const [estimateOpen, setEstimateOpen] = useState(false);

  if (window.location.pathname === '/admin') return <Admin />;

  const beforeAfter = gallery.filter((g) => g.kind === 'before-after');
  const photos = gallery.filter((g) => g.kind !== 'before-after');

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-brand focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header onEstimate={() => setEstimateOpen(true)} />
      <main id="main">
        <Hero onEstimate={() => setEstimateOpen(true)} />
        <Services onEstimate={() => setEstimateOpen(true)} />
        <BeforeAfter items={beforeAfter} />
        <Reviews reviews={reviews} />
        <Gallery items={photos} />
        <Location />
      </main>
      <Footer />
      <StickyCta onEstimate={() => setEstimateOpen(true)} />
      <Estimate open={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </>
  );
}
