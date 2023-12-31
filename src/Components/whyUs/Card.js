import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardWhy(props) {
  return (
    <Card sx={{ width: '100%', margin: '10px', minHeight: 400 }}>
      <CardActionArea>
      {props.icon}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='small'>
            {props.des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}