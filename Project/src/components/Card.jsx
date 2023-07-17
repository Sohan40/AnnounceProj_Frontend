import './Cards.css'
import { useNavigate } from 'react-router-dom';
export default function Card({ ClubId,name, desc,imag }) {
    const navigate = useNavigate();
    return (

        <div onClick={()=>navigate(`/clubPage/${ClubId}`)} className="carrd carrd-shadow">
            <div className='carrd-image'>
              <img src={ imag } className='carrd-image'/>
            </div>
            <div className="carrd-header">
                {name}
            </div>
            <div className="carrd-body">
                {desc}
            </div>
            <div className="carrd-footer">
                <button className="btn">Deatils</button>
                <button className="btn btn-outline" >contact-sell</button>
            </div>
        </div>

    )
}