import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, brandName, type, price, image, rating } = product;

    return (
        <div className="card w-72 shadow-lg dark:border">
            <figure className="px-10 pt-10">
                <img src={image} alt={`image of ${name}`} className="w-auto rounded-lg border border-gray-200" />
            </figure>

            <div className="card-body items-center text-center flex">
                <h2 className="card-title">{name}</h2>
                <p>Rating: {rating}/5</p>
                <p>Category: {type}</p>
                <p>Brand: {brandName}</p>
                <p>Price: {price} Tk</p>
                
                <div className="card-actions">
                    <div className='flex flex-col md:flex-row gap-2 justify-center'>
                        <Link to={`/products/${_id}`}>
                            <button className="btn btn-primary normal-case">View Details</button>
                        </Link>
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-secondary normal-case">Update Product</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
}