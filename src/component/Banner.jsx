

const Banner = () => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] rounded-2xl'
            style={{
                backgroundImage: `url("https://cache.marriott.com/content/dam/marriott-renditions/DACSI/dacsi-frontsesk-reception-3251-hor-pano.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px")`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        Welcome to  <span class='text-blue-400'>Hotel</span>hive
                    </h1>
                    <br />

                </div>
            </div>
        </div>
    );
};

export default Banner;