
import Brand from "./Brand";
import PropTypes from 'prop-types';


const Brands = ({brands}) => {

    return (
        <div className="">
            <div className="py-4 text-center mb-5">
                <h2 className="font-medium text-6xl text-gray-600">Our Brands</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {
                    brands.map(brand => <Brand key={brand.brand_id} brand={brand}></Brand>)
                }
            </div>

        </div>
    );
};

export default Brands;

Brands.propTypes = {
    brands: PropTypes.array
}