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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/brands.json'),
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
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/products/brands/:brandName",
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/brands/${params.brandName}`)
            },
            {
                path: "/products/:id",
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
            },
            {
                path: "/update/:id",
                element: <UpdateProduct />,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
            },
            {
                path: "/cart",
                element: <Cart></Cart>,
                loader: () => fetch('http://localhost:5000/cart'),
            },
        ],
    },
]);

export default router;