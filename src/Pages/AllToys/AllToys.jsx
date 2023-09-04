import { useEffect, useState } from "react";
import AllToyCard from "./AllToyCard";



const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-market-server-1hmfi9q3h-zrakib-dev.vercel.app/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [toys])
    return (
        <div className="lg:mx-20 py-20 mx-2">

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
                            toys.map(toy => <AllToyCard key={toy._id} toy={toy} />)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllToys;