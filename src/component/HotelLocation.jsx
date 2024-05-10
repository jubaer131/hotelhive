
import React, { useState } from "react"
import { Map, Marker } from "pigeon-maps"

const HotelLocation = () => {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    const desiredLocation = [50.8467, 4.3525];
    return (
        <div>
            <h1 className="text-center mb-5 mt-28">Discover Hotel Hive: Prime Location at the Heart of Brussels' Historic Center</h1>
            <p className="text-center mb-10">Hotel Hive offers an unparalleled location just steps away from the iconic Grand Place. Situated amidst the city's historic cobblestone streets <br /> and picturesque architecture, our luxury hotel provides easy access to Brussels' most renowned attractions</p>
            <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
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
    );
};

export default HotelLocation;