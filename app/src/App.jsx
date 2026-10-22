import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Reviews from './components/Reviews.jsx';
import Footer from './components/Footer.jsx';
import Estimate from './components/Estimate.jsx';
import StickyCta from './components/StickyCta.jsx';
import Admin from './admin/Admin.jsx';
import gallery from './data/gallery.json';
import reviews from './data/reviews.json';

export default function App() {
  const [estimateOpen, setEstimateOpen] = useState(false);

  if (window.location.pathname === '/admin') return <Admin />;

  const rating = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1) : '–';
  const openEstimate = () => setEstimateOpen(true);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header onEstimate={openEstimate} />
      <main id="main">
        <Hero onEstimate={openEstimate} />
        <About rating={rating} />
        <Services onEstimate={openEstimate} />
        <Work items={gallery} />
        <Reviews reviews={reviews} />
      </main>
      <Footer />
      <StickyCta onEstimate={openEstimate} />
      <Estimate open={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </>
  );
}
