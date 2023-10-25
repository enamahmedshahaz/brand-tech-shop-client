import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Brand = ({ brand }) => {

    const { brand_name, brand_image } = brand;

    return (
        <Link to={`/products/brands/${brand_name}`}>
            <div className='p-1 hover:cursor-pointer hover:border-2 rounded-md'>
                <div>
                    <img className='w-full mx-auto rounded-md' src={brand_image} alt={`logo of ${brand_name}`} />
                </div>
                <div className='text-center'>
                    <h3 className="font-semibold text-3xl text-gray-400">{brand_name}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Brand;
Brand.propTypes = {
    brand: PropTypes.object
}