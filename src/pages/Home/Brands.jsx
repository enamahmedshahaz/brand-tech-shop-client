import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";


const Brands = () => {

    const brands = useLoaderData();

    return (

        <div>
            <div className="bg-white py-4 text-center mb-5">
                <h2 className="font-medium text-3xl text-teal-500">Here is our world renowned brands, original products with authentic price</h2>
            </div>

            <div className="flex gap-3 flex-wrap  justify-center">
                {
                    brands.map(brand => <Brand key={brand.brand_id} brand={brand}></Brand>)
                }
            </div>

        </div>
    );
};

export default Brands;