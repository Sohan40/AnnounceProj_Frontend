import './Search.css'
import Dropdown from './Dropdown'
import SearchIcon from '@mui/icons-material/Search';
export default function Search() {
    return (

        <div className="search-container">
            <div className="group">
                <Dropdown />
                <div className='for-search-icon'>
                    <div className='search-icon'>
                        <SearchIcon />
                    </div>
                    <input className="search-bar" type="text" />
                </div>

            </div>
        </div>

    )
}