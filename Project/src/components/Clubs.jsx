
import './Clubs.css'
import Search from './Search'
import Card from './Card'
import { useState } from 'react'
const data = [
    {
        id: crypto.randomUUID(),
        title: 'CSEA',
        description: 'it is description so it describes about something'
    }
    ,
    {
        id: crypto.randomUUID(),
        title: 'ECEA',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'EEEA',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'InnovationGarage',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'ASTRONOMY',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'NatureClub',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'DanceAndDrama',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    },
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    }
]
export default function Clubs() {
    const [details, Setdetails] = useState(data);
    const [query,setQuery]=useState("");
    const filteredDetails=details.filter(item=>{
        return item.title.toLowerCase().includes(query.toLowerCase());
    
    })
    return (

        <div className='clubs'>
            <Search  query={query} setQuery={setQuery}/>
            <div className="carrd-container">

                {
                    filteredDetails.map((item) => {
                        return(<Card key={item.id} title={item.title} desc={item.description} />)   
                    })
                }
            </div>
        </div>
    )
}