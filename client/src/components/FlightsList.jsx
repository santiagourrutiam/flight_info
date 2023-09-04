import { useEffect, useState} from 'react';
import { getAllFlights } from '../api/flights.api'
import { FlightCard } from './FlightCard';

export function FlightsList() {
    const [flights, setFlights] = useState([]);

    useEffect (() => {
        async function loadFlights () {
            const res = await getAllFlights();
            setFlights(res.data);
        }
        loadFlights();
}, []);

    return ( 
        /* MAIN CONTAINER TO DISPLAY ALL INDIVIDUAL FLIGHTCARDS */
        <div className='flex justify-center flex-wrap gap-4' >
            {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
            ))}
        </div>
    );
}