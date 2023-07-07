import Navbar from './Navbar'
import './Home.css'
function Home() {
    return(
        <div className='home'>
            <Navbar/>
            <div className='container-fluid' style={{flex:'1',display: 'flex', flexDirection: 'column'}}>
                <div className='row' style={{ flex: '1' }}>
                    <div className='col-12 col-md-6 content'>
                        <h1>ihi</h1>
                    </div>
                    <div className='col-12 col-md-6 image'>
                        <h1>image</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home