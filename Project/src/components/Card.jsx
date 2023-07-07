import './Cards.css'
export default function Card({title,desc}) {
    
    return (

        <div className="carrd carrd-shadow">
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