import "../css/Home.css";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Services from "../components/Services";

function Home() {
  return (
    <div>
      <title>Cavalry : Home</title>

      <Carousel />
      <About />
      <Services />
    </div>
  );
}

export default Home;
