import addToy from "../../assets/AddToy.svg"

const AddToy = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const image = form.imgURL.value;

        const item = { product_name: name, price, picture: image, category }
        fetch('https://toy-market-server-1hmfi9q3h-zrakib-dev.vercel.app/toys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
            })

    }
    return (
        <div className="container mx-auto">
            <h2 className="text-center text-2xl font-semibold">Add New Toys</h2>
            <div className="mx-20 border my-20 px-20 py-20 grid lg:grid-cols-2">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text-alt">Toy Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Toy Name" className="input input-bordered input-sm w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text-alt">Toy Name</span>
                            </label>
                            <input type="number" name="price" placeholder="Price" className="input input-bordered input-sm w-full max-w-xs" />

                        </div>
                    </div>
                    <div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text-alt">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Category" className="input input-bordered input-sm w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text-alt">Image URL</span>
                            </label>
                            <input type="text" name="imgURL" placeholder="Image URL" className="input input-bordered input-sm w-full max-w-xs" />

                        </div>
                    </div>
                    <div className="form-control w-full max-w-xs my-5">
                        <button className="btn btn-success">Add Toy</button>
                    </div>

                </form>
                <div>
                    <img src={addToy} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AddToy;