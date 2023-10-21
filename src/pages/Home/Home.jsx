import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";


const Home = () => {

    const brands = useLoaderData();
    
    return (
        <div>
            Banner section
            <Brands brands={brands}></Brands>
        </div>
    );
};

export default Home;