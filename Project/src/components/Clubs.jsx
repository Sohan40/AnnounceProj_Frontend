
import './Clubs.css'
import Search from './Search'
import Card from './Card'
import { useState } from 'react'
import data from './clubinfo'
export default function Clubs() {
    const [details, Setdetails] = useState(data);
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
                    return(<Card key={item.clubId} ClubId={item.clubId}  name={item.name} imag={item.img} desc={item.description} />)   
                    })
                }
            </div>
        </div>
    )
}