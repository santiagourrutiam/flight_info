import { Link } from 'react-router-dom';


export function Navigation () {
    return ( 
        <div className='flex justify-between py-3'>
            <Link to="/flights"><h1 className='font-bold text-3x1 mb-4'>ALE Flight Info App</h1></Link>
            <button className='bg-indico-200 px-3 py-2 rounded-lg'>
                <Link to="/flight-create">Create Flight</Link>
            </button>
        </div>
     )
}
