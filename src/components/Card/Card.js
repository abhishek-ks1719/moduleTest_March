import React from 'react'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const CardPost = ({ postData }) => {

  return (
    <Link to={`items/${postData.id}`} >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={`https://picsum.photos/200?random=${postData.id}`}
            alt="post-img"
          />
          <CardContent sx={{height:145}}>
            <Typography variant="body2" color="text.secondary">
              User ID : {postData.userId}
              <p>Title   : {postData.title.slice(0,40)}...</p>
              <p>Body    : {postData.body.slice(0,120)}</p>
              <p>Read More...</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}


export default CardPost