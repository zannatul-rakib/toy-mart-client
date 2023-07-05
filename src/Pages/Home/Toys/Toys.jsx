import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";


const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    },[toys])
    return (
        <div className="lg:mx-20 py-20 mx-2">
            <div className="text-center mb-10">
              <h2 className="text-primary text-xl lg:text-3xl font-semibold lg:font-bold mb-2">Our Latest Toys</h2>
              <p>You Love this toys. This toy is very beautiful</p>
          </div>
            <div className="flex">
                <div className="hidden lg:block lg:w-[20%]">
                    <div className="mr-5 p-5 bg-white rounded-md">
                        <h2 className="text-center mb-3 text-xl font-semibold">Toys Category</h2>
                    <ul className="grid gap-2">
                        <li className="cursor-pointer list-none w-1/2 active">All</li>
                        <li className="cursor-pointer w-1/2">Marvel</li>
                        <li className="cursor-pointer w-1/2">DC</li>
                        <li className="cursor-pointer w-1/2">Star War</li>
                    </ul>
                    </div>
                </div>
                <div className="lg:w-[80%] w-full">
                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            toys.map(toy => <ToyCard key={ toy._id} toy={toy} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;