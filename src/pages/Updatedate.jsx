import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../assets/Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Updatedate = () => {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [startDate, setStartDate] = useState(new Date());

    const handleaddsport = event => {
        event.preventDefault()
        const form = event.target
        const name = user.displayName;
        const email = user.email
        const PricePerNight = form.PricePerNight.value;
        const date = startDate

        const newsport = { name, email, PricePerNight, date }
        console.log(newsport)

        fetch(`https://hotelhive-server.vercel.app/updatedate/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsport)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Date Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        navigate('/my-booking')
    }


    return (
        <div className="max-w-[600px] md:h-[500px] mx-auto md:mt-8 p-16">
            <Helmet>
                <title>Update date</title>
            </Helmet>
            <h1 className="text-center text-3xl">Update your new date</h1>
            <form onSubmit={handleaddsport}>
                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                    <div>
                        <label className='text-gray-700  ' htmlFor='job_title'>
                            User name
                        </label>
                        <input
                            defaultValue={user.displayName}
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
                            defaultValue={user.email}
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
                        <label className='text-gray-700 ' htmlFor='max_price'>
                            Price pernight
                        </label>
                        <input

                            id='PricePerNight'
                            name='PricePerNight'
                            type='number'
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>
                </div>

                <div className='flex justify-end mt-6'>
                    <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Updatedate;