import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

//set up the imgbb  api from the website and set the VITE _API_KEY
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure=useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        if (res.data.success) {
            //now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,

            }
            //
            const menuRes=await  axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data)
            if(menuRes.data.insertedId){
                //show success popup
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
            console.log('with image url',res.data)
        }
        return (
            <div>
                <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Recipe Name</span>
                            </label>
                            <input type="text" placeholder="Recipe Name"
                                {...register('name', { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div className='grid grid-cols-2 w-full'>
                            <div>
                                {/* Category */}
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select defaultValue="default" {...register("category")} className="select select-bordered w-full" >
                                    <option disabled value="default">Category</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>
                            {/* price */}

                            <div>
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <select {...register("price")} className="select select-bordered w-full" >
                                    <option disabled >Category</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="salad">Salad</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>
                        </div>
                        {/* recipe details */}
                        <div className='form-control'>
                            <label className='label'>
                                <span className='label-text'>Recipe Details</span>
                                <span className='label-text-alt'></span>
                            </label>
                            <textarea {...register('recipe')} className='textarea textarea-bordered h-24' placeholder='Bio'></textarea>
                        </div>
                        <div className="form-control w-full my-6">
                            <input {...register('image')} type="file" className='file-input- w-full max-w-xs' />
                        </div>
                        <button className='btn'>
                            Add Item <FaUtensils></FaUtensils>
                        </button>
                    </form>
                </div>
            </div>
        );
    };

    export default AddItems;