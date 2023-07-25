import React, { useState } from 'react'
import ProfileModal from './ProfileModal'

export default function Profilepic() {
  const imgurl = './gamer.png';
  const [img,setImg] = useState(imgurl);

  return (
    <div>
      <div className='image-fluid'>
          <img src={img}></img>
      </div>
      <ProfileModal pic={setImg}/>
      
    </div>
  )
}
