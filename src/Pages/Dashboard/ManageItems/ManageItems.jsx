import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import UseMenu from '../../../Hooks/UseMenu';
import { FaEdit, FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu,loading,refetch] = UseMenu()
    const axiosSecure=useAxiosSecure()
    const handleDeleteItem=(item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res=await axiosSecure.delete(`/menu/${item._id}`)
                // console.log(res.data)
                
                        if (res.data.deletedCount > 0) {
                            //refetch the update the ui
                            refetch()
                            Swal.fire({
                                position:"top-end",
                                icon:"Success",
                                title: `${item.name} has been deleted`,
                                showConfirmButton:false,
                                timer:1500
                            });
                        }
                    
                    
            }
        });
    }
    return (
        <><div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th> Item Image</th>
                                <th> Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>

                                    <td>{index + 1} </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image} />
                                                </div>
                                            </div>
                                        </div></td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                    <Link to={`/dashboard/updateItems/${item._id}`}>
                                    <button className="btn bg-orange-500 btn-sm"><FaEdit className="text-white font-2xl"></FaEdit></button>
                                    </Link>
                                    </td>
                                    <td> <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-sm"><FaTrashAlt className="text-red-500"></FaTrashAlt></button></td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div >
        </>
    );
};

export default ManageItems;