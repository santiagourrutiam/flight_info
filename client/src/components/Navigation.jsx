import { Link } from 'react-router-dom';


export function Navigation () {
    return ( 
        <div className='antialiased max-w-6xl mx-auto my-12 bg-gray-300 px-8 py-12'>
            <Link to="/flights"><h1 className='font-bold center text-3x1 mb-4'>ALE Flight Info App</h1></Link>
            <div className="flex flex-wrap">
                <button className="block items-left bg-blue-800 hover:bg-blue-700 p-8 text-md font-semibold text-gray-300 uppercase mt-8">
                <Link to="/flight-create">Create Flight</Link>
            </button>
            </div>
        </div>
     )
}
