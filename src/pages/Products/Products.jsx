import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData();

    return (
        <div className="h-screen py-5 my-auto">
            {products.length > 0 ?
                <>
                    <div className="flex gap-3 flex-wrap justify-center items-center">
                        {
                            products.map(aProduct => <Product key={aProduct._id} product={aProduct}></Product>)
                        }
                    </div>
                </>
                :
                <div className="bg-white p-4 rounded-lg w-1/2 mx-auto shadow-sm">
                    <p className="text-2xl text-red-500 font-semibold text-center">
                        Sorry! No Items here!
                    </p>
                </div>
            }
        </div >
    );
};

export default Products;