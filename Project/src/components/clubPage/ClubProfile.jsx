import "./ClubProfile.css"

function ClubProfile({club})
{
    return (
        <div className="club-profile">
            <img src={club.img} alt="club img" className="club-image"/>
            <h2>{club.name}</h2>
            <p>{club.description}</p>
        </div>
    );
}

export default ClubProfile;