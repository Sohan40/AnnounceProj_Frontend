import "./Register.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
export default function Register() {
    const [type, setType] = useState("password");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [first, setFirst] = useState({ year: true, branch: true });
    const onSubmit = (data) => console.log(data);
    function changeFirst(name) {
        setFirst((prev) => { return { ...first, [name]: false } });
    }
    return (
        <div className="reg">
            <div className="register d-flex justify-content-center align-items-center">


                <form action="" className="row" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center">Register</h1>
                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                {...register("username", { required: true })}
                                aria-invalid={errors.username ? "true" : "false"}
                                type="text" className="form-control shadow-none" name="username" id="username" placeholder="" />
                            <ErrorDisplay errors={errors} name="username" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                {...register("email", { required: true })}
                                aria-invalid={errors.email ? "true" : "false"}
                                type="email" className="form-control shadow-none" name="email" id="email" placeholder="abc@mail.com" />
                            <ErrorDisplay errors={errors} name="email" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="rollno" className="form-label">Roll Number</label>
                            <input
                                {...register("rollno", { required: true })}
                                aria-invalid={errors.rollno ? "true" : "false"}
                                type="text" className="form-control shadow-none" name="rollno" id="rollno" />
                            <ErrorDisplay errors={errors} name="rollno" />
                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Year</label>
                            <select
                                {...register("year", { required: true, min: 1, onChange: () => { changeFirst("year") } })}
                                aria-invalid={errors.year ? "true" : "false"}
                                className="form-select shadow-none" name="year" id="year">
                                {first.year && <option value="0" >--Select Year--</option>}
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <ErrorDisplay errors={errors} name="year" typename="min" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="branch" className="form-label">Branch</label>
                            <select
                                {...register("branch", { required: true, min: 1, onChange: () => { changeFirst("branch") } })}
                                aria-invalid={errors.branch ? "true" : "false"}
                                className="form-select shadow-none" name="branch" id="branch" >
                                {first.branch && <option value="0">--Select Branch--</option>}
                                <option value="Biotechnology">Biotechnology</option>
                                <option value="Chemical Engineering">Chemical Engineering</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Metallurgical and Materials Engineering">Metallurgical and Materials Engineering</option>
                            </select>
                            <ErrorDisplay errors={errors} name="branch" typename="min" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="w-100 m-0 p-0 input-group">
                                <input {...register("password", { required: true })}
                                    aria-invalid={errors.password ? "true" : "false"}
                                    type={type} className="form-control" name="password" id="password" placeholder="Your password" />
                                <span style={{height:"38px"}} className="input-group-text">{type === "text" ? <svg onClick={() => { setType("password") }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                    : <i onClick={() => { setType("text") }} className="fa-solid fa-eye-slash"></i>}
                                </span>
                            </div>
                            <ErrorDisplay errors={errors} name="password"/>
                        </div>

                    </div>
                    <div className="mb-3 text-center mt-3">
                        <button type="submit" className="btn btn-primary shadow-none w-75">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    )
}