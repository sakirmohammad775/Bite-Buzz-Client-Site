import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';

const SocialLogin = () => {
    const { googleSignIn } = useAuth()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
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