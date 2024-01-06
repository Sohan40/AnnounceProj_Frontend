import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import axios from "axios";

export default function ImgMediaCard({ event, isCompleted, clubId, admin }) {
  const [register, setregister] = useState(false);
  async function handleChange() {
    if (register == false) {
      let res = await axios.post(`/api/user/registerEvent?postId=${event._id}`);
      if (res.status == 200) {
        console.log("event posted");
      }
    }
    else
    {
      let res = await axios.put(`/api/user/unregisterEvent?postId=${event._id}`);
      if (res.status == 200) {
        console.log("event posted");
      }
    }
    setregister(!register);
  }
  useEffect(() => {
    async function init() {
      let res = await axios.get(`/api/user/getProfile`);
      if (res.status == 200) {

        let flag=false;
        for (let i = 0; i <res.data.posts.length; i++) {
          if(res.data.posts[i]['_id']==event._id)
          {
            flag=true;
          }
        }
        
          setregister(flag)
          
        
      }
    }
    init()
  },[]);
  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={event.image ? event.image : "hi"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.description}
        </Typography>
        <p>{event.eventDate}</p>
      </CardContent>
      <CardActions>
        {admin !== "yes" &&
          (isCompleted ? (
            <Button onClick={handleChange} size="small">
              {register ? "Unregister?" : "click to register"}
            </Button>
          ) : (
            <p>Completed</p>
          ))}
      </CardActions>
    </Card>
  );
}
