import { useContext } from "react"
import { AuthContext } from "../assets/Provider/AuthProvider"
import { Link } from "react-router-dom"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div className='navbar  shadow-sm container px-4 mx-auto bg-[#becca2] md:my-4 mb-2 rounded-2xl'>
            <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                    <img className='w-auto h-7' src='' alt='' />
                    <span className='font-bold text-2xl'>HotelHive</span>
                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link className="text-xl font-medium" to="/">Home</Link>
                    </li>

                    {
                        !user && (
                            <li>
                                <Link className="text-xl font-medium" to="/login">Login</Link>
                            </li>
                        )
                    }

                </ul>
                {user &&
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title=''>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user.photoURL}
                                />
                            </div>
                        </div>

                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link to='/rooms-page' className='justify-between'>Rooms page</Link>
                            </li>
                            <li>
                                <Link to="/my-booking">My booking </Link>
                            </li>
                            <li>
                                <div>About Us</div>
                            </li>

                            <li className='mt-2'>
                                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>

                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar