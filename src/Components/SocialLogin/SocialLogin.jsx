import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log('hello user', result)
                const userInfo={
                    email:result.user?.email,
                    name:result.user?.displayName
                }
                axiosPublic.post('user updated',userInfo)
                .then(res=>{
                    console.log(res.data)
                    navigate('/')
                })
            })
           
    }
    return (
        <div className='ml-8 mb-4'>
            <div className='divider'></div>
            <div>
                <button onClick={handleGoogleSignIn} className='btn'>
                    <FaGoogle className='mr-2'></FaGoogle>
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;