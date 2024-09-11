import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // After user creation, update the profile with name and photo
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User profile updated');
                        reset();  // Assuming reset is part of a form handler
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your profile has been updated",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        Navigate('/')
                    })
                    .catch(error => console.error('Error updating profile:', error));
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });
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
                                <input type="text" placeholder="photoUrl" {...register('photo')} className="input input-bordered" />
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