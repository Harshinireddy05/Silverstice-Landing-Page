import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { Team } from './pages/Team';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Story />
          <Services />
        </>
      ) : currentPage === 'about' ? (
        <About />
      ) : currentPage === 'services' ? (
        <ServicesPage />
      ) : currentPage === 'team' ? (
        <Team />
      ) : null}
      
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}

export default App;