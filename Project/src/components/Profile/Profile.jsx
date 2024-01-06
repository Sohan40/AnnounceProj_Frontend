import React, { useEffect, useState } from 'react'
import "./Profile.css"
import Profilepic from './Profilepic';
import axios from 'axios';
export default function Profile() {

    const [enable,setEnable] =useState(false);
    const [val,setVal] =useState({});


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("/api/user/getProfile");
            console.log(response)
            let user={
                email : response.data.email,
                username : response.data.username,
                branch : response.data.department,
                year : response.data.year
            }
            setVal(user)
          } catch (error) {
            console.log(error)
          }
        };
        fetchData();
        return () => {
           };
      },[]);



            

      
    
    

    const updateVal=(e)=>{
        console.log(e)
        console.log(e.target.name , e.target.value)
        setVal((old)=>({...old,[e.target.name]:e.target.value}));
    }

    const enableEdit= (e)=>{
        e.preventDefault();
        setEnable((old)=>(!old));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setEnable((old)=>(!old));
        console.log(val);
    }
    return (
        <div className='cont'>
            <h1 className='text-center p-4'>Your Profile</h1>
            <div className='profile row'>
                <div className='imgPar col-lg-6 col-md-6 col-sm-12 text-center p-4'>
                    <Profilepic/>
                </div>
                <div className='userDetails col-lg-6 col-md-6 col-sm-12 text-center p-4'>
                    <form>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name='username' id="username" placeholder="username" onChange={updateVal} disabled={enable?null:"disabled"} value={val.username}/>
                                <label htmlFor="username">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name='email' id="floatingInput" placeholder="name@example.com" disabled value={val.email}/>
                                <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name='year' id="year" placeholder="year" onChange={updateVal} disabled={enable?null:"disabled"} value={val.year}/>
                                <label htmlFor="year">Year</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name='branch' id="branch" placeholder="branch" disabled value={val.branch}/>
                                <label htmlFor="floatingPassword">Branch</label>
                        </div>
                        

                        <button className='btn 'onClick={enableEdit} >Edit </button>
                        {enable?<button className='btn' onClick={handleSubmit} disabled={enable?null:"disabled"}>Submit </button>:null}
                        

                    </form>
                </div>

            </div>
            <div className=''>
                <div className=''></div>
                <div className=''></div>
            </div>

        </div>
    )
}
