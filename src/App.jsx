import AnalyticsComponent from './components/AnalyticsComponent';
import DataComponent from './components/DataComponent';
import EfficiencyComponent from './components/EfficiencyComponent';
import FooterComponent from './components/FooterComponent';
import GetStartedComponent from './components/GetStartedComponent';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InsightsComponent from './components/InsightsComponent';
import './index.css';
import './animation.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);
  return (
    <>
      <Header />
      <HeroSection />
      <AnalyticsComponent />
      <EfficiencyComponent />
      <DataComponent />
      <InsightsComponent />
      <GetStartedComponent />
      <FooterComponent />
    </>
  );
}

export default App;
