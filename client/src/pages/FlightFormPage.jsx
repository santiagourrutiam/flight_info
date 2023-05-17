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
        <div className="max-w-xl mx-auto">
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Aircraft" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("aircraft", {required:true})} />
                {errors.aircraft && <span>This field is required</span>}
                
                <input type="text" placeholder="Origin" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("origin", {required:true})}/>
                {errors.origin && <span>This field is required</span>}

                <input type="text" placeholder="Destination" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("destin", {required:true})}/>
                {errors.destin && <span>This field is required</span>}
                
                <input type="text" placeholder="ETD" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("etd", {required:true})}/>
                {errors.etd && <span>This field is required</span>}

                <input type="text" placeholder="ETA" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("eta", {required:true})}/>
                {errors.eta && <span>This field is required</span>}

                <input type="text" placeholder="Programs Onboard" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("program_onb", {required:true})}/>
                {errors.program_onb && <span>This field is required</span>}

                <input type="text" placeholder="Status" 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                {...register("status", {required:true})}/>
                {errors.status && <span>This field is required</span>}

                <button
                    className="bg-indigo-700 p-3 rounded-lg block w-full mt-3">Save</button>

            </form>
            {params.id && (
                <div
                    className="flex justify-end">
                    
                    <button
                    className="bg-red-500 p-3 rounded-lg w-48 mt-3"
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
