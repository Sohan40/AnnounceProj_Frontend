import "./Login.css"
import ErrorDisplay from "./ErrorDisplay"
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [type, setType] = useState("password");
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            let res=await axios.post("/api/user/login",data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        

    }
    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-box">
                            <h2>Login</h2>
                            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-2">
                                    <input  {...register("email", { required: "email required" })}
                                        style={{ backgroundColor: errors.email?.type === 'required' && 'rgba(255, 110,110,0.553)' }}
                                        aria-invalid={errors.email ? "true" : "false"}
                                        type="text" className="form-control shadow-none" name="email" id="email" placeholder="Your email" />
                                    <ErrorDisplay errors={errors} name="email" b="13px" />
                                </div>

                                <div className="mb-2 ">
                                    <div className="w-100 m-0 p-0 input-group">
                                        <input {...register("password", { required: true })}
                                            style={{ backgroundColor: errors.password?.type === 'required' && 'rgba(255, 110,110,0.553)' }}
                                            aria-invalid={errors.password ? "true" : "false"}
                                            type={type} className="form-control shadow-none" name="password" id="password" placeholder="Your password" />
                                        <span className="input-group-text" style={{ backgroundColor: errors.password?.type === 'required' && 'rgba(255, 110,110,0.553)' }}>{type === "text" ? <svg onClick={() => { setType("password") }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                                            : <i onClick={() => { setType("text") }} className="fa-solid fa-eye-slash"></i>}
                                        </span>
                                    </div>
                                    <ErrorDisplay errors={errors} name="password" b="13px" />
                                </div>

                                <input type="submit" value="Login" />
                            </form>
                            <p>Don't have an account? <a href="/register">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}