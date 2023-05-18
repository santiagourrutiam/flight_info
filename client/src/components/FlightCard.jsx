import { useNavigate } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

export function FlightCard({flight}) {
    const navigate = useNavigate();
    return ( 
            <div 
                className="bg-white p-8"
                onClick={ () => {
                    navigate(`/flight/${flight.id}`)
                }}
            >
                <h1 className="font-bold text-3xl"><FaPlaneDeparture/>{flight.aircraft}</h1>
                <ul className="list-outside hover:list-inside">
                    <li>Origin: {flight.origin}</li>
                    <li>Destination {flight.destin}</li>
                    <li>ETD: {flight.etd}</li>
                    <li>ETA: {flight.eta}</li>
                    <li>Program(s) Onboard: {flight.program_onb}</li>
                    <li>Most recent status: {flight.status}</li>
                </ul>
            </div>
        );
}   


