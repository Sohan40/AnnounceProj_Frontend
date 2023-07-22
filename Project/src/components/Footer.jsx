import { Link } from 'react-router-dom'
import './Footer.css'

function Footer(){
    return(
        <div className='footerContainer'>
            <h1 className='footerInfo'>Developed By :
                <br className='breakDisplay'/> 
                <Link className='footerLinks'>Abhi Sai</Link>
                <Link className='footerLinks'>Sohan</Link>
                <br className='breakDisplay'/>
                <Link className='footerLinks'>Pranay Suhas</Link>
                <Link className='footerLinks'>Rutvik Pradyumna</Link>
            </h1>
        </div>
    )
}

export default Footer