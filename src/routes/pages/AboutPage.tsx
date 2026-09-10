import Layout from '../../Components/Layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-primary-950 text-white">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-20 md:px-8">
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300">
            <span>👑</span>
            Our Mission
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Building a stronger,
            <span className="block bg-linear-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              united community
            </span>
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
            The Royal Youth Community is a vibrant network of young leaders, creatives, changemakers,
            and volunteers committed to personal growth, shared responsibility, and meaningful impact.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
