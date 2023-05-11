
const AddCoffee = () => {
    return (
        <div>
            <h2 className="text-center">This Is Add Coffee</h2>
            <form>
                <div className="flex">
                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Name" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}


                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Chef" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Supplier" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Taste" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Category" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Coffee Details" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}

                    {/* ------------Input Fields-------------- */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter Photo URL" className="input input-bordered" />
                        </label>
                    </div>
                    {/* ------------------------------------- */}




                </div>
            </form>


        </div>
    );
};

export default AddCoffee;