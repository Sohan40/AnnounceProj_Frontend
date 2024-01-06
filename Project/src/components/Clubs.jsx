
import './Clubs.css'
import Search from './Search'
import Card from './Card'
import { useState } from 'react'
import data from './clubinfo'
import axios from "axios";
import { useEffect } from 'react'
export default function Clubs() {


    
    const [details, Setdetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("/api/user/getAllClubs");
            Setdetails(response.data)
          } catch (error) {
            
            console.log(error)
          }
        };
        fetchData();
        return () => {
           };
      }, []);

    
    const [query,setQuery]=useState("");
    const filteredDetails=details.filter(item=>{
        return item.name.toLowerCase().includes(query.toLowerCase());
    
    })
    return (

        <div className='clubs'>
            <Search  query={query} setQuery={setQuery}/>
            <div className="carrd-container">
                {
                    filteredDetails.map((item) => {
                    return(<Card key={item._id} ClubId={item._id}  name={item.name} imag={item.image} desc={item.description} />)   
                    })
                }
            </div>
        </div>
    )
}