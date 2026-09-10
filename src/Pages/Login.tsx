import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');
    setIsLoading(true);

    try {
      // Temporary demo authentication
      // Replace this with your real API authentication later.
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === 'demo@royal.org' && password === 'password') {
        localStorage.setItem('token', 'demo-token-12345');

        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }

        navigate('/dashboard');
      } else {
        setError('The email or password you entered is incorrect.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-5 sm:px-8 lg:px-12 pt-24 pb-16">

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-400/[0.05] blur-[120px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative w-full max-w-md">

        {/* Brand */}
        <div className="text-center mb-8">

          <Link
            to="/"
            className="inline-flex items-center gap-3 mb-8 group"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-slate-950 font-black text-xl">
                R
              </span>
            </div>

            <div className="text-left">
              <div className="text-white font-bold text-sm tracking-wide">
                THE ROYAL
              </div>

              <div className="text-amber-400 text-[10px] tracking-[0.2em] font-medium mt-1">
                YOUTH COMMUNITY
              </div>
            </div>
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-3 text-slate-500">
            Sign in to continue to your community.
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8 shadow-2xl">

          {/* Error */}
          {error && (
            <div className="flex items-start gap-3 p-4 mb-6 rounded-xl bg-red-500/[0.08] border border-red-500/20">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />

              <div>
                <p className="text-sm font-medium text-red-300">
                  Sign in failed
                </p>

                <p className="text-xs text-red-400/80 mt-1">
                  {error}
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />

                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="
                    w-full
                    pl-11 pr-4 py-3.5
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-amber-400/60
                    focus:ring-2
                    focus:ring-amber-400/10
                    transition-all
                  "
                />
              </div>
            </div>

            {/* Password */}
            <div>

              <div className="flex items-center justify-between mb-2">

                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative">

                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />

                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="
                    w-full
                    pl-11 pr-12 py-3.5
                    rounded-xl
                    bg-white/[0.04]
                    border border-white/10
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-amber-400/60
                    focus:ring-2
                    focus:ring-amber-400/10
                    transition-all
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    text-slate-500
                    hover:text-slate-300
                    transition-colors
                  "
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>

              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center">

              <label className="flex items-center gap-3 cursor-pointer select-none">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="
                    w-4 h-4
                    rounded
                    border-white/20
                    bg-white/[0.04]
                    text-amber-400
                    focus:ring-amber-400/20
                    focus:ring-offset-0
                  "
                />

                <span className="text-sm text-slate-500">
                  Remember me
                </span>

              </label>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="
                group
                w-full
                flex items-center justify-center gap-2
                py-3.5
                rounded-xl
                bg-amber-400
                hover:bg-amber-300
                text-slate-950
                font-semibold
                transition-all
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  Sign in
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

          </form>

          {/* Demo account */}
          <div className="mt-6 p-4 rounded-xl border border-amber-400/10 bg-amber-400/[0.04]">

            <div className="flex items-start gap-3">

              <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />

              <div>
                <p className="text-xs font-medium text-amber-300">
                  Demo account
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Email:{' '}
                  <span className="text-slate-400 font-mono">
                    demo@royal.org
                  </span>
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Password:{' '}
                  <span className="text-slate-400 font-mono">
                    password
                  </span>
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-500 mt-7">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            Create an account
          </Link>
        </p>

        {/* Back home */}
        <div className="text-center mt-5">
          <Link
            to="/"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
          >
            ← Back to home
          </Link>
        </div>

      </div>
    </main>
  );
};

export default LoginPage;