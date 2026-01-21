import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#2f3231] bg-background-dark/95 backdrop-blur-sm">
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-8 text-white flex items-center justify-center group-hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">spa</span>
          </div>
          <h1 className="text-white text-xl font-bold tracking-tight">Zen Bonsai</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`${isActive('/shop') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors text-sm font-medium`}>Shop</Link>
          <Link to="/care" className={`${isActive('/care') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors text-sm font-medium`}>Care</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors text-sm font-medium`}>About</Link>
          <Link to="/workshops" className={`${isActive('/workshops') ? 'text-primary' : 'text-text-main hover:text-primary'} transition-colors text-sm font-medium`}>Workshops</Link>
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center">
          {isSearchOpen ? (
            <form onSubmit={handleSearchSubmit} className="relative flex items-center animate-fadeIn">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => !searchQuery && setIsSearchOpen(false)}
                placeholder="Search..."
                className="bg-surface-dark border border-[#3f4241] rounded-full pl-4 pr-10 py-2 text-sm text-white focus:outline-none focus:border-primary w-40 md:w-60 transition-all font-body placeholder:text-text-muted"
              />
              <button 
                type="button" 
                onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                onClick={() => setIsSearchOpen(false)} 
                className="absolute right-2 flex items-center justify-center text-text-muted hover:text-white size-8 rounded-full"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </form>
          ) : (
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="flex items-center justify-center size-10 rounded-full hover:bg-surface-dark transition-colors text-white"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
          )}

          <Link to="/cart" className="relative flex items-center justify-center size-10 rounded-full hover:bg-surface-dark transition-colors text-white">
            <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
          </Link>
          <Link to="/dashboard" title="Dashboard" className="hidden sm:flex items-center justify-center size-10 rounded-full hover:bg-surface-dark transition-colors text-white">
             <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
          <Link to="/contact" title="Contact Us" className="hidden sm:flex items-center justify-center size-10 rounded-full hover:bg-surface-dark transition-colors text-white">
             <span className="material-symbols-outlined text-[20px]">support_agent</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex items-center justify-center size-10 rounded-full hover:bg-surface-dark transition-colors text-white">
            <span className="material-symbols-outlined text-[20px]">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark border-t border-[#2f3231] px-4 py-4 flex flex-col gap-4 absolute w-full left-0 top-20 shadow-xl z-50">
          <Link onClick={() => setIsMenuOpen(false)} to="/shop" className="text-text-main hover:text-primary transition-colors text-base font-medium py-2">Shop</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/care" className="text-text-main hover:text-primary transition-colors text-base font-medium py-2">Care</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/about" className="text-text-main hover:text-primary transition-colors text-base font-medium py-2">About</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/workshops" className="text-text-main hover:text-primary transition-colors text-base font-medium py-2">Workshops</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/dashboard" className="text-text-main hover:text-primary transition-colors text-base font-medium py-2">Dashboard</Link>
          <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="text-text-main hover:text-primary transition-colors text-base font-medium py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export const Footer = () => (
  <footer className="bg-background-dark border-t border-[#2f3231] pt-16 pb-8">
    <div className="px-4 md:px-10 lg:px-20 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <span className="material-symbols-outlined text-3xl text-primary">spa</span>
            <span className="font-bold text-xl">Zen Bonsai</span>
          </div>
          <p className="text-text-muted text-sm font-body leading-relaxed">
            Connecting nature and art through the timeless practice of bonsai cultivation.
          </p>
          <div className="flex gap-4 mt-2">
            <a className="text-text-muted hover:text-white transition-colors" href="#"><span className="sr-only">Instagram</span>IG</a>
            <a className="text-text-muted hover:text-white transition-colors" href="#"><span className="sr-only">Twitter</span>TW</a>
            <a className="text-text-muted hover:text-white transition-colors" href="#"><span className="sr-only">Facebook</span>FB</a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Shop</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/shop" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Deciduous Trees</Link></li>
            <li><Link to="/shop" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Evergreen Trees</Link></li>
            <li><Link to="/shop" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Flowering Bonsai</Link></li>
            <li><Link to="/shop" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Tools &amp; Soil</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Support</h4>
          <ul className="flex flex-col gap-2">
            <li><Link to="/care" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Care Guides</Link></li>
            <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Shipping &amp; Returns</Link></li>
            <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors text-sm font-body">FAQ</Link></li>
            <li><Link to="/contact" className="text-text-muted hover:text-primary transition-colors text-sm font-body">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Visit Us</h4>
          <address className="text-text-muted text-sm font-body not-italic leading-relaxed">
            123 Serenity Lane<br />
            Kyoto District<br />
            Portland, OR 97205<br />
            <a className="hover:text-primary mt-2 block" href="mailto:hello@zenbonsai.com">hello@zenbonsai.com</a>
          </address>
        </div>
      </div>
      <div className="border-t border-[#2f3231] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted font-body">
        <p>© 2024 Zen Bonsai. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <a className="hover:text-white" href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};