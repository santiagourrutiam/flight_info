import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import { DroneFlightsPage } from './pages/DroneFlightsPage';
import { DroneFlightFormPage } from './pages/DroneFlightFormPage';

import { FlightsPage } from './pages/FlightsPage';
import { FlightFormPage } from './pages/FlightFormPage';

import { Navigation } from './components/Navigation';

import { Toaster } from "react-hot-toast";
import { FaArrowAltCircleLeft, FaArrowAltCircleUp}  from 'react-icons/fa';
import { useState} from 'react';
import { set } from 'react-hook-form';
import { GiAirplaneDeparture, GiAntarctica } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";


const App = () => {

  const [open, setOpen] = useState(true);

  return (
    /* MAIN CONTAINER */
    <div className='flex-column h-full'>
      
      {/* UPPER PANEL */}
      <div className={`bg-primary w-full p-0 m-0 pt-0 ${open ? "h-36" : "h-14"} duration-800 relative z-0`}>
        <FaArrowAltCircleUp
          className={`bg-white text-primary text-2xl rounded-full border-2 border-yellow1 cursor-pointer 
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
         
        <div className='inline-flex p-0'>
          <h1 className={`text-4-xl items-center text-white ${!open && "scale-20"} duration-400`}>ALE Flight Info Screen</h1>
        </div>
        <div>
        </div>
      </div>
      
      {/* RIGHT PANEL */}
      <div className="h-full">
      <BrowserRouter>
      <div>
        <Navigation />
          <Routes>
            <Route path="/" element={ <Navigate to="/flights/" /> } />
            <Route path="/flights/" element={<FlightsPage/>}/>
            <Route path="/flight-create/" element={<FlightFormPage/>}/>
            <Route path="/flight/:id" element={<FlightFormPage/>}/>
            <Route path="/droneflights/" element={<DroneFlightsPage/>}/>
            <Route path="/droneflight-create/" element={<DroneFlightFormPage/>}/>
            <Route path="/droneflight/:id" element={<DroneFlightFormPage/>}/>
          </Routes>  
          <Toaster />
          </div>
        </BrowserRouter>
      </div>

    </div>

  );
};
export default App
