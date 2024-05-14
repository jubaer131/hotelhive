import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const RoomsPage = () => {
    const [rooms, setrooms] = useState([])
    const [filter, setfilter] = useState('')


    useEffect(() => {

        fetch(`https://hotelhive-server.vercel.app/RoomsPage?filter=${filter}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setrooms(data);


            });
    }, [filter]);



    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            onChange={e => setfilter(e.target.value)}
                            value={filter}
                            name='PricePerNight'
                            id='PricePerNight'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By  price range</option>
                            <option value='$50'>Price Per night : $50</option>
                            <option value='$20'>Price per night : $20</option>
                            <option value='$80'>Price per night : $80</option>


                        </select>
                    </div>



                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    {rooms.map(room => (

                        <Link to={`/roompagedetail/${room._id}`}>


                            <div className="hero shadow-2xl" style={{ backgroundImage: `url(${room.Image})` }}>

                                <div className=""></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md h-72">
                                        <h1 className="mt-28 text-4xl font-bold">Hotel Hive</h1>

                                    </div>
                                </div>

                            </div>
                        </Link>

                    ))}
                </div>
            </div>


        </div>
    )
}

export default RoomsPage