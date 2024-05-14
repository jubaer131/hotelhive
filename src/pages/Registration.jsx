
import { useContext } from "react"
import { Link, useLocation, useNavigate, } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "../assets/Provider/AuthProvider"
import { Helmet } from "react-helmet"



const Registration = () => {

    const { user,
        setUser,
        createUser,
        updateUserProfile, } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state || '/'


    const handleregistation = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const password = form.password.value
        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return
        }


        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.");
            return
        }


        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.");
            return
        }


        if (!/\d/.test(password)) {
            toast.error("Password must contain at least one digit.");
            return
        }


        if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error("Password must contain at least one special character.");
            return
        }
        console.log({ email, password })
        try {
            const result = await createUser(email, password)
            console.log(result)
            await updateUserProfile(name, photo)
            setUser({ ...user, photoURL: photo, displayName: name })
            toast.success('Registaton successful')
            navigate(form, { replace: true })
        } catch (err) {
            console.log(err)
            toast.error(err?.message)
        }


    }


    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
            <Helmet>
                <title>Registation</title>
            </Helmet>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-7 sm:h-8'
                            src='https://i.ibb.co/SnZv88t/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg'
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>



                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleregistation}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='photo'
                            />
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            You have an account?sign in.
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://i.ibb.co/SnZv88t/frames-for-your-heart-m-R1-CIDdu-GLc-unsplash.jpg')`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Registration