import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Product = ({ product }) => {

    const { _id, name, brandName, type, price, image, rating } = product;

    return (

        <div className="card w-96 bg-gray-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt={`image of ${name}`} className="w-3/4 rounded-xl border-2 border-indigo-500" />
            </figure>
            <div className="card-body items-center text-center flex flex-1">
                <h2 className="card-title">{name}</h2>
                <p>Rating: {rating}/5</p>
                <p>Category: {type}, Brand: {brandName}</p>
                <p>Price: {price} Tk</p>
                <div className="card-actions">

                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-primary normal-case">View Details</button>
                    </Link>

                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-secondary normal-case">Update Product</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;

Product.propTypes = {
    product: PropTypes.object
}