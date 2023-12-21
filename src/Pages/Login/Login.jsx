import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'
import { FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const { signIn} = useAuth();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            await signIn(email, password)
                .then(res => {
                    toast.success('Successfully logged in!')
                    console.log('Successfully logged in', res);
                })
                .catch(err => {
                    toast.error("Failed to log in ")
                    console.log('Failed to log in ', err)
                })
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };
    return (
        <div className='bg-[#131313] h-screen flex items-center justify-center '>
            <Toaster />
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
                <form onSubmit={handleSubmit} action="" className="space-y-6">
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
                        Log In
                    </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                </div>
                <p className="text-xs text-center sm:px-6 text-[#b5b2b6] ">Don't have an account?
                    <Link to="/signup" rel="noopener noreferrer" href="#" className="underline dark:text-gray-100">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;