// ./src/Components/Layout/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/[0.08]">

      {/* =====================================================
          FOOTER CTA
      ===================================================== */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">
                Be part of the journey
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Your potential deserves a community.
              </h2>

              <p className="text-slate-500 mt-3 leading-relaxed">
                Connect with young people who are learning, building and
                creating meaningful change.
              </p>
            </div>

            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all shrink-0"
            >
              Join the community

              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </Link>

          </div>

        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >

              <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-slate-950 font-black text-xl">
                  R
                </span>
              </div>

              <div>
                <div className="text-white font-bold text-sm tracking-wide">
                  THE ROYAL
                </div>

                <div className="text-amber-400 text-[10px] tracking-[0.2em] font-medium mt-1">
                  YOUTH COMMUNITY
                </div>
              </div>

            </Link>

            <p className="text-sm text-slate-500 leading-relaxed max-w-md mt-6">
              A community helping young people discover their potential,
              develop valuable skills, build meaningful connections and
              create positive impact.
            </p>

            {/* Email */}
            <a
              href="mailto:hello@royalyouth.org"
              className="inline-flex items-center gap-2 mt-6 text-sm text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@royalyouth.org
            </a>

          </div>

          {/* Explore */}
          <div>

            <h3 className="text-sm font-semibold text-white mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Account */}
          <div>

            <h3 className="text-sm font-semibold text-white mb-5">
              Your account
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/login"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-slate-500 hover:text-white transition-colors"
                >
                  Create an account
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}
        <div className="mt-14 pt-7 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {year} The Royal Youth Community. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-slate-600">

            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Privacy
            </span>

            <span className="hover:text-slate-400 transition-colors cursor-pointer">
              Terms
            </span>

            <span className="flex items-center gap-1.5">
              Built for the next generation
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;