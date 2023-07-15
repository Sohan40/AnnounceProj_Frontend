// import "./Event.css"

// function Event({ event, isCompleted }) {
//     return (
//         <div className="event">
//             <img src={event.img} alt={event.name} className="card-image" />
//             <div className="event-content">
//                 <h3 className="event-title">{event.name}</h3>
//                 <p className="event-description">{event.description}</p>
//                 <p className="event-date">{event.date}</p>
//                 {isCompleted?<button>Register</button>:<p>Completed</p>}
//             </div>
//         </div>
//     );
// }

// export default Event;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MyImage from '../images/image1.jpeg'

export default function ImgMediaCard({event,isCompleted}) {
  return (
    <Card sx={{ maxWidth: 345,m:5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={event.img ? event.img:MyImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <p>{event.date}</p>
      </CardContent>
      <CardActions>
      {isCompleted?<Button size="small">Register</Button>:<p>Completed</p>}
      </CardActions>
    </Card>
  );
}