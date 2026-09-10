import Layout from '../../Components/Layout/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <section className="bg-primary-950 px-4 py-20 text-white md:px-8">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-yellow-500/10 backdrop-blur-sm">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 to-orange-400 text-3xl text-primary-900 shadow-lg shadow-yellow-400/20">
              👑
            </div>
            <h1 className="text-3xl font-black text-white">Welcome back</h1>
            <p className="mt-2 text-white/60">Access your community dashboard</p>
          </div>
          <div className="space-y-4 text-left">
            <div className="rounded-2xl border border-white/10 bg-primary-900/60 px-4 py-3 text-white/60">
              Member ID
            </div>
            <div className="rounded-2xl border border-white/10 bg-primary-900/60 px-4 py-3 text-white/60">
              Password
            </div>
            <button className="w-full rounded-full bg-linear-to-r from-yellow-400 to-orange-400 px-6 py-3 font-semibold text-primary-900 shadow-lg shadow-yellow-400/20 transition-transform duration-300 hover:-translate-y-0.5">
              Login
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LoginPage;
