import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'How It Works', path: 'how-it-works' },
    { name: 'Process', path: 'process' },
    { name: 'FAQ', path: 'faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <img
              src="/Renvra_group_full_logo-removebg-preview.png"
              alt="Renvra Group"
              className="h-32 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book a Call
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium ${
                    currentPage === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => window.open('https://calendly.com/emmanuel-renvra-group/30min', '_blank')}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Book a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
