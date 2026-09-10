import Layout from '../../Components/Layout/Layout';
import Features from '../../Components/Sections/Features';
import CTA from '../../Components/Sections/CTA';
import Events from '../../Components/Sections/Events';
import Hero from '../../Components/Sections/Heros';
import News from '../../Components/Sections/News';
import Partners from '../../Components/Sections/Partners';
import Structure from '../../Components/Sections/Structure';
import Testimonials from '../../Components/Sections/Testimonials';
import About from '../../Components/Sections/About';

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Features />
      <Structure />
      <Events />
      <Testimonials />
      <News />
      <CTA />
      <Partners />
    </Layout>
  );
};

export default HomePage;
