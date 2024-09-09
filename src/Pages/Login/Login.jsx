import React, { useEffect } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge } from 'react-simple-captcha';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password =form.password.value
        console.log(email,password)
    }
    useEffect(()=>{
        loadCaptchaEnginge(6)
    })
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                       
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input type="text"
                                    name="captcha" className="input input-bordered" required />
                                <button className='btn btn-secondary btn-xs'>Validate</button>
                                
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn btn-primary'   />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;