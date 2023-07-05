import bannerImage from '../../../assets/toyBanner.jpg'


const Banner = () => {
  return (
    <div
      className="hero min-h-screen my-20"
      style={{
        backgroundImage:
          `url(${bannerImage})`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Toy Mart</h1>
          <p className="mb-5">
            We Provide Best Toy In this world
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
