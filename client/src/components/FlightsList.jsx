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

    return ( <div className='grid grid-cols-3 gap-3' >
        {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
        ))}
            
        </div>
    );
}