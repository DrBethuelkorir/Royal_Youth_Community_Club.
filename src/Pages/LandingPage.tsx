// ./src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  CalendarDays,
  BookOpen,
  Rocket,
  HeartHandshake,
  Trophy,
  ShieldCheck,
  Star,
  CheckCircle2,
  Quote,
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'A community that connects',
      desc: 'Meet ambitious young people, build meaningful relationships and grow together.',
    },
    {
      icon: CalendarDays,
      title: 'Events that matter',
      desc: 'Take part in practical workshops, conversations, meetups and experiences.',
    },
    {
      icon: BookOpen,
      title: 'Learn and develop',
      desc: 'Access useful resources, guidance and opportunities to develop your skills.',
    },
    {
      icon: Rocket,
      title: 'Turn ideas into action',
      desc: 'Work on real projects and initiatives that create value in your community.',
    },
    {
      icon: Trophy,
      title: 'Celebrate progress',
      desc: 'Get recognized for your contribution, leadership and achievements.',
    },
    {
      icon: HeartHandshake,
      title: 'Grow with support',
      desc: 'Find mentors, friends and people who genuinely want to see you succeed.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Become a member',
      desc: 'Create your account and become part of the Royal Youth Community.',
    },
    {
      number: '02',
      title: 'Get involved',
      desc: 'Discover events, programs, projects and opportunities that interest you.',
    },
    {
      number: '03',
      title: 'Make an impact',
      desc: 'Develop your skills, take responsibility and create meaningful change.',
    },
  ];

  return (
    <main className="bg-slate-950 text-white overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 px-5 sm:px-8 lg:px-12">
        
        {/* Subtle background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-400/[0.06] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/[0.04] blur-[100px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 xl:gap-24 items-center">

            {/* Hero copy */}
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.07] px-4 py-2 mb-7">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-medium tracking-wide text-amber-300">
                  ROYAL YOUTH COMMUNITY
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-bold tracking-tight leading-[1.02] mb-7">
                Young people.
                <br />
                <span className="text-amber-400">Real potential.</span>
                <br />
                Meaningful impact.
              </h1>

              <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl mb-9">
                A community helping young people discover their potential,
                build valuable skills, connect with others and create a
                meaningful future.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-amber-400/10"
                >
                  Become a member
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-white font-semibold transition-all"
                >
                  Discover our community
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Open to young people
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Learn by doing
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Community driven
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative hidden lg:block">

              <div className="relative max-w-[500px] ml-auto">

                {/* Main panel */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">

                  {/* Abstract visual instead of emoji */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />

                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                        backgroundSize: '45px 45px',
                      }}
                    />
                  </div>

                  <div className="relative h-full p-8 xl:p-10 flex flex-col justify-between">

                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-amber-400 flex items-center justify-center">
                        <span className="text-slate-950 text-xl font-black">
                          R
                        </span>
                      </div>

                      <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Est. Community
                      </span>
                    </div>

                    <div>
                      <p className="text-sm text-amber-400 font-medium mb-3">
                        GROW • CONNECT • LEAD
                      </p>

                      <h2 className="text-4xl xl:text-5xl font-bold tracking-tight leading-tight mb-5">
                        Your future
                        <br />
                        starts with
                        <br />
                        <span className="text-amber-400">what you do today.</span>
                      </h2>

                      <p className="text-slate-400 leading-relaxed max-w-sm">
                        Build skills. Meet people. Take initiative.
                        Become the person you want to be.
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold">2,500+</div>
                          <div className="text-xs text-slate-500 mt-1">
                            Community members
                          </div>
                        </div>

                        <div className="flex -space-x-2">
                          {['A', 'B', 'S', 'K'].map((letter) => (
                            <div
                              key={letter}
                              className="w-9 h-9 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-semibold"
                            >
                              {letter}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating information card */}
                <div className="absolute -left-10 bottom-12 w-52 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-5 shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                    <Users className="w-5 h-5 text-amber-400" />
                  </div>

                  <div className="text-sm font-semibold mb-1">
                    Built together
                  </div>

                  <p className="text-xs leading-relaxed text-slate-500">
                    A network where everyone has something valuable to bring.
                  </p>
                </div>

                {/* Top floating card */}
                <div className="absolute -right-6 top-16 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl px-5 py-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-400/10 flex items-center justify-center">
                      <Rocket className="w-4 h-4 text-amber-400" />
                    </div>

                    <div>
                      <div className="text-sm font-semibold">
                        Ideas → Action
                      </div>
                      <div className="text-xs text-slate-500">
                        Real projects
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / MISSION
      ========================================================= */}
      <section className="border-y border-white/[0.06] bg-white/[0.015] py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-20 items-start">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Why we exist
              </p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
                We believe every young person has something valuable to offer.
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed">
                Royal Youth Community exists to create an environment where
                young people can learn, connect, experiment, lead and discover
                what they are capable of.
              </p>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                Learn about our mission
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4">
              What you can do here
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              More than a community.
              <br />
              <span className="text-slate-500">A place to grow.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Everything is designed around one goal: helping young people
              move from potential to progress.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] rounded-2xl overflow-hidden border border-white/[0.08]">

            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-slate-950 p-7 lg:p-8 hover:bg-slate-900 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-amber-400/10 flex items-center justify-center mb-6 group-hover:bg-amber-400/15 transition-colors">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>

                <h3 className="text-lg font-semibold mb-3">
                  {title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-white/[0.02] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400 mb-4">
              Getting started
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Your journey starts here.
            </h2>

            <p className="text-slate-500">
              No complicated process. Just show up, get involved and keep
              growing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-14">

            {steps.map(({ number, title, desc }, index) => (
              <div key={number} className="relative">

                <div className="flex items-center gap-4 mb-7">
                  <span className="text-sm font-bold text-amber-400">
                    {number}
                  </span>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block h-px flex-1 bg-white/10" />
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                  {desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY STATS
      ========================================================= */}
      <section className="py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">

          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] to-transparent p-8 sm:p-12">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-amber-400">
                  2,500+
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Members
                </p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-amber-400">
                  150+
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Events
                </p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-amber-400">
                  40+
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Projects
                </p>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-amber-400">
                  20+
                </div>
                <p className="text-sm text-slate-500 mt-2">
                  Mentors
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIAL
      ========================================================= */}
      <section className="py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">

          <Quote className="w-10 h-10 text-amber-400/40 mx-auto mb-8" />

          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight">
            “I joined looking for opportunities, but what I found was a
            community of people who challenged me to become better.”
          </blockquote>

          <div className="mt-8">
            <div className="font-semibold">Amina K.</div>
            <div className="text-sm text-slate-500 mt-1">
              Royal Youth Community member
            </div>
          </div>

          <div className="flex justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 text-amber-400 fill-amber-400"
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24">

        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/[0.12] via-white/[0.03] to-transparent">

          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/[0.08] blur-3xl rounded-full pointer-events-none" />

          <div className="relative px-7 py-16 sm:px-12 sm:py-20 text-center">

            <div className="w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center mx-auto mb-7">
              <ShieldCheck className="w-6 h-6 text-slate-950" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
              There is a place for you here.
            </h2>

            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-9">
              Meet people, discover opportunities, build something meaningful
              and become part of a generation choosing to make a difference.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">

              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold transition-all"
              >
                Join the community
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] font-semibold transition-all"
              >
                Talk to us
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default HomePage;