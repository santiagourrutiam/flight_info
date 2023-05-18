import { Link } from 'react-router-dom';

export function Navigation () {
    return ( 
        <div className="flex bg-white py-8 px-8 items-center space-x-8 ">
                                    
                    {/* LINK TO RELOAD flightList */ }
                    <button className='rounded-full space-x-3 p-4 font-bold bg-sky-500/100'>
                        <Link to="/flights">ALE Flight Info App</Link>
                    </button>
                    
                    {/* Button to create a new flight */}
                    <button className='rounded-full space-x-3 p-4 font-bold bg-sky-500/100'>
                    <Link to="/flight-create">Add Flight</Link>
                    </button>
        </div>
     )
}