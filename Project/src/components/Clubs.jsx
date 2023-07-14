
import './Clubs.css'
import Search from './Search'
import Card from './Card'
import { useState } from 'react'
const data = [
    {
        id: crypto.randomUUID(),
        title: 'example card',
        description: 'it is description so it describes about something'
    }
    ,
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

    return (

        <div className='clubs'>
            <Search />
            <div className="carrd-container">

                {
                    details.map((item) => {
                        return(<Card key={item.id} title={item.title} desc={item.description} />)   
                    })
                }
            </div>
        </div>
    )
}