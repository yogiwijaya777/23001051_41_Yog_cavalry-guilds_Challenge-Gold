import '../css/Home.css';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';

function Home() {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
    </div>
  );
}

export default Home;
