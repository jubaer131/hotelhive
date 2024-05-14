import { useEffect, useState } from "react";
import FeaturedroomsDetails from "./FeaturedroomsDetails";


const FeaturedRooms = () => {
    const [rooms, setrooms] = useState([])
    useEffect(() => {
        fetch('https://hotelhive-server.vercel.app/our-roomdataall')
            .then(res => res.json())
            .then(data => setrooms(data))
    }, [])
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container  mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-5xl font-bold mt-8 mb-5">Featured Rooms</h2>
                    <p className="font-serif text-[18px] dark:text-gray-600">Welcome to our luxurious hotel room, where comfort meets elegance. As you step through the door, you're greeted by a spacious and tastefully decorated sanctuary <br /> designed to provide you with the ultimate relaxation experience.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        rooms.map(room => <FeaturedroomsDetails room={room}></FeaturedroomsDetails>)
                    }

                </div>
            </div>
        </section>
    );
};

export default FeaturedRooms;