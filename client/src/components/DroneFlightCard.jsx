import { useNavigate } from "react-router-dom";
import { FaPlaneDeparture } from "react-icons/fa";

export function DroneFlightCard({droneflight}) {
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
                    navigate(`/droneflight/${droneflight.id}`)
                }}
            >
                <div className="grid1-item">
                    <h1 className="font-bold text-4xl items-center">{droneflight.pilot}</h1>
                  
                    <p>Has flown an RPA at {droneflight.location} for {droneflight.flight_duration} minutes</p>
                    <br/>
                </div>
            </div>
        );
}   


