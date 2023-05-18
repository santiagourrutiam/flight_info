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

    return ( <div className='flex space-x-4 p-6 font-extralight' >
        {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
        ))}
            
        </div>
    );
}