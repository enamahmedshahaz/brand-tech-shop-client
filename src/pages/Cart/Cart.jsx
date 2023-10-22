import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";

const Cart = () => {

    const cartProducts = useLoaderData();
    let subTotal = 0;
    const shippingCost = 250;

    return (
        <div>
            <div className="bg-white py-4 text-center mb-5">
                <h2 className="font-medium text-3xl text-teal-500">Cart Items {cartProducts.length > 0 && <p className="inline-block">: {cartProducts.length}</p>} </h2>
            </div>
            
            <div className="p-10">
                {cartProducts.length > 0 ?
                    <>
                        {
                            cartProducts?.map(aProduct => <CartProduct
                                key={aProduct._id}
                                cartProduct={aProduct} >
                            </CartProduct>)
                        }

                        {
                            cartProducts?.map(aProduct => {
                                subTotal = subTotal + (aProduct.quantity * aProduct.price);
                            })
                        }

                        <div className="mt-6 mx-auto rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">Tk {subTotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">Tk {shippingCost}</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">Tk {shippingCost + subTotal}</p>
                                    <p className="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </>
                    :

                    <div className="bg-white p-4 rounded-lg w-1/2 mx-auto shadow-sm">
                        <p className="text-2xl text-red-500 font-semibold text-center">
                            Sorry! Your cart is empty!
                        </p>
                    </div>
                }
            </div>
        </div>
    );
};

export default Cart;