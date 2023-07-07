import './Dropdown.css'
export default function Dropdown() {

    return(
      <>
      
        <select className='drop-down'>
            <option style={{textAlign:"center"}} value={""}>-- All --</option>
            <option style={{textAlign:"center"}} value={""}>clubs</option>
            <option style={{textAlign:"center"}} value={""}>Associations</option>
        </select>
      
      </>
    )
    
}