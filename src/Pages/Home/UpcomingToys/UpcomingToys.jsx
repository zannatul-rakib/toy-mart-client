import { useEffect, useState } from "react";
import ToyCard from "../Toys/ToyCard";


const UpcomingToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    },[toys])
    return (
        <div className="lg:mx-20 py-20 mx-2">
        <div className="text-center mb-10">
          <h2 className="text-primary text-xl lg:text-3xl font-semibold lg:font-bold mb-2">Upcoming Toys</h2>
          <p>You Love this toys. This toy is very beautiful</p>
      </div>
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        toys.map(toy => <ToyCard key={ toy._id} toy={toy} />)
                    }
                </div>
            </div>
    );
};

export default UpcomingToys;