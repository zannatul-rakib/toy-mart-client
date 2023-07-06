import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";

const ToyDetails = () => {
    const toy = useLoaderData();
    const { product_name, price, rating, picture, category } = toy;

    const [count, setCount] = useState(1);

    return (
        <div className="lg:mx-20 mx-2 my-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div>
                   <img className="w-[400px]" src={picture} alt="" />
                </div>
                <div className="border mx-16 px-20 py-10 shadow-xl">
                    <h2 className="text-3xl text-center text-primary font-bold mb-10">{product_name}</h2>
                    <div className="flex gap-2 my-3 items-center">
          <span>
            <Rating readOnly style={{ width: "200px" }} value={rating}></Rating>
          </span>{" "}
          <span>{rating}</span>
        </div>
                    <p className=" capitalize text-sm font-normal flex items-center gap-2">Category: <span className="text-xl text-primary font-semibold my-3">{category}</span></p>
                    <p className="my-4 text-2xl font-semibold fo">Price: ${price}</p>
                    <div>
                    <p >Quantity</p>
                        <div className="grid w-[200px] grid-cols-3 mb-5 mt-2 relative">
                            <span onClick={()=> setCount(count + 1)} className="p-3 text-md cursor-pointer border text-center ">+</span>
                            
                                <input type="text" value={count} className="focus:outline-none bg-transparent border p-3 text-center text-md" />
                            
                            <span onClick={() => {
                                if (count < 1) {
                                    return
                                }
                                else {
                                    setCount(count - 1)
                                }
                            }} className="p-3 text-md cursor-pointer border text-center">-</span>
                        </div>
                        <button className="btn w-full rounded-sm bg-primary">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;