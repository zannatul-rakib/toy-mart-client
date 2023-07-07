import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";


const AllToyCard = ({toy}) => {

    const { product_name, price, rating, picture, category, _id } = toy;

    const { handleCart } = useContext(AuthContext);

    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden group border">
      <figure className="px-5 pt-5">
        <img src={picture} alt="Toy picture" className="rounded-xl h-40" />
        <div className="absolute top-10 right-5 translate-x-12 transition-all group-hover:translate-x-0  z-10">
          <span onClick={()=>handleCart(_id)} title="ADD TO CART" className="cursor-pointer text-2xl">
            <BsCartPlus />
          </span>
        </div>
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{product_name}</h2>
          <span className="badge badge-primary capitalize">{category}</span>
        </div>
        <div className="flex gap-2 my-3">
          <span>
            <Rating readOnly style={{ width: "100px" }} value={rating}></Rating>
          </span>{" "}
          <span className="badge">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${price}</span>
          <Link to={`/toys/${_id}`}
            className=" font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-secondary hover:bg-primary hover:text-white">
            See Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default AllToyCard;