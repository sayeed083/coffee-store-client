import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddtoCoffee = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // send data from client side to backend server side
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-center text-3xl font-bold">This Is Add Coffee</h2>
            <form onSubmit={handleAddtoCoffee}>
                <div className="lg:flex gap-8 mb-8">
                    {/* ------------Input Fields-------------- */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}


                    {/* ------------Input Fields-------------- */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="chef" placeholder="Enter Coffee Chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}
                </div>
                <div className="lg:flex gap-8 mb-8">
                    {/* ------------Input Fields-------------- */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Enter Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}
                </div>
                <div className="lg:flex gap-8 mb-8">
                    {/* ------------Input Fields-------------- */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter Coffee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                </div>
                <div className="lg:flex gap-8 mb-8">

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control  w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-warning" />
            </form>


        </div>
    );
};

export default AddCoffee;





