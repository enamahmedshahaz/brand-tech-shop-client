import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Main/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://b8a10-brandshop-server-side-enamahmedshahaz.vercel.app/brands'),
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/add-product",
                element: <PrivateRoutes> <AddProduct></AddProduct> </PrivateRoutes>,
            },
            {
                path: "/products/brands/:brandName",
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-enamahmedshahaz.vercel.app/products/brands/${params.brandName}`)
            },
            {
                path: "/products/:id",
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-enamahmedshahaz.vercel.app/products/${params.id}`),
            },
            {
                path: "/update/:id",
                element: <PrivateRoutes> <UpdateProduct></UpdateProduct> </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://b8a10-brandshop-server-side-enamahmedshahaz.vercel.app/products/${params.id}`),
            },
            {
                path: "/cart",
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>,
                loader: () => fetch('https://b8a10-brandshop-server-side-enamahmedshahaz.vercel.app/cart'),
            },
        ],
    },
]);

export default router;