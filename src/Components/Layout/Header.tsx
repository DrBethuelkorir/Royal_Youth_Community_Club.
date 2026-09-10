import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-slate-950/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/10 group-hover:scale-105 transition-transform">
              <span className="text-slate-950 font-black text-xl">
                R
              </span>
            </div>

            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm tracking-wide">
                THE ROYAL
              </div>

              <div className="text-amber-400 text-[10px] tracking-[0.2em] font-medium mt-1">
                YOUTH COMMUNITY
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-2"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-5 h-0.5 rounded-full bg-amber-400" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/login"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-semibold transition-all"
            >
              Join Now

              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 bg-slate-950 border-t border-white/10">
          <div className="px-5 sm:px-8 py-6">

            <nav
              className="space-y-1"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-400/10 text-amber-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>

                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="border-t border-white/10 my-6" />

            <div className="space-y-3">

              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center justify-center w-full py-3.5 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold transition-colors"
              >
                Join the Community

                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;