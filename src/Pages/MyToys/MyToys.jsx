import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
    const { cart } = useContext(AuthContext)
    // const { name, price, picture, category, _id } = cart;

    const totalPrice = cart.reduce((sum, cart) => sum + cart.price, 0)

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-market-server-1hmfi9q3h-zrakib-dev.vercel.app/carts/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledge) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="container mx-auto">
            <div className="flex mx-20 justify-between">
                <h2>Total Quantity: {cart.length}</h2>
                <h2>Total Price: {totalPrice}</h2>
            </div>

            <div className="mx-20 my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>Toy</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, index) => <>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.picture} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        ${item.price}

                                    </td>
                                    <td>{item.category}</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="link text-red-500">Delete</button>
                                    </th>
                                </tr>
                            </>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;