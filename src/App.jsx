import Navbar from './components/Navbar';
import Highlights from './components/Highlights';
import Hero from './components/Hero';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import * as Sentry from '@sentry/react';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
