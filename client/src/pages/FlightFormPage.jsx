import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { createFlight, deleteFlight, updateFlight, getFlight } from '../api/flights.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function FlightFormPage() {
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
           await updateFlight(params.id, data);
           toast.success('Flight Updated',{
            position:"bottom-right",
            style: {
                background: "#101010",
                color: "#fff"
            }

        })
        } else {
            await createFlight(data);
            toast.success('Flight Created',{
                position:"bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }

            })
        }
        navigate('/flights');
    });

    useEffect(() => {
           async function loadFlight() {
                if (params.id) {
                console.log('obteniendo datos');
                const res = await getFlight(params.id);
                setValue('aircraft', res.data.aircraft);
                setValue('origin', res.data.origin);
                setValue('destin', res.data.destin);
                setValue('etd', res.data.etd);
                setValue('eta', res.data.eta);
                setValue('program_onb', res.data.program_onb);
                setValue('status', res.data.status);
            }
        }
        loadFlight();
    },[])

    return (
        <div className="flex space-x-2 space-y-4 py-4 font-extralight">
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Aircraft" 
                className="bg-white text-primary p-4"
                {...register("aircraft", {required:true})} />
                {errors.aircraft && <span>This field is required</span>}
                
                <input type="text" placeholder="Origin" 
                className="bg-white text-primary p-4"
                {...register("origin", {required:true})}/>
                {errors.origin && <span>This field is required</span>}

                <input type="text" placeholder="Destination" 
                className="bg-white text-primary p-4"
                {...register("destin", {required:true})}/>
                {errors.destin && <span>This field is required</span>}
                
                <input type="text" placeholder="ETD" 
                className="bg-white text-primary p-4"
                {...register("etd", {required:true})}/>
                {errors.etd && <span>This field is required</span>}

                <input type="text" placeholder="ETA" 
                className="bg-white text-primary p-4"
                {...register("eta", {required:true})}/>
                {errors.eta && <span>This field is required</span>}

                <input type="text" placeholder="Programs Onboard" 
                className="bg-white text-primary p-4"
                {...register("program_onb", {required:true})}/>
                {errors.program_onb && <span>This field is required</span>}

                <input type="text" placeholder="Status" 
                className="bg-white text-primary p-4"
                {...register("status", {required:true})}/>
                {errors.status && <span>This field is required</span>}

                <button
                    className="bg-blue-700 text-white p-3 rounded-lg block w-full mt-3">Save</button>

            </form>
            {params.id && (
                <div
                    className="flex justify-end">
                    
                    <button
                    className="bg-yellow1 px-4 py-4 rounded-lg w-48 mt-3"
                    onClick={async () => {
                    const accepted = window.confirm ('Are you sure?')
                    if (accepted) {
                        await deleteFlight(params.id)
                        
                        toast.success('Flight Deleted',{
                            position:"bottom-right",
                            style: {
                                background: "#101010",
                                color: "#fff"
                            }
            
                        })
                        navigate ('/flights')
                    }
                }}  
                >
                    Delete
                </button>

                </div> )}
        </div>
     );
}
