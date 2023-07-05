import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Offer from "../Offer/Offer";
import Toys from "../Toys/Toys";
import UpcomingToys from "../UpcomingToys/UpcomingToys";

const Home = () => {
  return (
    <div>
      <Banner />
      <Gallery />
      <Toys />
      <UpcomingToys />
      <Offer/>
    </div>
  );
};

export default Home;
