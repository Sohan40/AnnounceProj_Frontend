import Navbar from './Navbar'
import './Home.css'
function Home() {
    return(
        <div className='home'>
            <Navbar/>
            <div className='container-fluid' style={{flex:'1',display: 'flex', flexDirection: 'column'}}>
                <div className='row smallDevice' style={{ flex: '1' }}>
                    <div className='col-12 col-md-6 content'>
                        <h1 className='homeHead'>A place for all announcements...</h1>
                        <p className='text-white' style={{textAlign:'justify'}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <div className='signBtnContainer'>
                            <button className='signBtn'>Sign Up</button>
                            <button className='signBtn'>Sign In</button>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 image' style={{padding:'0',margin:'0'}}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home