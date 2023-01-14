import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeItemFromCart, deleteBookFromCart } from "../../store/slices/cart";
import Swal from 'sweetalert2';

function Cart() {

    const cart = useSelector(state => state.cart.cart);
    const dispatch = useDispatch();

    const handleClick = (book, from) => {
        if (book.quantity === 1 && from === 'remove') return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You can not remove the last item from the cart!',
            footer: '<p>Try delete whit the X button</p>'
        });
        from === 'add' ? dispatch(addToCart(book)) : from === 'remove' ? dispatch(removeItemFromCart(book)) : dispatch(deleteBookFromCart(book));
    }

    console.log(cart);

    return (
        <>
            {
                cart.length > 0 ? cart.map((book) => {
                    return (
                        <div key={book.id} className="card card-side bg-base-100 shadow-xl m-10">
                            <button className="btn btn-square btn-sm mt-2 ml-2" onClick={() => handleClick(book, 'delete')}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <figure className="bg-transparent border-transparent hover:bg-transparent hover:border-transparent"><img src={book.imagelink} alt={book.title} /></figure>

                            <div className="card-body">
                                <button className="btn btn-primary ">{book.title}</button>
                                <h2 className="card-title">$ {book.price} c/u</h2>
                                <p>Author: {book.authors}</p>

                                <div className="card-actions flex justify-end">
                                    <button className="btn btn-primary" onClick={() => handleClick(book, 'remove')}>-</button>
                                    <button className="btn no-animation cursor-default btn-active">{book.quantity}</button>
                                    <button className="btn btn-primary" onClick={() => handleClick(book, 'add')}>+</button>
                                </div>
                            </div>
                        </div>
                    )
                })
                    : <h1 className="flex justify-center items-center text-center text-5xl">Your cart is empty</h1>
            }
        </>
    );
};
export default Cart;