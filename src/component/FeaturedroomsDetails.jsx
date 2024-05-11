// import axios from 'axios';
// import { useState } from 'react';
// import Swal from 'sweetalert2';

// const FeaturedroomsDetails = ({ room }) => {


//     const handlebooked = async (id, previousStatus, Status) => {
//         console.log(id, previousStatus, Status)

//         const { data } = await axios.patch(`http://localhost:5000/featured-rooms/${id}`, {
//             Status
//         })
//         Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "You have booked",
//             showConfirmButton: false,
//             timer: 1500
//         });






//     }

//     return (
//         <div className=" p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">

//             <div className="space-y-4">
//                 <div className="space-y-2">
//                     <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />

//                 </div>
//                 <div className="space-y-4">
//                     <a rel="noopener noreferrer" href="#" className="block">
//                         <h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
//                     </a>
//                     <p className="leading-snug dark:text-gray-600">{room.RoomDescription.slice(0, 120)}...</p>
//                     <button
//                         onClick={() => handlebooked(room._id, room.Status, 'booked')}
//                         disabled={room.Status !== 'available'}
//                         type="button" className={`text-sm font-normal btn ${room.Status === 'available' && 'text-yellow-500 bg-yellow-100/60'}${room.Status === 'booked' && 'text-red-500 bg-red-100/60'}`}>Book now</button>




//                     <button className='btn' onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
//                     <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//                         <div className="modal-box">
//                             <h3 className="font-bold text-lg">Hello!</h3>
//                             <p className="py-4">Press ESC key or click the button below to close</p>
//                             <div className="modal-action">
//                                 <form method="dialog">

//                                     <button

//                                         onClick={() => handlebooked(room._id, room.Status, 'booked')}

//                                         className={`text-sm font-normal btn ${room.Status === 'available' && 'text-yellow-500 bg-yellow-100/60'}${room.Status === 'booked' && 'text-red-500 bg-red-100/60'}`}>Book now</button>
//                                     <button  className='btn'>cencle</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </dialog>


//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FeaturedroomsDetails;


import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const FeaturedroomsDetails = ({ room }) => {
    const [isBooked, setIsBooked] = useState(false); // State to track if room is booked
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBooked = async (id, previousStatus, status) => {
        console.log(id, previousStatus, status);

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
            status
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

    return (
        <div className="p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
            <div className="space-y-4">
                <div className="space-y-2">
                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                </div>
                <div className="space-y-4">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{room.RoomDescription.slice(0, 120)}...</p>
                    <button onClick={openModal} disabled={isBooked || room.Status !== 'available'} className={`text-sm font-normal btn ${room.Status === 'available' ? 'text-yellow-500 bg-yellow-100/60' : 'text-red-500 bg-red-100/60'}`}>
                        Book now
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-full max-w-lg p-6 mx-auto my-10 bg-white border rounded-lg shadow-xl">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4">Room Summary</h3>
                            <p className="mb-4">{room.RoomDescription}</p>
                            <p className="mb-4">Price: {room.Price}</p>

                            <button onClick={() => handleBooked(room._id, room.Status, 'booked')} className="px-4 py-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-500">
                                Confirm Booking
                            </button>
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

export default FeaturedroomsDetails;
