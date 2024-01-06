import { Link } from 'react-router-dom'
import './Footer.css'

function Footer(){
    return(
        <div className='footerContainer'>
            <h1 className='footerInfo'>Developed By :
                <br className='breakDisplay'/> 
                <Link className='footerLinks' to='https://www.linkedin.com/in/abhi-sai-muramsetti-453046225/' target='_blank'>Abhi Sai</Link>
                <Link className='footerLinks' to='https://www.linkedin.com/in/anji-nayak-71320524a/' target='_blank'>Anji nayak</Link>
                <br className='breakDisplay'/>
                <Link className='footerLinks' to='https://www.linkedin.com/in/sai-ashish-chityala-358bb5282/' target='_blank'>sai ashish</Link>
                <Link className='footerLinks' to='https://www.linkedin.com/in/pradyumna-k-7a11ba25b/' target='_blank'>Rutvik Pradyumna</Link>
            </h1>
        </div>
    )
}

export default Footer