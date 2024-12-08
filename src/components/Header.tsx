import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from './Link';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-black/95 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div 
              className="text-2xl font-bold text-blue-600 cursor-pointer" 
              onClick={() => handleNavClick('home')}
            >
              Silverstice
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="#" 
              onClick={() => handleNavClick('home')}
              className={currentPage === 'home' ? 'text-blue-600' : ''}
            >
              Home
            </Link>
            <Link 
              href="#" 
              onClick={() => handleNavClick('about')}
              className={currentPage === 'about' ? 'text-blue-600' : ''}
            >
              About
            </Link>
            <Link 
              href="#" 
              onClick={() => handleNavClick('services')}
              className={currentPage === 'services' ? 'text-blue-600' : ''}
            >
              Services
            </Link>
            <Link 
              href="#" 
              onClick={() => handleNavClick('team')}
              className={currentPage === 'team' ? 'text-blue-600' : ''}
            >
              Team
            </Link>
            <Link href="#contact">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link 
              href="#" 
              onClick={() => handleNavClick('home')}
              className={`block ${currentPage === 'home' ? 'text-blue-600' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="#" 
              onClick={() => handleNavClick('about')}
              className={`block ${currentPage === 'about' ? 'text-blue-600' : ''}`}
            >
              About
            </Link>
            <Link 
              href="#" 
              onClick={() => handleNavClick('services')}
              className={`block ${currentPage === 'services' ? 'text-blue-600' : ''}`}
            >
              Services
            </Link>
            <Link 
              href="#" 
              onClick={() => handleNavClick('team')}
              className={`block ${currentPage === 'team' ? 'text-blue-600' : ''}`}
            >
              Team
            </Link>
            <Link href="#contact" className="block">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}