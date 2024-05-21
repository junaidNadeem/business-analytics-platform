import AnalyticsComponent from './components/AnalyticsComponent';
import DataComponent from './components/DataComponent';
import EfficiencyComponent from './components/EfficiencyComponent';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AnalyticsComponent />
      <EfficiencyComponent />
      <DataComponent />
    </>
  );
}

export default App;
