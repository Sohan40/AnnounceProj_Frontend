import "./AddEvent.css"
import { useForm } from "react-hook-form";

function AddEvent({setAddEvent,setallEvents,allEvents})
{
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        data.id=crypto.randomUUID();
      setallEvents((prevData)=>{
       return ([...prevData,data])
      });
        setAddEvent(false);
    };
    return(
        <form className="add-event" onSubmit={handleSubmit(onSubmit)}>
            <div>
            <label>Event Name : </label>
            <input {...register("name", { required: true })}
            name="name"
            type="text"/>
            </div>
            <div>
            <label>Event Description : </label>
            <textarea
            {...register("description", { required: true })}
            name="description"
            ></textarea>
            </div>
            <div>
                <label>Event Date : </label>
                <input {...register("date", { required: true })}
                name="date"
                type="date" />
            </div>
            <button className="add-event-button" style={{backgroundColor:"green"}}>Add</button>
            <button className="add-event-button" style={{backgroundColor:"red"}} onClick={(e)=>{e.preventDefault();setAddEvent(false)}}>Close</button>
        </form>
    );
}

export default AddEvent;