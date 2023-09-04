import { useEffect, useState} from 'react';
import { getAllDroneFlights } from '../api/droneflights.api'
import { DroneFlightCard } from './DroneFlightCard';

export function DroneFlightsList() {
    const [droneflights, setDroneFlights] = useState([]);

    useEffect (() => {
        async function loadDroneFlights () {
            const res = await getAllDroneFlights();
            setDroneFlights(res.data);
        }
        loadDroneFlights();
}, []);

    return ( 
        /* MAIN CONTAINER TO DISPLAY ALL INDIVIDUAL FLIGHTCARDS */
        <div className='flex justify-center flex-wrap gap-4' >
            {droneflights.map((droneflight) => (
                <DroneFlightCard key={droneflight.id} droneflight={droneflight} />
            ))}
        </div>
    );
}