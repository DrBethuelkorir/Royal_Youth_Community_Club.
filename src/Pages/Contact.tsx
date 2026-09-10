// ./src/pages/ContactPage.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    // Temporary simulation.
    // Replace this with your real backend endpoint later.
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@royalyouth.org',
      href: 'mailto:hello@royalyouth.org',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 700 000 000',
      href: 'tel:+254700000000',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden pt-36 pb-20 px-5 sm:px-8 lg:px-12">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-400/[0.05] rounded-full blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

        </div>

        <div className="relative max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/[0.05] text-amber-400 text-xs font-semibold uppercase tracking-[0.18em] mb-7">
            Get in touch
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Let's start a
            <span className="block text-amber-400 mt-2">
              conversation.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
            Have a question, an idea, or an opportunity you'd like to
            discuss? We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* =================================================
                LEFT SIDE
            ================================================= */}
            <div className="lg:col-span-2">

              <div className="mb-8">

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
                  Contact information
                </p>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  We'd love to hear from you.
                </h2>

                <p className="text-slate-500 mt-4 leading-relaxed">
                  Whether you're interested in becoming a member, partnering
                  with us, volunteering, or simply learning more about the
                  community, feel free to reach out.
                </p>

              </div>

              {/* Contact cards */}
              <div className="space-y-3">

                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div
                    key={label}
                    className="
                      group
                      p-5
                      rounded-2xl
                      border border-white/[0.08]
                      bg-white/[0.025]
                      hover:bg-white/[0.045]
                      hover:border-amber-400/20
                      transition-all
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div className="w-11 h-11 rounded-xl bg-amber-400/[0.08] border border-amber-400/10 flex items-center justify-center shrink-0 group-hover:bg-amber-400/[0.12] transition-colors">
                        <Icon className="w-5 h-5 text-amber-400" />
                      </div>

                      <div className="min-w-0">

                        <p className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold mb-1">
                          {label}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-slate-300 hover:text-amber-400 transition-colors break-words"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-300">
                            {value}
                          </p>
                        )}

                      </div>

                    </div>

                  </div>
                ))}

              </div>

              {/* Office hours */}
              <div className="mt-3 p-5 rounded-2xl border border-white/[0.08] bg-white/[0.025]">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-slate-400" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-slate-600 font-semibold">
                      Availability
                    </p>

                    <p className="text-sm font-medium text-slate-300 mt-1">
                      Office hours
                    </p>
                  </div>

                </div>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Monday – Friday
                    </span>

                    <span className="text-slate-300">
                      9:00 – 18:00
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Saturday
                    </span>

                    <span className="text-slate-300">
                      10:00 – 14:00
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Sunday
                    </span>

                    <span className="text-slate-600">
                      Closed
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}
            <div className="lg:col-span-3">

              <form
                onSubmit={handleSubmit}
                className="
                  rounded-3xl
                  border border-white/[0.08]
                  bg-white/[0.025]
                  p-6 sm:p-8 lg:p-10
                "
              >

                {/* Form heading */}
                <div className="mb-8">

                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Send us a message
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">
                    Fill in the form and we'll get back to you as soon as
                    possible.
                  </p>

                </div>

                {/* Success */}
                {isSubmitted && (
                  <div className="flex items-start gap-3 p-4 mb-6 rounded-xl bg-emerald-500/[0.07] border border-emerald-500/20">

                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />

                    <div>
                      <p className="text-sm font-medium text-emerald-300">
                        Message sent successfully
                      </p>

                      <p className="text-xs text-emerald-400/70 mt-1">
                        Thank you for reaching out. We'll get back to you
                        soon.
                      </p>
                    </div>

                  </div>
                )}

                <div className="space-y-5">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>

                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Full name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="
                          w-full
                          px-4 py-3.5
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

                    <div>

                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        Email address
                      </label>

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
                          px-4 py-3.5
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

                  {/* Subject */}
                  <div>

                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to talk about?"
                      className="
                        w-full
                        px-4 py-3.5
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

                  {/* Message */}
                  <div>

                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="
                        w-full
                        px-4 py-3.5
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
                        resize-none
                      "
                    />

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      w-full sm:w-auto
                      px-7
                      py-3.5
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

                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-slate-950/30 border-t-slate-950 animate-spin" />

                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />

                        Send message

                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24">

        <div className="max-w-4xl mx-auto">

          <div className="relative overflow-hidden rounded-3xl border border-amber-400/15 bg-amber-400/[0.04] p-8 sm:p-12 text-center">

            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-400/[0.06] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400 mb-3">
                Want to join us?
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Become part of the community.
              </h2>

              <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
                Connect with other young people, access opportunities,
                develop your skills and contribute to meaningful projects.
              </p>

              <Link
                to="/register"
                className="group inline-flex items-center gap-2 mt-7 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all"
              >
                Create your account

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ContactPage;