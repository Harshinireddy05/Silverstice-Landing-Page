import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { About } from './pages/About';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen">
      <Header />
      
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Story />
          <Services />
        </>
      ) : currentPage === 'about' ? (
        <About />
      ) : null}
      
      <Footer />
    </div>
  );
}

export default App;