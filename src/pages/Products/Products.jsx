import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData();

    const {brandName} = useParams();

    return (
        <div className="h-screen py-5 my-auto">

            {products.length > 0 ?
                <>
                    <div className="py-4 text-center border  mb-5 ">
                        <h2 className="font-medium text-6xl text-gray-600"> {brandName}  Products</h2>
                    </div>

                    <div className="flex gap-3 flex-wrap justify-center items-center">
                        {
                            products.map(aProduct => <Product key={aProduct._id} product={aProduct}></Product>)
                        }
                    </div>
                </>
                :
                <div className="py-10 w-2/3 rounded-lg mx-auto mt-5 shadow-md shadow-red-400">
                    <p className="text-6xl text-red-600 font-medium text-center">
                        Sorry! No Items here!
                    </p>
                </div>
            }
        </div >
    );
};

export default Products;