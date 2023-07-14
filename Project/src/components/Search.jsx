import './Search.css'
import Dropdown from './Dropdown'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
export default function Search({query,setQuery}) {
    

    return (
        
        <div className="search-container">
            <div className="group">
                <Dropdown />
                <div className='for-search-icon'>
                    <div className='search-icon'>
                        <SearchIcon />
                    </div>
                    <input value={query} onChange={e=>{setQuery(e.target.value)}}  className="search-bar"  type="text" />
                </div>

            </div>
        </div>

    )
}