import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { createDroneFlight, deleteDroneFlight, updateDroneFlight, getDroneFlight } from '../api/droneflights.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function DroneFlightFormPage() {
    const {
        register, 
        handleSubmit, 
        formState: { errors }, 
        setValue
        } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
           await updateDroneFlight(params.id, data);
           toast.success('Drone Flight Updated',{
            position:"bottom-right",
            style: {
                background: "#101010",
                color: "#fff"
            }

        })
        } else {
            await createDroneFlight(data);
            toast.success('Drone Flight Created',{
                position:"bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }

            })
        }
        navigate('/droneflights');
    });

    useEffect(() => {
           async function loadDroneFlight() {
                if (params.id) {
                console.log('obteniendo datos');
                const res = await getDroneFlight(params.id);
                setValue('pilot', res.data.pilot);
                setValue('drone_model', res.data.drone_model);
                setValue('location', res.data.location);
                setValue('flight_duration', res.data.flight_duration);
                setValue('weather', res.data.weather);
                setValue('created', res.data.created);
                setValue('crash_unexpected', res.data.crash_unexpected);
            }
        }
        loadDroneFlight();
    },[])

    return (
        /* MAIN CONTAINER DIV FOR DRONE FLIGHT FORM PAGE*/
        <div className="flex bg-yellow1 p-6 justify-center w-500">

            <form onSubmit={onSubmit}>
                <div className="flex h-20">
                    <input 
                    type="text" 
                    placeholder="pilot" 
                    className="bg-white  font-light p-4"
                    {...register("pilot", {required:true})} />
                    {errors.pilot && <span>This field is required</span>}
                </div>
                
                <div className="flex p-0">
                    <input type="text" placeholder="drone model" 
                    className="bg-white  font-light p-4"
                    {...register("drone_model", {required:true})}/>
                    {errors.drone_model && <span>This field is required</span>}
                </div>

                <div className="flex p-0">
                    <input type="text" placeholder="location" 
                    className="bg-white  font-light p-4"
                    {...register("location", {required:true})}/>
                    {errors.location && <span>This field is required</span>}
                </div>

                <div className="flex p-0">
                    <input type="text" placeholder="flight_duration" 
                    className="bg-white  font-light p-4"
                    {...register("flight_duration", {required:true})}/>
                    {errors.flight_duration && <span>This field is required</span>}
                </div>

                <div className="flex p-0">
                    <input type="text" placeholder="weather" 
                    className="bg-white font-lweatheright p-4"
                    {...register("weather", {required:true})}/>
                    {errors.weather && <span>This field is required</span>}
                </div>

                <div className="flex p-0">
                    <input type="text" placeholder="crash_unexpected" 
                    className="bg-white  font-light p-4"
                    {...register("crash_unexpected", {required:true})}/>
                    {errors.status && <span>This field is required</span>}
                </div>

                <button
                    className="bg-blue-700 text-white p-2 rounded-lg block w-full mt-3">Save</button>
            </form>

            {params.id && (
                <div
                    className="flex justify-end">
                    
                    <button
                    className="bg-yellow1 px-4 py-4 rounded-lg w-48 mt-3"
                    onClick={async () => {
                    const accepted = window.confirm ('Are you sure?')
                    if (accepted) {
                        await deleteDroneFlight(params.id)
                        
                        toast.success('Flight Deleted',{
                            position:"bottom-right",
                            style: {
                                background: "#101010",
                                color: "#fff"
                            }
            
                        })
                        navigate ('/droneflights')
                    }
                }}  
                >
                    Delete
                </button>

                </div> )}
        </div>
     );
}
