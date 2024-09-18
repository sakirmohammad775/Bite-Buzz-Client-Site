import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic=useAxiosPublic()

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        //create user entry in the database
                        const userInfo={
                            name:data.name,
                            email:data.email
                        }
                        axiosPublic.post('/users',userInfo)
                        then (res=>{
                           
                            if(res.data.insertedId){
                                console.log('user added to the db')
                                reset()
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "Your work has been saved",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/')
                            }
                        })
                      
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <><Helmet>
            <title>BiteBuzz || SignUp</title>
        </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' {...register('name')} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="Photo Url" {...register('photoUrl')} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} name='email' className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                                {/*apply validation part in the next and after completed project*/}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('password', { required: true })} name='password' className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>password must be required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="Sign Up" className='btn btn-primary'></input>
                            </div>
                        </form>
                        <p>Already Have an account?<Link to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;