import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import axios from 'axios';

const SignUp = () => {

    // const { createUser, updateUserProfile } = useAuth()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            // const user = await createUser(email, password);
            // console.log(user);

            // If createUser succeeds, updateUserProfile
            // updateUserProfile(name, img);

            const userData = {
                displayName: name,
                img: img,
                email: email,
                role: 'user'
            };

            // Assuming axios.post returns a promise
            const response = await axios.post('http://localhost:5000/signedUser', userData);
            console.log('Data sent successfully!', response.data);
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className='bg-[#131313] h-screen flex items-center justify-center '>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={handleSubmit} action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label className="block text-[#b5b2b6] ">Username</label>
                        <input
                            type="text"
                            name="name"
                            id="username"
                            placeholder="Username"
                            className="w-full px-4 py-3 rounded-md bloc bg-[#333333] p-3 text-[#b5b2b6]    "
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-[#b5b2b6] ">Profile Picture</label>
                        <input
                            type="text"
                            name="img"
                            id="username"
                            placeholder="Picture Url"
                            className="w-full px-4 py-3 rounded-md bloc bg-[#333333] p-3 text-[#b5b2b6]    "
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-[#b5b2b6] ">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="username"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-md bloc bg-[#333333] p-3 text-[#b5b2b6]    "
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block text-[#b5b2b6] ">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-md bg-[#333333] p-3 text-[#b5b2b6]  "
                        />
                    </div>
                    <button
                        type='submit'
                        className="block w-full bg-[#333333] p-3 text-center text-[#b5b2b6] rounded-sm transition-colors duration-300 hover:bg-[#f7c667] hover:text-black font-medium"
                    >
                        Sign in
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm text-[#b5b2b6] ">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button aria-label="Log in with Google" className="p-3 rounded-sm bg-[#333333]">
                        <FaGoogle className="text-[#b5b2b6] " />
                    </button>
                    <button aria-label="Log in with Twitter" className="p-3 rounded-sm bg-[#333333]">
                        <FaTwitter className="text-[#b5b2b6] " />
                    </button>
                    <button aria-label="Log in with GitHub" className="p-3 rounded-sm bg-[#333333]">
                        <FaGithub className="text-[#b5b2b6] " />
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-[#b5b2b6] ">Already have an account?
                    <Link to="/login" rel="noopener noreferrer" href="#" className="underline dark:text-gray-100">Log In</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;