
import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

const HotelLocation = () => {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    const desiredLocation = [50.8467, 4.3525];
    return (

        <div className="rounded-2xl max-sm:p-5">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48 mt-12">
                <h1 className="text-5xl font-bold leading-none text-center">Discover Hotel Hive</h1>
                <p className="pt-2 pb-8 text-xl font-medium text-center">  Prime Location at the Heart of Brussels' Historic Center. Hotel Hive offers an unparalleled location just steps away from the iconic Grand Place. Situated amidst the city's historic cobblestone streets  and picturesque architecture, our luxury hotel provides easy access to Brussels' most renowned attractions</p>

            </div>
            <div className="rounded-2xl">
                <Map height={350} defaultCenter={[50.879, 4.6997]} defaultZoom={11} >
                    <Marker
                        width={50}
                        anchor={desiredLocation}
                        color={color}
                        onClick={() => setHue(hue + 20)}
                    />
                    <Marker
                        width={50}
                        anchor={desiredLocation}
                        color={color}
                        onClick={() => setHue(hue + 20)}
                    >

                    </Marker>
                </Map>
            </div>

        </div>
    );
};

export default HotelLocation;