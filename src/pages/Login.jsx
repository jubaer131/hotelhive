
import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../assets/Provider/AuthProvider";
const Login = () => {

    const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext)
    console.log(signIn)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const form = location.state || '/'
    const handlegooglesignin = async () => {
        try {
            await signInWithGoogle()
            toast.success('login successful')
            navigate(form, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }

    const handlesignin = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log({ email, password })
        try {
            const result = await signIn(email, password)
            console.log(result)
            navigate(form, { replace: true })
            toast.success('login successful')
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }


    }
    if (user || loading) return

    return (

        <div className='flex justify-center items-center gap-5 md:h-[550px]'>
            <div className='flex w-full max-w-sm  mx-auto  overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2 h-[550px]'>
                    <img className="h-full" src='https://i.ibb.co/6vxwFv4/francesca-tosolini-Xy-Gv-Ej587-Mc-unsplash.jpg' alt="" />

                </div>

                <div className="w-full max-w-md  p-8 space-y-3  bg-gradient-to-r from-[#cffbe6] to-[#f8dbda]">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handlesignin} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Email" className="block dark:text-gray-600">Email</label>
                            <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

                        </div>
                        <button className="block w-full p-3 btn text-center rounded-xl  bg-gradient-to-r from-[#eadaf8] to-[#f8dbda]  ">Sign in</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-[15px] ">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button onClick={handlegooglesignin} className="p-3 rounded-sm ">
                            <FaGoogle className="text-xl"></FaGoogle>
                        </button>

                        <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <FaGithub className="text-xl"></FaGithub>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 text-black">Don't have an account ?<Link to="/registation" className="text-purple-500">Please Register </Link>

                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;