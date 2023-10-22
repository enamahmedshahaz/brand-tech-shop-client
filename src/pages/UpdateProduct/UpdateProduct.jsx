import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateProduct = () => {

    const product = useLoaderData();

    const { _id, name, brandName, type, price, image, rating, description } = product;

    const handleUpdateProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatingProduct = { name, brandName, type, price, image, rating, description }

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatingProduct),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: 'Update Success!',
                        text: 'Click OK to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    form.reset();
                }
            });
    }

    return (

        <div>
            <div className="bg-white py-4 text-center mb-5">
                <h2 className="font-medium text-3xl text-teal-500">Update Product Information</h2>
            </div>

            <div>
                <form onSubmit={handleUpdateProduct} className="w-full px-20">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter product name" className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brandName" defaultValue={brandName} placeholder="Enter brand name of the product" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <input type="text" defaultValue={type} name="type" placeholder="Enter product type (phone/computer/headphone)" className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={price} name="price" placeholder="Enter product price" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" defaultValue={image} name="image" placeholder="Enter image url of the product" className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" defaultValue={rating} name="rating" placeholder="Enter rating for the product (out of 5)" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name="description" defaultValue={description} className="textarea textarea-bordered" placeholder="Enter short description of the product" required></textarea>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input className="text-white text-xl btn btn-primary normal-case bg-orange-300"
                            type="submit"
                            value="Update Product" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;