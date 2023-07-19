import "./ClubProfile.css"

function ClubProfile({ club }) {
    return (
        <div className="club-profile" style={{
            backgroundImage:`url(${club.img})`,
            width:'100%',
            backgroundPosition:'center',
            backgroundSize:'cover',
             backgroundBlendMode:'multiply'
            }} >
            <h2>{club.name}</h2>
            <p>{club.description}</p>
        </div>
    );
}

export default ClubProfile;