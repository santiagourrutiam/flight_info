import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FlightsPage } from './pages/FlightsPage';
import { FlightFormPage } from './pages/FlightFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className='flex'>
      <div className='bg-primary h-screen p-5 pt-8'>Sidebar</div>
      <div className='bg-yellow1'>Home</div>
    </div>
  )
}
export default App
