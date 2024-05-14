

const Newsletter = () => {
    return (
        <section className="rounded-3xl max-sm:p-5">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48 mt-12">
                <h1 className="text-5xl font-bold leading-none text-center">Get Updates</h1>
                <p className="pt-2 pb-8 text-xl font-medium text-center">Regular updates help in building a sense of community among users. By sharing news and updates, the platform fosters a feeling of belonging and involvement among its users, which can lead to increased loyalty and advocacy.</p>

            </div>
            <div className="w-full h-[400px] bg-[url('https://i.ibb.co/7X6Bqs2/popular-resort-amara-dolce-vita-luxury-hotel-with-pools-water-parks-recreational-area-along-sea-coas.jpg')] bg-center bg-cover rounded-2xl" >
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-4xl antialiased font-bold leading-none text-center text-blue-500 ">Subscribe Now</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center text-blue-500"></p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-blue-400">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Newsletter;