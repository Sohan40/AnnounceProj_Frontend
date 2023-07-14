import './Cards.css'
import MyImage from './images/image1.jpeg'
export default function Card({ title, desc }) {

    return (

        <div className="carrd carrd-shadow">
            <div className='carrd-image'>
              <img src={ MyImage } className='carrd-image'/>
            </div>
            <div className="carrd-header">
                {title}
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