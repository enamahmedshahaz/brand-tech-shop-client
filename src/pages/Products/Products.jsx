import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData();

    return (
        <div>
            This is Brand Products page
            <h2>Item number: {products.length}</h2>

            <div className="flex gap-3 flex-wrap justify-center">
                {
                    products.map(aProduct => <Product key={aProduct._id} product={aProduct}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;