import { useNavigate } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

export function FlightCard({flight}) {
    const navigate = useNavigate();
    return ( 
            <div 
                className="
                        bg-white 
                        flex-initial w-80 ... 
                        p-8 
                        cursor-pointer 
                        border-4 
                        border-primary 
                        hover:bg-yellow1" 
                onClick={ () => {
                    navigate(`/flight/${flight.id}`)
                }}
            >
                <div className="grid1-item">
                    <h1 className="font-bold text-4xl items-center">{flight.aircraft}</h1>
                    <br/>
                    <ul className="list-outside hover:list-inside">
                        <li className="p-1"><strong className="font-bold text-primary text-lg">Origin:</strong> {flight.origin}</li>
                        <li className="p-1"><strong className="font-bold text-primary text-lg">Destination:</strong> {flight.destin}</li>
                        <li className="p-1"><strong className="font-bold text-primary text-lg">ETD:</strong> {flight.etd}</li>
                        <li className="p-1"><strong className="font-bold text-primary text-lg">ETA:</strong> {flight.eta}</li>
                        <li className="p-1"><strong className="font-bold text-primary text-lg">Program(s) Onboard:</strong> {flight.program_onb}</li>
                        <li className="p-1"><strong className="font-bold text-primary text-lg">Most recent status:</strong> {flight.status}</li>
                    </ul>
                </div>
            </div>
        );
}   


