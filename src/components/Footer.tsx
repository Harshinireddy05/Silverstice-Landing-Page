import { Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Silverstice</h3>
            <p className="text-gray-400">
            A generative AI-powered technology startup revolutionizing industries through strategic insights, innovative solutions, and advanced data-driven methodologies. Transforming businesses worldwide with cutting-edge AI and a commitment to continuous improvement.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="text-gray-400 hover:text-blue-600"
                >
                  Data-Driven Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="text-gray-400 hover:text-blue-600"
                >
                  Generative AI Platform
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="text-gray-400 hover:text-blue-600"
                >
                  Sustainability Guidelines
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('team')} 
                  className="text-gray-400 hover:text-blue-600"
                >
                  Professional
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Finance</li>
              <li>E-Commerce</li>
              <li>Media</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Silverstice. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}