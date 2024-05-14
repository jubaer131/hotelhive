import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../assets/Provider/AuthProvider"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import axios from "axios"

const Mybooking = () => {

    const { user } = useContext(AuthContext)
    const [booking, setbooking] = useState([])

    useEffect(() => {
        fetch(`https://hotelhive-server.vercel.app/bookingroom/${user?.email}`)
            .then(res => res.json())
            .then(data => setbooking(data))
    }, [])
    console.log(booking)

    const handleBooked = async (id, previousStatus, Status) => {
        console.log(id, previousStatus, Status)

        if (previousStatus !== Status) {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Cancel it!"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    console.log('is working')
                    const { data } = await axios.patch(`https://hotelhive-server.vercel.app/booking-cancel/${id}`, {
                        Status
                    });

                    Swal.fire({
                        title: "Cancle!",
                        text: "Your booking has been canceled.",
                        icon: "success"
                    });
                }

            });
        }
    }



    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium text-gray-800 '>My Booking</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    booking
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>User name</span>
                                            </div>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <span>Deadline</span>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Price</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Cancel booking
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Update date
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Review
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        booking.map(item => (
                                            <tr key={item._id}>
                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {item.name}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {item.date}
                                                </td>

                                                <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                                                    {item.price}
                                                </td>

                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div className='flex items-center gap-x-2'>

                                                        <button onClick={() => handleBooked(item._id, item.Status, 'available')} className={`text-sm font-normal btn ${item.Status === 'available' ? 'text-yellow-500 bg-yellow-100/60' : 'text-red-500 bg-red-100/60'}`}>
                                                            booking cancle
                                                        </button>
                                                    </div>
                                                </td>

                                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                                    <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2'>
                                                        <Link to={`/updatedate`}>
                                                            <button className="btn">Update</button>
                                                        </Link>

                                                    </div>
                                                </td>

                                                <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                    <div>
                                                        <Link to={`/review`}>
                                                            <button className="btn">Review</button>
                                                        </Link>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mybooking