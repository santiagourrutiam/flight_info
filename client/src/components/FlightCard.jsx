import { useNavigate } from "react-router-dom";

export function FlightCard({flight}) {
    const navigate = useNavigate();
    return ( 
            <div 
                className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
                onClick={ () => {
                    navigate(`/flight/${flight.id}`)
                }}
            >
                <h1 className="font-bold text-3xl md:text-4xl lg:text-3xl font-heading text-white">Aircraft: {flight.aircraft}</h1>
                <p className="text-slate-400">Origin: {flight.origin}</p>
                <p className="text-slate-400">Destination: {flight.destin}</p>
                <p className="text-slate-400">ETD: {flight.etd}</p>
                <p className="text-slate-400">ETA: {flight.eta}</p>
                <p className="text-slate-400">Program(s) Onboard: {flight.program_onb}</p>
                <p className="text-slate-400">Most recent status: {flight.status}</p>
            </div>
        );
}   


