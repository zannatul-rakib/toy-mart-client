import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { Link } from "react-router-dom";

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 12)));
  }, [toys]);
  return (
    <div className="lg:mx-20 py-20 mx-2">
      <div className="text-center mb-10">
        <h2 className="text-primary text-xl lg:text-3xl font-semibold lg:font-bold mb-2">
          Our Latest Toys
        </h2>
        <p>You Love this toys. This toy is very beautiful</p>
      </div>

      <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/all-toys" className="btn btn-primary">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default Toys;
