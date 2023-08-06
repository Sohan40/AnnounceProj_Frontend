import { Link } from 'react-router-dom'
import './Footer.css'

function Footer(){
    return(
        <div className='footerContainer'>
            <h1 className='footerInfo'>Developed By :
                <br className='breakDisplay'/> 
                <Link className='footerLinks' to='https://www.linkedin.com/in/abhi-sai-muramsetti-453046225/' target='_blank'>Abhi Sai</Link>
                <Link className='footerLinks' to='http://www.linkedin.com/in/sree-charan-sohan-739966272' target='_blank'>Sohan</Link>
                <br className='breakDisplay'/>
                <Link className='footerLinks' to='https://www.linkedin.com/in/pranay-suhas-elkapelly-b3630b24a' target='_blank'>Pranay Suhas</Link>
                <Link className='footerLinks' to='https://www.linkedin.com/in/pradyumna-k-7a11ba25b/' target='_blank'>Rutvik Pradyumna</Link>
            </h1>
        </div>
    )
}

export default Footer