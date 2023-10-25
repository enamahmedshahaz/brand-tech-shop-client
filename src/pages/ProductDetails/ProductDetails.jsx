
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {

    const product = useLoaderData();

    const {_id, name, brandName, type, price, image, rating, description } = product;

    const handleAddToCart = () => {

        fetch("http://localhost:5000/cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),

        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId || data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Added to cart successfully!',
                        text: 'Click OK to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });
    };

    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>

            <div className='w-1/3 border-b-2 md:border-r-2 md:border-b-0 border-neutral-300 flex items-center justify-center'>
                <img src={image} alt={`photo of ${name}`} />
            </div>

            <div className='w-2/3 ml-5 p-4  space-y-4'>
                <h2 className='font-bold text-2xl'>{name} </h2>
                <div className="badge badge-secondary">Rating: {rating} / 5</div>
                <div className='text-sm text-gray-600'>
                    <span className='font-semibold'>{type}</span>
                    <span className='italic'> made by </span>
                    <span className='font-semibold'>{brandName}</span> </div>
                <p className='font-bold text-xl text-amber-900'>TK {price}</p>
                <button onClick={handleAddToCart} className='text-white btn btn-primary normal-case px-5 py-0'>Add to Cart</button>
                <p className='text-gray-600'>{description}</p>
            </div>

        </div>
    );
};

export default ProductDetails;

