const MembersPage = () => {
  return (
    <section className="bg-primary-950 px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300">
          <span>👥</span>
          Members Portal
        </div>
        <h1 className="mb-6 text-4xl font-black text-white md:text-5xl">
          Community members and leaders
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Leadership', 'Cabinet members and coordinators'],
            ['Zones', 'Regional representation across the community'],
            ['Programs', 'Events, mentorship, and youth initiatives'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-yellow-400/5">
              <div className="mb-4 text-3xl text-yellow-400">✦</div>
              <h2 className="mb-3 text-2xl font-bold text-white">{title}</h2>
              <p className="text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersPage;