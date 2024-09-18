import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";


const Cart = () => {
    const [cart] = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <SectionTitle subHeading={"---My Cart---"} heading={"wanna add more?"}></SectionTitle>
            <div className="flex justify-evenly">
                <h3 className="text-3xl">TOTAL ORDERS:{cart.length}</h3>
                <h3 className="text-3xl">TOTAL PRICE:{totalPrice}</h3>
                <h3 className="text-3xl">Pay</h3>
            </div>
            {/* table */}

            <div className="overflow-x-auto mt-5 w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>
                            #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item,index)=>
                                <tr key={item._id}>
                                    <th>
                        {index+1 }
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image} />
                                                </div>
                                            </div>
                                            </div>
                                    </td>
                                    <td>
                                    <div className="font-bold">{item.name}</div>
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-lg"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;