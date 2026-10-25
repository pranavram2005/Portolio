import CraftScroll from '../components/site/CraftScroll.jsx';
import Journey from '../components/site/Journey.jsx';
import MetricsBand from '../components/site/MetricsBand.jsx';
import Teasers from '../components/site/Teasers.jsx';
import Hero from '../sections/Hero.jsx';

/**
 * Home.
 *
 * The hero is the original interactive particle-ocean band, kept as-is;
 * everything under it follows the parchment template.
 */
const Home = () => (
  <>
    <Hero />
    <CraftScroll />
    <Journey />
    <MetricsBand />
    <Teasers />
  </>
);

export default Home;
