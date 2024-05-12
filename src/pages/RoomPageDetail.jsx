
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useContext, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from "../assets/Provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";

const RoomPageDetail = () => {
    const room = useLoaderData()
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [isBooked, setIsBooked] = useState(false); // State to track if room is booked
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    const handleBooked = async (id, previousStatus, Status) => {

        console.log(id, previousStatus, Status)
        // If room is already booked, show alert and return
        if (isBooked) {
            Swal.fire({
                icon: 'info',
                title: 'Already Booked',
                text: 'You have already booked this room.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Perform booking logic
        const { data } = await axios.patch(`http://localhost:5000/featured-rooms/${id}`, {
            Status
        });

        // Update state to indicate room has been booked
        setIsBooked(true);

        // Show success message
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You have booked",
            showConfirmButton: false,
            timer: 1500
        });

        // Close modal after booking
        closeModal();

    };

    const handlesubmission = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const RoomDescription = room.RoomDescription;
        const price = room.PricePerNight;
        const date = startDate;
        const email = user.email
        const name = user.displayName
        const roomdata = { RoomDescription, price, date, email, name };

        try {
            const { data } = await axios.post('http://localhost:5000/myrooms-data', roomdata);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };





    return (
        <div className=" shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md md:h-[500px] p-5 dark:bg-gray-500" />
                </div>
                <div className="space-y-6 px-5 py-5">

                    <p className="leading-snug dark:text-gray-600">{room.RoomDescription.slice(0, 120)}...</p>
                    <p className="leading-snug dark:text-gray-600">PricePerNight : {room.PricePerNight}</p>
                    <p className="leading-snug dark:text-gray-600">RoomSize : {room.RoomSize}</p>
                    <p className="leading-snug dark:text-gray-600"> SpecialOffers : {room.SpecialOffers}...</p>
                    <button onClick={openModal} disabled={isBooked || room.Status !== 'available'} className={`text-sm font-normal btn ${room.Status === 'available' ? 'text-yellow-500 bg-yellow-100/60' : 'text-red-500 bg-red-100/60'}`}>
                        Book now
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-full max-w-lg p-6 mx-auto my-10 bg-white border rounded-lg shadow-xl">
                        <div className="text-center p-4">
                            <h3 className="text-xl font-bold mb-4">Room Summary</h3>
                            <p className="mb-4">{room.RoomDescription}</p>

                            <form onSubmit={handlesubmission}>
                                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='RoomDescription'>

                                            RoomDescription
                                        </label>
                                        <input
                                            defaultValue={room.RoomDescription}
                                            // defaultValue={room.RoomDescription}
                                            id='RoomDescription'
                                            name='RoomDescription'
                                            type='text'
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>

                                    <div>
                                        <label className='text-gray-700 ' htmlFor='emailAddress'>
                                            Email Address
                                        </label>
                                        <input
                                            defaultValue={user.displayName}
                                            id='emailAddress'
                                            type='email'
                                            name='email'
                                            disabled
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label className='text-gray-700'>Deadline</label>
                                        <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                                        {/* Date Picker Input Field */}
                                    </div>


                                    <div>
                                        <label className='text-gray-700 ' htmlFor='price'>

                                            PricePerNight

                                        </label>
                                        <input
                                            defaultValue={room.PricePerNight}
                                            id='price'
                                            name='price'
                                            type='text'
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>


                                </div>
                                <Link to="/">
                                    <button onClick={() => handleBooked(room._id, room.Status, 'booked')} className="px-4 p-2 mt-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500">
                                        Confirm Booking
                                    </button>
                                </Link>

                            </form>



                            <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 cursor-pointer">
                                <span className="sr-only">Close</span>
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* End Modal */}
        </div>
    );
};

export default RoomPageDetail;
