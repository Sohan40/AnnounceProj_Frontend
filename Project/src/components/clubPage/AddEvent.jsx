import "./AddEvent.css"
import { useForm } from "react-hook-form";
import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios";
function AddEvent({ setAddEvent, setallEvents, allEvents }) {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        let res = await axios.post("/api/club/addEvent", data);
        if (res.status == 200) {
            console.log("posted");
        }
        data.id = crypto.randomUUID();
        setallEvents((prevData) => {
            console.log(prevData)
            return ([...prevData, data])
        });
        setAddEvent(false);
    };
    return (
        <div className="background-for-addevent">
            
            <form className="add-event" onSubmit={handleSubmit(onSubmit)}>
            <button onClick={(e) => { e.preventDefault(); setAddEvent(false) }} className="evnt-btn-close"><CancelIcon/></button>
                <h2 className="event-form-title">Enter Event Details !</h2>

                <div className="sub-form-comp">
                    <label>Event Name : </label>
                    <input {...register("title", { required: true })}
                        name="title"
                        type="text" />
                </div>


                <div className="sub-form-comp">
                    <label>Event Description : </label>
                    <textarea
                        {...register("description", { required: true })}
                        name="description"
                    ></textarea>
                </div>

                <div className="sub-form-comp">
                    <label>final submission </label>
                    <input {...register("lastDateToApply", { required: true })}
                        name="lastDateToApply"
                        type="date" />
                </div>

                <div className="sub-form-comp">
                    <label>Event Date : </label>
                    <input {...register("eventDate", { required: true })}
                        name="eventDate"
                        type="date" />
                </div>

                <div className="sub-form-comp">
                    <label>Event logo: </label>
                    <input {...register("image", { required: true })}
                        name="image"
                        type="text" />
                </div>

                <div>

                    <button className="add-event-button mt-2" style={{ backgroundColor: "green" ,marginLeft:"40%"}}>submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddEvent;