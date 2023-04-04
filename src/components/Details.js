import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector} from 'react-redux'

const Details = () => {
  const data = useSelector(state=> state);
  const { id } = useParams();
  console.log("details data")
  return (
    <>
     <Box sx={{p:4,}}>
    <Typography gutterBottom variant="h5" component="div">
      Details Page For Post With Id {id}
    </Typography>
      <img src={`https://picsum.photos/200?random=${id}`} alt="dfnjn" />
    <Card sx={{ maxWidth: 900, backgroundColor:'#151515',color:'gray'}}>
      <CardActionArea>
        <CardContent>
           {(data) && data.filter((object) => {
         if (object.id === parseInt(id))
           return object;
       }).map((object, key) => (   
          <Typography variant="body2"  key={key}>
          <p>User ID : {object.userId}</p>
          <p>Title   : {object.title}</p>
          <p>Body    : {object.body}</p>
          </Typography>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
    </Box> 
    </>
  )
}

export default Details