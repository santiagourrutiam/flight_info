import { Link } from 'react-router-dom';

export function Navigation () {
    return ( 
        <div className="bg-white px-0 pb-4 items-center space-x-0 ">                
                    {/* LINK TO RELOAD flightList */ }
                    <button className='rounded-none space-x-2 p-3 bg-sky-500/100'>
                        <Link to="/flights">See Flights</Link>
                    </button>
                    
                    {/* Button to create a new flight */}
                    <button className='rounded-none space-x-2 p-3 bg-sky-500/100'>
                        <Link to="/flight-create">Add New Flight</Link>
                    </button>

                    <button className='rounded-none space-x-2 p-3 bg-sky-500/100'>
                        <Link to="/droneflights">See DroneFlights</Link>
                    </button>

                    <button className='rounded-none space-x-2 p-3 bg-sky-500/100'>
                        <Link to="/droneflight-create">Add New Drone Flight</Link>
                    </button>

        </div>
     )
}