// ./src/pages/RegisterPage.tsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError('');

    if (formData.password.length < 8) {
      setError('Password must contain at least 8 characters.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!agreeTerms) {
      setError('Please agree to the Terms and Conditions.');
      return;
    }

    setIsLoading(true);

    try {
      // Temporary simulation.
      // Replace this with your Spring Boot API later.
      await new Promise((resolve) => setTimeout(resolve, 1200));

      navigate('/login');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-amber-400/[0.05] rounded-full blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />

      </div>

      {/* =====================================================
          REGISTER
      ===================================================== */}
      <section className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 py-32">

        <div className="w-full max-w-lg">

          {/* Brand */}
          <div className="text-center mb-8">

            <Link
              to="/"
              className="inline-flex items-center justify-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-400/10 group-hover:scale-105 transition-transform">
                <span className="text-2xl">👑</span>
              </div>
            </Link>

            <div className="mt-6">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 mb-3">
                The Royal Youth Community
              </p>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Create your account
              </h1>

              <p className="text-slate-500 text-sm mt-3">
                Join a community of young people growing, leading and
                creating impact.
              </p>

            </div>

          </div>

          {/* Card */}
          <div className="
            rounded-3xl
            border border-white/[0.08]
            bg-white/[0.025]
            p-6 sm:p-8
          ">

            {/* Error */}
            {error && (
              <div className="
                flex items-start gap-3
                p-4 mb-6
                rounded-xl
                bg-red-500/[0.07]
                border border-red-500/20
              ">

                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />

                <p className="text-sm text-red-300">
                  {error}
                </p>

              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =================================================
                  FULL NAME
              ================================================= */}
              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Full name
                </label>

                <div className="relative">

                  <User className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    w-4 h-4
                    text-slate-600
                    pointer-events-none
                  " />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="
                      w-full
                      pl-11 pr-4 py-3.5
                      rounded-xl
                      bg-white/[0.035]
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

              {/* =================================================
                  EMAIL
              ================================================= */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email address
                </label>

                <div className="relative">

                  <Mail className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    w-4 h-4
                    text-slate-600
                    pointer-events-none
                  " />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                      w-full
                      pl-11 pr-4 py-3.5
                      rounded-xl
                      bg-white/[0.035]
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

              {/* =================================================
                  PASSWORD
              ================================================= */}
              <div>

                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Password
                </label>

                <div className="relative">

                  <Lock className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    w-4 h-4
                    text-slate-600
                    pointer-events-none
                  " />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="
                      w-full
                      pl-11 pr-12 py-3.5
                      rounded-xl
                      bg-white/[0.035]
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
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="
                      absolute right-4 top-1/2
                      -translate-y-1/2
                      text-slate-600
                      hover:text-slate-300
                      transition-colors
                    "
                    aria-label={
                      showPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>

                </div>

                <p className="text-xs text-slate-600 mt-2">
                  Use at least 8 characters.
                </p>

              </div>

              {/* =================================================
                  CONFIRM PASSWORD
              ================================================= */}
              <div>

                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Confirm password
                </label>

                <div className="relative">

                  <Lock className="
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    w-4 h-4
                    text-slate-600
                    pointer-events-none
                  " />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? 'text'
                        : 'password'
                    }
                    required
                    autoComplete="new-password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repeat your password"
                    className="
                      w-full
                      pl-11 pr-12 py-3.5
                      rounded-xl
                      bg-white/[0.035]
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
                    onClick={() =>
                      setShowConfirmPassword(
                        (prev) => !prev
                      )
                    }
                    className="
                      absolute right-4 top-1/2
                      -translate-y-1/2
                      text-slate-600
                      hover:text-slate-300
                      transition-colors
                    "
                    aria-label={
                      showConfirmPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>

                </div>

              </div>

              {/* =================================================
                  TERMS
              ================================================= */}
              <label className="flex items-start gap-3 cursor-pointer select-none">

                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) =>
                    setAgreeTerms(e.target.checked)
                  }
                  className="
                    mt-0.5
                    w-4 h-4
                    rounded
                    border-white/20
                    bg-white/[0.04]
                    text-amber-400
                    focus:ring-amber-400
                    focus:ring-offset-0
                  "
                />

                <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  I agree to the{' '}
                  <Link
                    to="/terms"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/privacy"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>

              </label>

              {/* =================================================
                  SUBMIT
              ================================================= */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  group
                  w-full
                  flex items-center justify-center gap-2
                  px-6 py-3.5
                  rounded-xl
                  bg-amber-400
                  hover:bg-amber-300
                  text-slate-950
                  font-semibold
                  text-sm
                  transition-all
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                "
              >

                {isLoading ? (
                  <>
                    <div className="
                      w-4 h-4
                      rounded-full
                      border-2
                      border-slate-950/30
                      border-t-slate-950
                      animate-spin
                    " />

                    Creating account...
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />

                    Create account

                    <ArrowRight className="
                      w-4 h-4
                      group-hover:translate-x-1
                      transition-transform
                    " />
                  </>
                )}

              </button>

            </form>

            {/* =================================================
                BENEFITS
            ================================================= */}
            <div className="
              mt-7 pt-6
              border-t border-white/[0.07]
            ">

              <p className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold mb-4">
                Your membership includes
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                {[
                  'Community access',
                  'Events & programs',
                  'Growth opportunities',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />

                    <span className="text-xs text-slate-500">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Login */}
          <p className="text-center text-sm text-slate-600 mt-7">

            Already have an account?{' '}

            <Link
              to="/login"
              className="
                text-amber-400
                hover:text-amber-300
                font-medium
                transition-colors
              "
            >
              Sign in
            </Link>

          </p>

          {/* Back home */}
          <div className="text-center mt-4">

            <Link
              to="/"
              className="
                text-xs
                text-slate-700
                hover:text-slate-400
                transition-colors
              "
            >
              ← Back to home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default RegisterPage;