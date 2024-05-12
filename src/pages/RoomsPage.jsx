import { useEffect, useState } from "react"


const RoomsPage = () => {
    const [rooms, setrooms] = useState([])
    const [filter, setfilter] = useState('')


    useEffect(() => {

        fetch(`http://localhost:5000/RoomsPage?filter=${filter}`)
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
                            <option value=''>Filter By PricePerNight</option>
                            <option value='$50'>Price $50</option>
                            <option value='$20'>Price $20</option>
                            <option value='$80'>Price $80</option>


                        </select>
                    </div>



                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                    {rooms.map(room => (
                        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                    <div className="flex items-center text-xs gap-6">
                                        <span>PricePerNight : {room.PricePerNight}</span>
                                        <span>RoomSize :{room.RoomSize}</span>
                                        <span>Availability :{room.Status}</span>

                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="leading-snug dark:text-gray-600">SpecialOffers :{room.SpecialOffers}</p>
                                    <a rel="noopener noreferrer" href="#" className="block">
                                        <h3 className="text-[16px] font-semibold dark:text-violet-600">{room.RoomDescription.slice(0, 130)}...</h3>
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default RoomsPage