// ./src/pages/About.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Lightbulb,
  Heart,
  Shield,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower young people through financial literacy, leadership development, meaningful opportunities, and active community participation.',
    },
    {
      icon: Lightbulb,
      title: 'Our Vision',
      description:
        'A united generation of confident young leaders creating sustainable solutions and contributing to the growth of their communities.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'Unity, transparency, accountability, innovation, integrity, and service guide how we work and how we treat one another.',
    },
    {
      icon: Shield,
      title: 'Good Governance',
      description:
        'We believe in responsible leadership, fairness, accountability, and structures that give every member an opportunity to participate.',
    },
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Members',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Projects',
    },
    {
      icon: BookOpen,
      value: '100+',
      label: 'Resources',
    },
    {
      icon: TrendingUp,
      value: 'KSH 2M+',
      label: 'Funds Raised',
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden pt-36 pb-24 px-5 sm:px-8 lg:px-12">

        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-400/[0.06] rounded-full blur-[120px]" />

          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] text-amber-400 text-xs font-semibold uppercase tracking-[0.18em] mb-7">
            Who we are
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Building a generation
            <span className="block text-amber-400 mt-2">
              that leads with purpose.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-7 text-base sm:text-lg text-slate-400 leading-relaxed">
            The Royal Youth Community is a growing self-help community
            focused on youth empowerment, financial growth, leadership,
            and meaningful community development across Kenya.
          </p>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
                About the community
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                More than a group.
                <span className="block text-slate-400">
                  A community with a purpose.
                </span>
              </h2>

              <div className="space-y-5 text-slate-400 leading-relaxed">

                <p>
                  THE ROYAL YOUTH COMMUNITY is a growing self-help group
                  organized into zones and supported by a leadership
                  structure, a constitution, and shared objectives.
                </p>

                <p>
                  We create an environment where young people can learn,
                  connect, develop practical skills, discover opportunities,
                  and contribute to the development of their communities.
                </p>

                <p>
                  Our belief is simple: when young people have the right
                  knowledge, support, relationships, and opportunities,
                  they can become a powerful force for positive change.
                </p>

              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all"
                >
                  Become a member

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-white font-semibold text-sm transition-all"
                >
                  Get in touch
                </Link>

              </div>

            </div>

            {/* Highlight Card */}
            <div className="relative">

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10">

                <div className="flex items-center justify-between mb-10">

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Our foundation
                    </p>

                    <h3 className="text-xl font-semibold mt-2">
                      What brings us together
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-amber-400/[0.08] border border-amber-400/10 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-amber-400" />
                  </div>

                </div>

                <div className="space-y-5">

                  {[
                    'Youth empowerment',
                    'Financial growth',
                    'Leadership development',
                    'Community service',
                    'Learning and collaboration',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />

                      <span className="text-sm text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="border-y border-white/[0.08] bg-white/[0.02]">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="text-center"
                >
                  <Icon className="w-5 h-5 text-amber-400 mx-auto mb-4" />

                  <div className="text-3xl sm:text-4xl font-bold tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-sm text-slate-500 mt-2">
                    {stat.label}
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          MISSION / VISION / VALUES
      ===================================================== */}
      <section className="py-24 px-5 sm:px-8 lg:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-14">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
              What we stand for
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3">
              Principles that shape our community.
            </h2>

            <p className="text-slate-500 mt-5 leading-relaxed">
              Everything we do is guided by a commitment to helping young
              people grow while building a stronger and more connected
              community.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    group
                    p-7
                    rounded-2xl
                    border border-white/[0.08]
                    bg-white/[0.025]
                    hover:bg-white/[0.045]
                    hover:border-amber-400/20
                    transition-all duration-300
                  "
                >

                  <div className="w-11 h-11 rounded-xl bg-amber-400/[0.08] border border-amber-400/10 flex items-center justify-center mb-6 group-hover:bg-amber-400/[0.12] transition-colors">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {value.title}
                  </h3>

                  <p className="text-sm text-slate-500 leading-relaxed">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}
      <section className="py-24 px-5 sm:px-8 lg:px-12 bg-white/[0.02] border-y border-white/[0.08]">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
                Our journey
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Growing together,
                <span className="block text-slate-400">
                  one step at a time.
                </span>
              </h2>

              <div className="space-y-5 text-slate-500 leading-relaxed">

                <p>
                  What began as a vision for creating a supportive
                  environment for young people has grown into a community
                  built around shared responsibility and opportunity.
                </p>

                <p>
                  Through projects, events, learning opportunities and
                  partnerships, we continue to create spaces where members
                  can discover their strengths and turn ideas into action.
                </p>

              </div>

            </div>

            {/* Timeline */}
            <div className="space-y-4">

              {[
                {
                  year: '2020',
                  title: 'The beginning',
                  text: 'The Royal Youth Community was founded with a vision for youth empowerment.',
                },
                {
                  year: '8',
                  title: 'Active zones',
                  text: 'Our community expanded into multiple zones to strengthen local participation.',
                },
                {
                  year: '50+',
                  title: 'Events and activities',
                  text: 'Members have participated in events focused on learning, leadership and community.',
                },
                {
                  year: '15+',
                  title: 'Partnerships',
                  text: 'We continue to build relationships that create opportunities for our members.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.025]"
                >

                  <div className="w-14 h-14 rounded-xl bg-amber-400/[0.08] border border-amber-400/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-amber-400">
                      {item.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="py-24 px-5 sm:px-8 lg:px-12">

        <div className="max-w-4xl mx-auto">

          <div className="relative overflow-hidden rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-10 sm:p-14 text-center">

            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/[0.08] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
                The next chapter starts with you
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to be part of something bigger?
              </h2>

              <p className="max-w-xl mx-auto mt-5 text-slate-400 leading-relaxed">
                Join a community of young people learning, connecting,
                building and creating positive change.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all"
                >
                  Join the community

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] text-white font-semibold text-sm transition-all"
                >
                  Contact us
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;