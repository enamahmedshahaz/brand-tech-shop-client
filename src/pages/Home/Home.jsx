import { useLoaderData } from "react-router-dom";
import Brands from "./Brands";
import Banner from "../Shared/Banner";
import Testimonial from "./Testimonial";
import FeaturesList from "./FeaturesList";



const Home = () => {

    const brands = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Testimonial></Testimonial>
            <FeaturesList></FeaturesList>
        </div>
    );
};

export default Home;