import AnalyticsComponent from './components/AnalyticsComponent';
import DataComponent from './components/DataComponent';
import EfficiencyComponent from './components/EfficiencyComponent';
import FooterComponent from './components/FooterComponent';
import GetStartedComponent from './components/GetStartedComponent';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InsightsComponent from './components/InsightsComponent';
import './index.css';

function App() {
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
