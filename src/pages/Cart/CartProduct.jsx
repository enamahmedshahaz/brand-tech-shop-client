
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const CartProduct = ({ cartProduct }) => {

    const { _id, name, brandName, type, price, image, quantity } = cartProduct;

    const handleDeleteCartItem = (_id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "This item will be removed from cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //---------call delete api-----------//
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Removed!',
                                'The item is removed.',
                                'success'
                            );
                        }
                    });
                //---------end of call delete api-----------//
            }
        })
    };
    return (
        <div>
            <div className="bg-white w-3/4 rounded-lg shadow-md mb-5 mx-auto">
                <div className="flex gap-5 items-center p-4">
                    <div>
                        <img alt="product-image" className="w-full rounded-lg sm:w-40" src={image} />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-gray-900">{name}</h2>
                        <p className="mt-1 text-xs text-gray-700">{type} made by {brandName}</p>
                    </div>
                    <div>
                        <p className='text-sm'>TK {price}</p>
                    </div>
                    <div>
                        <p className='text-sm'>x {quantity}=</p>
                    </div>
                    <div>
                        <p className='text-sm'> TK {parseFloat(price) * quantity}
                        </p>
                    </div>
                    <div>
                        <button onClick={() => handleDeleteCartItem(_id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Remove item
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CartProduct;

CartProduct.propTypes = {
    cartProduct: PropTypes.object
}