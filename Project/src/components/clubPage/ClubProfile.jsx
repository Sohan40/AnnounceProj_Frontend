import "./ClubProfile.css"

function ClubProfile({ club }) {
    return (
        <>
        <div className="club-profile" style={{
            backgroundImage:`url(${club.img})`,
            filter:'blur(2px)',
            backgroundPosition:'center',
            backgroundSize:'cover',
             backgroundBlendMode:'multiply'
            }} >
           
        </div>
        <div className="background-text">
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            </div>
        </>
            
       
    );
}

export default ClubProfile;