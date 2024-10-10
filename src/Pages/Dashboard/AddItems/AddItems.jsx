import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) =>
        console.log(data)
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
                            {...register('name')} className="input input-bordered w-full" />
                    </div>
                    
                    <select {...register("category")} className="select select-bordered w-full" >
                        <option disabled selected>Select the category</option>
                        <option value="pizza">Pizza</option>
                        <option value="salad">Salad</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;