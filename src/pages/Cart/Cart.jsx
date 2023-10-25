import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const Cart = () => {

    const loadedCartProducts = useLoaderData();
    let subTotal = 0;
    const shippingCost = 250;

    const [cartProducts, setCartProducts] = useState(loadedCartProducts);

    return (
        <div>
            <div className="py-4 text-center mb-5">
                <h2 className="font-medium text-6xl text-gray-600">Cart Items {cartProducts.length > 0 && <p className="inline-block">: {cartProducts.length}</p>} </h2>
            </div>

            <div className="p-10">

                {cartProducts.length > 0 ?
                    <>
                        {
                            cartProducts?.map(aProduct => <CartProduct
                                key={aProduct._id}
                                cartProduct={aProduct}
                                cartProducts={cartProducts}
                                setCartProducts={setCartProducts} >
                            </CartProduct>)
                        }

                        {
                            cartProducts?.map(aProduct => {
                                subTotal = subTotal + (aProduct.quantity * aProduct.price);
                            })
                        }

                        <div className="mt-6 mx-auto rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-500">Subtotal</p>
                                <p className="text-gray-500">Tk {subTotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-500">Shipping</p>
                                <p className="text-gray-500">Tk {shippingCost}</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">Tk {shippingCost + subTotal}</p>
                                    <p className="text-sm text-gray-500">including VAT</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </>
                    :
                    <div className="py-10 w-2/3 rounded-lg mx-auto mt-5 shadow-md shadow-red-400">
                        <p className="text-6xl text-red-600 font-medium text-center">
                            Sorry! Your cart is empty!</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;