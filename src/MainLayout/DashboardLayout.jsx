import React from 'react';
import { FaAd, FaBook, FaHome, FaList, FaPaypal, FaShoppingCart, FaUtensilSpoon, FaVoicemail } from 'react-icons/fa';
import { FaCartShopping, FaShop, FaTowerObservation } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const DashboardLayout = () => {
    const [cart] = useCart()
    //Todo:get isAdmin value from the database
    const isAdmin = true
    return (
        <div className="max-w-screen-xl mx-auto flex">
            {/* dashboard side bar */}
            <div className=' w-64 min-h-screen bg-orange-400 text-black'>
                <ul className=' fixed menu p-4'>
                    {
                       isAdmin?<> 
                        <li><NavLink to='/dashboard/adminHome'><FaHome></FaHome>Admin Home</NavLink></li>
                       <li><NavLink to='/dashboard/addItems'><FaUtensilSpoon></FaUtensilSpoon>Add Items</NavLink></li>
                       <li><NavLink to='/dashboard/manageItems'><FaList></FaList>Manage Items</NavLink></li>
                       <li><NavLink to='/dashboard/bookings'><FaBook></FaBook> Manage Bookings</NavLink></li>
                       </>
                       :
                       <>
                        <li><NavLink to='/dashboard/cart'><FaHome></FaHome>User Home</NavLink></li>
                       <li><NavLink to='/dashboard/reservation'><FaTowerObservation></FaTowerObservation>Reservation</NavLink></li>
                       <li><NavLink to='/dashboard/cart'><FaCartShopping></FaCartShopping> My Cart ({cart.length})</NavLink></li>
                       <li><NavLink to='/dashboard/payment'><FaPaypal></FaPaypal> Payment History</NavLink></li>
                       <li><NavLink to='/dashboard/review'><FaAd></FaAd> Add a Review</NavLink></li>
                       <li><NavLink to='/dashboard/bookings'><FaList></FaList> My Bookings</NavLink></li>
                       <li><NavLink to='/dashboard/allUsers'><FaList></FaList> All Users</NavLink></li></>
                    }

                    {/* shared nav links */}
                    <div className="divider "></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/menu'><FaList></FaList> Menu</NavLink></li>
                    <li><NavLink to='/order'><FaShop></FaShop> Shop</NavLink></li>
                    <li><NavLink to='/Contact'><FaVoicemail></FaVoicemail>Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className='flex-1 px-8 min-h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;