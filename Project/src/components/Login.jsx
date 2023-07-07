import "./Login.css"
import {useForm} from "react-hook-form";
export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="login">
            <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="login-box">
                    <h2>Login</h2>
                    <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <input  {...register("username", { required: "username required" })} 
                            style={{backgroundColor: errors.username?.type === 'required' && 'rgba(255, 110,110,0.553)'}}
                            aria-invalid={errors.firstName ? "true" : "false"} 
                            type="text" className="form-control" name="username" id="username" placeholder="Your username"/>
                            {errors.username?.type === 'required' ?  <small className="valid" ><i className="fa-solid fa-triangle-exclamation"></i> username is required</small> :<div style={{height:"22px"}}></div> }
                            
                        </div>

                        <div className="mb-2">
                            <input {...register("password", { required: true })} 
                            style={{backgroundColor: errors.password?.type === 'required' && 'rgba(255, 110,110,0.553)'}}
                            type="text" className="form-control" name="password" id="password" placeholder="Your password"/>
                            {errors.password?.type === 'required' ? <small className="valid"><i className="fa-solid fa-triangle-exclamation"></i> password is required</small>:<div style={{height:"22px"}}></div>}
                        </div>
                    
                        <input type="submit" value="Login"/>
                    </form>
                    <p>Don't have an account? <a href="/register">Sign up</a></p>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}