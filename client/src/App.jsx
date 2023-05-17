import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FlightsPage } from './pages/FlightsPage';
import { FlightFormPage } from './pages/FlightFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <div className="relative block items-center">
    <Navigation />
      <Routes>
        <Route path="/" element={ <Navigate to="/flights/" /> } />
        <Route path="/flights/" element={<FlightsPage/>}/>
        <Route path="/flight-create/" element={<FlightFormPage/>}/>
        <Route path="/flight/:id" element={<FlightFormPage/>}/>
      </Routes>  
      <Toaster />
    </div>
    </BrowserRouter>
  )
}
export default App
