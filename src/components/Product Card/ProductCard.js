import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from "../../assets/images/iesblurr.jpg"

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }} elevation={0}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{textAlign:'start'}}>
          <Typography gutterBottom fontSize={{xs:15,md:20}} component="div">
          ₹ 599
          </Typography>
          <Typography gutterBottom fontSize={{xs:15,md:20}} component="div">
          Inventory Product
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="success" variant='contained'>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}