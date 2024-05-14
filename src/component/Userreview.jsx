import { useEffect, useState } from "react";
import UserreviewDetails from "./UserreviewDetails";


const Userreview = () => {

    const [review, setreview] = useState([])
    useEffect(() => {
        fetch('https://hotelhive-server.vercel.app/userreviewpost')
            .then(res => res.json())
            .then(data => setreview(data))

    }, [])


    return (
        <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
            <div className="container  mx-auto space-y-8">
                <div className="space-y-8 text-center mb-16">
                    <h2 className="text-5xl font-bold ">User Review</h2>
                    <p className="font-serif text-[18px] dark:text-gray-600 ">These glowing reviews not only inspire us to maintain our high standards but also serve as a source of confidence <br /> for prospective guests seeking a memorable and enjoyable stay with us..</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        review.map(item => <UserreviewDetails item={item}></UserreviewDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Userreview;