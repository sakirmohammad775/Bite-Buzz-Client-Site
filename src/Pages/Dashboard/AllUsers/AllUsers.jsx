import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Fa42Group } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    //using tanstack query to fetch all data
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleDelete=()=>{
        
    }
    return (
        <div>
            <div className='flex justify-evenly my-4 mb-8'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users:{users.length}</h2>
            </div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=><tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                               <td><Fa42Group></Fa42Group></td>
                               <td>
                               <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg"><FaTrashAlt className="text-red-500"></FaTrashAlt></button>
                               </td>
                            </tr>)
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;