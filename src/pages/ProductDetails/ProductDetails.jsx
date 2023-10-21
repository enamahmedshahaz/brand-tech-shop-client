
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, name, brandName, type, price, image, rating } = product;
    
    return (
        <div>
            Id: {_id}
            Name: {name}
        </div>
    );
};

export default ProductDetails;

