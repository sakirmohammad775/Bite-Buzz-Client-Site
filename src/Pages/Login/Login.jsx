import React, { useContext, useEffect, useState } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [disable, setDisable] = useState(true)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })

    }
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleValidateCaptcha = e => {
        const user_Captcha_Value = e.target.value
        if (validateCaptcha(user_Captcha_Value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>BiteBuzz || Login</title>
            </Helmet>
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
                                <input type="email" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input type="text"
                                    name="captcha" onBlur={handleValidateCaptcha} className="input input-bordered" />


                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn btn-primary' disabled={false} />
                                {/* toDo:using the captcha after completing project */}
                            </div>
                        </form>
                        <p className='ml-8'>New Here? <Link to="/signUp">SignUp</Link></p>
                        <SocialLogin></SocialLogin>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Login;